import React from 'react';

class CategoryList extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/expense_category/index')
    .then(response => {
      response.json().then( p => {
        this.setState({categories: p});
        console.log(p);
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.categories.map(p =>
          <span>{p.name}</span> 
          )}
      </div>
    )
  }
}

export default CategoryList;