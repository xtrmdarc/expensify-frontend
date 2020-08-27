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
    changeHeader('Track daily expenses');
  }

  render() { 
    const { progress } = this.props;
    let dailyProgress = {};

    progress.forEach(measure => {
      if(!dailyProgress[measure.date])
        dailyProgress[measure.date] = {
          date: measure.date,
          totalAmount: measure.value,
          measurements: [measure],
        };
      else {
        dailyProgress[measure.date].totalAmount += measure.value;
        dailyProgress[measure.date].measurements.push(measure);
      }
    });
    const renderList = [];
    const orderedProgress = (Object.entries(dailyProgress)).sort((a,b) => new Date(b[0]).getTime() - new Date(a[0]).getTime());
    //get todays progress
    const todayProgress = [];
    const pastProgress = [];
    const futureProgress = [];
    const today = new Date(Date.now());
    // todayProgress.push(orderedProgress.filter(p => new Date(p.date).toDateString === today));
    // get past progress

    
    for(const [key, value] of orderedProgress) {
      const progressItem = <ProgressItem progressData={value} progressDate={key} />;
      const progressItemDate = new Date(value.date);
      if(progressItemDate.toDateString() === today.toDateString()) {
        todayProgress.push(progressItem);
      }
      else if(progressItemDate.getTime() < today.getTime() ){
        pastProgress.push(progressItem);
      }
      else  futureProgress.push(progressItem);

      // renderList.push(<ProgressItem progressData={value} progressDate={key}/>)
    }
    return (  
      <div className="progress">
        <h4 className="titleList">Future</h4>
        {futureProgress}
        <h4 className="titleList">Today</h4>
        {todayProgress}
        <h4 className="titleList">Past</h4>
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
