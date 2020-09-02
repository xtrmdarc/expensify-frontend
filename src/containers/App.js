import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import AddMeasure from './AddMeasure';
import { loadCategoriesList, loadProgress, logOutUser } from '../actions';
import expensifyApi from '../api/expensify';
import Progress from './Progress';

class App extends React.Component {
  componentDidMount() {
    const { updateCategoriesList } = this.props;
    expensifyApi.listCategories().then(p => {
      updateCategoriesList(p);
    });
    this.loadUserProgress();
  }

  loadUserProgress = () => {
    const { user, loadProgress } = this.props;

    expensifyApi.getProgress(user.id).then(p => {
      loadProgress(p);
    });
  }

  render() {
    const {
      headerTitle, headerType, activeTab, user, logOutUser,
    } = this.props;

    return (
      <div>
        <Router>
          <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser} />
          <div className="contentWrapper">
            <Switch>
              <Route exact path="/expense/:id">
                <AddMeasure updateTitle={this.updateTitle} loadProgress={this.loadUserProgress} />
              </Route>
              <Route exact path="/progress/:id">
                <Progress user={user} loadProgress={this.loadUserProgress} />
              </Route>
              <Route path="/">
                <CategoryList updateTitle={this.updateTitle} />
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
  updateCategoriesList: categories => dispatch(loadCategoriesList(categories)),
  loadProgress: progress => dispatch(loadProgress(progress)),
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
  logOutUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
