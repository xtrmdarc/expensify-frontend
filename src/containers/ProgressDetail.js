import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { changeHeaderTitle, changeActiveTab } from '../actions';
import expensifyApi from '../api/expensify';
import ProgressDetailItem from '../components/ProgressDetailItem';

class ProgressDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressDetail: [],
    };
  }

  componentDidMount() {
    const {
      setActiveTab, changeHeader, userId, categoriesList, updateCategoriesList, match,
    } = this.props;
    const { month } = match.params;

    setActiveTab('progress');
    const actualDate = new Date();
    actualDate.setMonth(month);

    const prevPage = `/progress/${userId}`;
    changeHeader(actualDate.toLocaleString('en-us', { month: 'long' }), prevPage);

    const updateProgressDetail = (catAux = []) => {
      expensifyApi.getProgressDetail(userId, parseInt(month, 10) + 1).then(p => {
        let progressDetailAux = categoriesList.slice();
        if (catAux.length > 0) progressDetailAux = catAux;

        progressDetailAux = progressDetailAux.map(cat => {
          const newCatObj = { ...cat };
          newCatObj.expenses = [...(p.filter(exp => exp.expense_category.name === cat.name))];
          return newCatObj;
        });

        this.setState({
          progressDetail: progressDetailAux,
        });
      });
    };

    if (categoriesList.length === 0) {
      expensifyApi.listCategories().then(p => {
        updateCategoriesList(p);
        updateProgressDetail(p);
      });
    } else updateProgressDetail();
  }

  render() {
    const { progressDetail } = this.state;
    return (
      <div className="progressDetail">
        { progressDetail.map(p => (
          <ProgressDetailItem key={p.name} categoryName={p.name} expenses={p.expenses} />
        )) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.categoriesList,
});

const mapDispatchToProps = dispatch => ({
  changeHeader: (title, prevPage) => dispatch(changeHeaderTitle(title, 2, prevPage)),
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
});

ProgressDetail.propTypes = {
  userId: PropTypes.number.isRequired,
  updateCategoriesList: PropTypes.func.isRequired,
  changeHeader: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      month: PropTypes.string,
    }),
  }).isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProgressDetail));
