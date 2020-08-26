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
import Progress from './Progress';

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
    const{ headerTitle, headerType, activeTab, user } = this.props;
    console.log(this.props);
    return (
      <div>
        <Router>
          <Header headerTitle={headerTitle} headerType={headerType}/>
            <div className="contentWrapper">
              <Switch>
                <Route exact path="/">
                  <CategoryList updateTitle={this.updateTitle} />
                </Route>
                <Route exact path="/expense/:id">
                  <AddMeasure updateTitle={this.updateTitle}  />
                </Route>
                <Route>
                  <Progress  />
                </Route>
              </Switch>
            </div>
          <FooterNav actualTab={activeTab} userId={user.id} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.pageNavigation.headerTitle,
  headerType: state.pageNavigation.headerType,
  activeTab: state.pageNavigation.activeTab,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateCategoriesList: categories => dispatch(loadCategoriesList(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);