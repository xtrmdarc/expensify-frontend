import React from 'react';
import { connect } from 'react-redux';
import { changeActiveTab, changeHeaderTitle, loadProgress } from '../actions';
import ProgressItem from '../components/ProgressItem';

class Progress extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setActiveTab, changeHeader } = this.props;
    setActiveTab('progress');
    changeHeader('Track monthly expenses');
  }

  render() { 
    const { progress } = this.props;
    let dailyProgress = {};

    progress.forEach(measure => {
      const actualDate = new Date(measure.date);
      if(!dailyProgress[actualDate.getMonth()])
        dailyProgress[actualDate.getMonth()] = {
          date: measure.date,
          totalAmount: measure.value,
          measurements: [measure],
        };
      else {
        dailyProgress[actualDate.getMonth()].totalAmount += measure.value;
        dailyProgress[actualDate.getMonth()].measurements.push(measure);
      }
    });
    const renderList = [];
    const orderedProgress = (Object.entries(dailyProgress)).sort((a,b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());

    const todayProgress = [];
    const pastProgress = [];
    const futureProgress = [];
    const today = new Date(Date.now());

    let prevItem;

    for(const [key, value] of orderedProgress) {
      const progressItem = <ProgressItem key={key} progressData={value} progressDate={key} prevData={prevItem} />;
      const progressItemDate = new Date(value.date);
      if(progressItemDate.getMonth() === today.getMonth()) {
        todayProgress.push(progressItem);
      }
      else if(progressItemDate.getMonth() < today.getMonth() ){
        pastProgress.push(progressItem);
      }
      else  futureProgress.push(progressItem);

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

const mapStateToProps = state => ({
  progress: state.progress,
});

const mapDispatchToProps = dispatch => ({
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
  changeHeader: headerTitle => dispatch(changeHeaderTitle(headerTitle, 1)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Progress);
