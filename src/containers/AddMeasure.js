import React from 'react';
import { connect } from 'react-redux';
import { changeHeaderTitle } from '../actions';

class AddMeasure extends React.Component {
  constructor(props) {
    super(props);
    this.props.changeHeader('Add measurement',2);
  }

  render() { 
    let date = new Date()

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    console.log(`${day}/${month}/${year}`);
    return ( 
      <div className="addMeasure">
        <div className="pageHeader">
          <h2 className="pageTitle">Utility expense</h2>
        </div>
        <div className="mainContent">
          <input className="valueInput" type="text" placeholder="$0.00"/>
          <label htmlFor="date">
            Date
            <input type="date" />
          </label>
          <button className="cta">
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeader: (title, headerType) => dispatch(changeHeaderTitle(title, 2)),
});

export default connect(null, mapDispatchToProps)(AddMeasure);
