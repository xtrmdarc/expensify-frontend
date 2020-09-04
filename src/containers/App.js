import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import AddMeasure from './AddMeasure';
import {
  loadCategoriesList, loadProgress, logOutUser, loginUser,
} from '../actions';
import expensifyApi from '../api/expensify';
import Progress from './Progress';
import ProgressDetail from './ProgressDetail';
import Authentication from '../utils/authentication';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadUserProgress = this.loadUserProgress.bind(this);
    this.logoutUserApp = this.logoutUserApp.bind(this);
  }

  componentDidMount() {
    const { updateCategoriesList } = this.props;

    expensifyApi.listCategories().then(p => {
      updateCategoriesList(p);
    });
    this.loadUserProgress();
  }

  loadUserProgress() {
    const { user, loadProgress } = this.props;

    expensifyApi.getProgress(user.id).then(p => {
      loadProgress(p);
    });
  }

  logoutUserApp() {
    const { logOutUser } = this.props;
    Authentication.logout();
    logOutUser();
  }

  render() {
    const {
      headerTitle, headerType, activeTab, user, loginUser,
      prevPage, updateCategoriesList,
    } = this.props;

    const loggedIn = Authentication.isValidLogin(user, loginUser);

    return (
      loggedIn === 'trying' ? <div /> : (
        <Router>
          <Switch>
            <Route exact path="/login">
              { !loggedIn ? <Login loginUser={loginUser} /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/signUp">
              { !loggedIn ? <SignUp loginUser={loginUser} /> : <Redirect to="/" />}
            </Route>
            <Route path="/">
              { loggedIn ? (
                <div>
                  <Header
                    headerTitle={headerTitle}
                    headerType={headerType}
                    logOutUser={this.logoutUserApp}
                    prevPage={prevPage}
                  />
                  <div className="contentWrapper">
                    <Route exact path="/expense/:id">
                      <AddMeasure updateTitle={this.updateTitle} loadProgress={this.loadUserProgress} />
                    </Route>
                    <Route exact path="/progress/month/:month">
                      <ProgressDetail userId={user.id} updateCategoriesList={updateCategoriesList} />
                    </Route>
                    <Route exact path="/progress/:id">
                      <Progress user={user} loadProgress={this.loadUserProgress} />
                    </Route>
                    <Route exact path="/">
                      <CategoryList updateTitle={this.updateTitle} />
                    </Route>
                  </div>
                  <FooterNav actualTab={activeTab} userId={user.id} />
                </div>
              ) : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      )
    );
  }
}

const mapStateToProps = state => ({
  headerTitle: state.pageNavigation.headerTitle,
  headerType: state.pageNavigation.headerType,
  prevPage: state.pageNavigation.prevPage,
  activeTab: state.pageNavigation.activeTab,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateCategoriesList: categories => dispatch(loadCategoriesList(categories)),
  loadProgress: progress => dispatch(loadProgress(progress)),
  loginUser: data => dispatch(loginUser(data)),
  logOutUser: () => dispatch(logOutUser()),
});

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  loadProgress: PropTypes.func.isRequired,
  updateCategoriesList: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired,
  headerType: PropTypes.number.isRequired,
  activeTab: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  prevPage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
