import React from 'react';
import { connect } from 'react-redux';
import { changeActiveTab, changeHeaderTitle } from '../actions';

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
    return (  
      <div className="progress">

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
  changeHeader: headerTitle => dispatch(changeHeaderTitle(headerTitle, 1))
})
 
export default connect(null, mapDispatchToProps)(Progress);