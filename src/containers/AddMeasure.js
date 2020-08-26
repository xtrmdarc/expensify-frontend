import React from 'react';
import { connect } from 'react-redux';
import { changeHeaderTitle, setMeasureItem, changeActiveTab } from '../actions';
import expensifyApi from '../api/expensify';
import { withRouter } from 'react-router-dom';

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

  componentDidMount() {
    const { id } = this.props.match.params;
    const { setActiveTab } = this.props;
    expensifyApi.getCategoryInfo(id).then( info => {
      this.props.setMeasureItem(info)
    });
    setActiveTab('list');
  }

  handleChange(e) {
    const val = e.target.value;
    const elId = e.target.id;
    this.setState({
      [elId]: val,
    });
  }

  handleSubmit() {
    const { user, measureItem } = this.props;
    const measurementObj = {
      value: parseFloat(this.state.amountValue),
      date: this.state.dateValue,
      user_id: user.id,
      ex_cat_id: measureItem.id,
    };
    expensifyApi.createNewMeasurement(measurementObj).catch(e => console.log(e));
  }

  render() { 
    const {measureItem}  = this.props;
    return ( 
      <div className="addMeasure">
        <div className="pageHeader">
          <h2 className="pageTitle">{measureItem.name} expense</h2>
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

const mapStateToProps = state => ({
  measureItem: state.addMeasureItem,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  changeHeader: (title) => dispatch(changeHeaderTitle(title, 2)),
  setMeasureItem: (measureItem) => dispatch(setMeasureItem(measureItem)),
  setActiveTab: (tabName) => dispatch(changeActiveTab(tabName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddMeasure));
