import React from 'react';
import CategoryList from './CategoryList';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMeasure from './AddMeasure';
import { connect } from 'react-redux';
import { loadCategoriesList } from '../actions';
import expensifyApi from '../api/expensify';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    expensifyApi.listCategories().then( p => {
      this.props.updateCategoriesList(p)
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Header headerTitle={this.props.headerTitle} headerType={this.props.headerType}/>
            <div className="contentWrapper">
              <Switch>
                <Route exact path="/">
                  {/* <CategoryList updateTitle={this.updateTitle} /> */}
                  <Login />
                </Route>
                <Route exact path="/expense/:id">
                  <AddMeasure updateTitle={this.updateTitle}  />
                </Route>
              </Switch>
            </div>
          <FooterNav />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.pageNavigation.headerTitle,
  headerType: state.pageNavigation.headerType,
});

const mapDispatchToProps = dispatch => ({
  updateCategoriesList: categories => dispatch(loadCategoriesList(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);