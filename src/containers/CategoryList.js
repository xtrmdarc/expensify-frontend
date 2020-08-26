import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeHeaderTitle } from '../actions';
import expensifyApi from '../api/expensify';
import CategoryItem from '../components/CategoryItem';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
    this.props.changeHeader('Choose category', 1);
  }

  componentDidMount() {
    expensifyApi.listCategories().then( p => {
      this.setState({categories: p});
    });
  }

  render() {
    return (
      <div className="categoriesWrapper">
          {this.state.categories.map(p =>
            (
              <CategoryItem categoryData={p} />
            )
          )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeHeader: (title, headerType) => dispatch(changeHeaderTitle(title, 1)),
});

export default connect(null, mapDispatchToProps)(CategoryList);