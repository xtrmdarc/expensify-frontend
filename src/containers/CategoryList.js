import React from 'react';
import TestImage from '../assets/img/test.svg';
import { Link } from 'react-router-dom';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    fetch('/expense_category/index')
    .then(response => {
      response.json().then( p => {
        this.setState({categories: p});
        console.log(p);
      });
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

export default CategoryList;