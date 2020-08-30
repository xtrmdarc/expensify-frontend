import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeHeaderTitle, changeActiveTab } from '../actions';
import CategoryItem from '../components/CategoryItem';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.props.changeHeader('Choose category', 1);
  }

  componentDidMount() {
    const { setActiveTab } = this.props;
    setActiveTab('list');
  }

  render() {
    return (
      <div className="categoriesWrapper">
        {this.props.categoriesList.map(p => (
          <CategoryItem key={p.name} categoryData={p} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.categoriesList,
});

const mapDispatchToProps = dispatch => ({
  changeHeader: title => dispatch(changeHeaderTitle(title, 1)),
  setActiveTab: tabName => dispatch(changeActiveTab(tabName)),
});

CategoryList.propTypes = {
  changeHeader: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  categoriesList: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
