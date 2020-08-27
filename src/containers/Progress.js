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
    changeHeader('Track your progress');
  }

  render() { 
    const { progress } = this.props;
    let dailyProgress = {};

    progress.forEach(measure => {
      if(!dailyProgress[measure.date])
        dailyProgress[measure.date] = {
          totalAmount: measure.value,
          measurements: [measure],
        };
      else {
        dailyProgress[measure.date].totalAmount += measure.value;
        dailyProgress[measure.date].measurements.push(measure);
      }
    });
    const renderList = [];

    for(const [key, value] of (Object.entries(dailyProgress)).sort((a,b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())) {
      renderList.push(<ProgressItem progressData={value} progressDate={key}/>)
    }

    return (  
      <div className="progress">
        {renderList}
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
