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
      <div>
        <ul>
          {this.state.categories.map(p =>
            <li>{p.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default CategoryList;