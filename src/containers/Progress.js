import React from 'react';
import { connect } from 'react-redux';
import { changeActiveTab, changeHeaderTitle, loadProgress } from '../actions';

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
    console.log(progress);
    return (  
      <div className="progress">
        {progress.map(p => (
          <div> {p.value} </div>
        ))}
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
