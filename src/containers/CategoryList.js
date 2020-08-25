import React from 'react';

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
      <div class="categoriesWrapper">
          {this.state.categories.map(p =>
            (
              <a class="categoryItem">
                <img src="" alt=""/>
                <span>{p.name}</span>
              </a>
            )
          )}
      </div>
    )
  }
}

export default CategoryList;