import React from 'react';
import TestImage from '../assets/img/test.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeHeaderTitle } from '../actions';
import expensifyApi from '../api/expensify';

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
              <Link to="/expense/name" href="#" className="categoryItem">
                <img src={TestImage} alt=""/>
                <span>{p.name}</span>
              </Link>
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