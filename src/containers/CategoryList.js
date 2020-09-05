import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeHeaderTitle, changeActiveTab } from '../actions';
import CategoryItem from '../components/CategoryItem';

class CategoryList extends React.Component {
  componentDidMount() {
    const { setActiveTab, changeHeader } = this.props;
    changeHeader('Choose category', 1);
    setActiveTab('list');
  }

  render() {
    const { categoriesList } = this.props;
    return (
      <div className="categoriesWrapper">
        {categoriesList.map(p => (
          <CategoryItem key={p.name} categoryData={p} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.categoriesList,
});

const mapDispatchToProps = dispatch => ({
  changeHeader: title => dispatch(changeHeaderTitle(title, 1)),
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
});

CategoryList.propTypes = {
  changeHeader: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  categoriesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
