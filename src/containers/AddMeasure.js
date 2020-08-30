import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { changeHeaderTitle, setMeasureItem, changeActiveTab } from '../actions';
import expensifyApi from '../api/expensify';

class AddMeasure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue: '',
      dateValue: '',
      errorSubmission: '',
    };
    const { changeHeader } = this.props;
    changeHeader('Add measurement', 2);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { setActiveTab, setMeasureItem } = this.props;
    expensifyApi.getCategoryInfo(id).then(info => {
      setMeasureItem(info);
    });
    setActiveTab('list');
  }

  handleChange(e) {
    let val = e.target.value;
    const elId = e.target.id;

    if (elId === 'amountValue') {
      val = e.target.value.replace(/[^(\d.)]/g, '');
      let firstDotFound = false;
      const valArr = val.split('');
      val = '';
      valArr.forEach(c => {
        if (firstDotFound) {
          if (c != '.') val += c;
        } else {
          if (c === '.') {
            firstDotFound = true;
          }
          val += c;
        }
      });
    }

    this.setState({
      [elId]: val,
    });
  }

  handleSubmit() {
    const { user, measureItem, loadProgress } = this.props;
    const { amountValue, dateValue } = this.state;
    if (amountValue === '0.00' || !parseFloat(amountValue)) {
      this.setState({
        errorSubmission: "Expense amount can't be blank",
      });
      return;
    }
    if (dateValue === '') {
      this.setState({
        errorSubmission: 'Specify a date before submitting',
      });
      return;
    }

    const measurementObj = {
      value: parseFloat(amountValue) ? parseFloat(amountValue) : 0.00,
      date: dateValue,
      user_id: user.id,
      ex_cat_id: measureItem.id,
    };

    expensifyApi.createNewMeasurement(measurementObj)
      .then(() => {
        loadProgress();
      })
      .catch(e => e);
    this.props.history.push('/');
  }

  render() {
    const { measureItem } = this.props;
    const { errorSubmission, amountValue } = this.state;
    return (
      <div className="addMeasure">
        <div className="pageHeader">
          <h2 className="pageTitle">
            {measureItem.name}
            {' '}
            expense
          </h2>
        </div>
        <div className="mainContent">
          <input id="amountValue" className="valueInput" type="text" placeholder="$0.00" onChange={this.handleChange} value={amountValue} />
          <label htmlFor="date">
            Date
            <input id="dateValue" type="date" onChange={this.handleChange} />
          </label>
          {errorSubmission !== '' ? <span className="errorSubmission">{errorSubmission}</span> : ''}
          <button className="cta" onClick={this.handleSubmit} value={this.state.dateValue}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  measureItem: state.addMeasureItem,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  changeHeader: title => dispatch(changeHeaderTitle(title, 2)),
  setMeasureItem: measureItem => dispatch(setMeasureItem(measureItem)),
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
});

AddMeasure.propTypes = {
  changeHeader: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setMeasureItem: PropTypes.func.isRequired,
  loadProgress: PropTypes.func.isRequired,
  measureItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddMeasure));
