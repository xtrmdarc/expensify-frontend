import React from 'react';
import { connect } from 'react-redux';
import { changeHeaderTitle } from '../actions';
import expensifyApi from '../api/expensify';

class AddMeasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue: '',
      dateValue: '',
    }
    this.props.changeHeader('Add measurement', 2);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    const elId = e.target.id;
    this.setState({
      [elId]: val,
    });
  }

  handleSubmit() {
    console.log(this.state);
    const measurementObj = {
      value: parseFloat(this.state.amountValue),
      date: this.state.dateValue,
      user_id: 1,
      ex_cat_id: 1,
    };
    console.log(measurementObj);
    expensifyApi.createNewMeasurement(measurementObj).catch(e => console.log(e));
  }

  render() { 
    return ( 
      <div className="addMeasure">
        <div className="pageHeader">
          <h2 className="pageTitle">Utility expense</h2>
        </div>
        <div className="mainContent">
          <input id="amountValue" className="valueInput" type="text" placeholder="$0.00" onChange={this.handleChange} value={this.state.valueInput}/>
          <label htmlFor="date">
            Date
            <input id="dateValue" type="date" onChange={this.handleChange} />
          </label>
          <button className="cta" onClick={this.handleSubmit} value={this.state.dateValue}>
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
