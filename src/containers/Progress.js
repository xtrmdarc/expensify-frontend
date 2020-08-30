import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeActiveTab, changeHeaderTitle } from '../actions';
import ProgressItem from '../components/ProgressItem';

class Progress extends React.Component {
  componentDidMount() {
    const { setActiveTab, changeHeader } = this.props;
    setActiveTab('progress');
    changeHeader('Track monthly expenses');
  }

  render() {
    const { progress } = this.props;
    const dailyProgress = {};

    progress.forEach(measure => {
      const actualDate = new Date(measure.date);
      if (!dailyProgress[actualDate.getMonth()]) {
        dailyProgress[actualDate.getMonth()] = {
          date: measure.date,
          totalAmount: measure.value,
          measurements: [measure],
        };
      } else {
        dailyProgress[actualDate.getMonth()].totalAmount += measure.value;
        dailyProgress[actualDate.getMonth()].measurements.push(measure);
      }
    });

    const orderedProgress = (Object.entries(dailyProgress))
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());

    const todayProgress = [];
    const pastProgress = [];
    const futureProgress = [];
    const today = new Date(Date.now());

    let prevItem;
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of orderedProgress) {
      const progressItem = (
        <ProgressItem
          key={key}
          progressData={value}
          progressDate={key}
          prevData={prevItem}
        />
      );

      const progressItemDate = new Date(value.date);
      if (progressItemDate.getMonth() === today.getMonth()) {
        todayProgress.push(progressItem);
      } else if (progressItemDate.getMonth() < today.getMonth()) {
        pastProgress.push(progressItem);
      } else futureProgress.push(progressItem);

      prevItem = value;
    }

    pastProgress.reverse();
    futureProgress.reverse();

    return (
      <div className="progress">
        <h4 className="titleList">Upcoming</h4>
        {futureProgress}
        <h4 className="titleList">This month</h4>
        {todayProgress}
        <h4 className="titleList">Previous</h4>
        {pastProgress}
      </div>
    );
  }
}
/* eslint-enable no-restricted-syntax */

const mapStateToProps = state => ({
  progress: state.progress,
});

const mapDispatchToProps = dispatch => ({
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
  changeHeader: headerTitle => dispatch(changeHeaderTitle(headerTitle, 1)),
});

Progress.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  changeHeader: PropTypes.func.isRequired,
  progress: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
