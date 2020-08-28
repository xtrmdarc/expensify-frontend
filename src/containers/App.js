import React from 'react';
import CategoryList from './CategoryList';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMeasure from './AddMeasure';
import { connect } from 'react-redux';
import { loadCategoriesList, loadProgress, logOutUser } from '../actions';
import expensifyApi from '../api/expensify';
import Login from './Login';
import Progress from './Progress';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadUserProgress = this.loadUserProgress.bind(this);
  }
  
  loadUserProgress() {
    const { user } = this.props;
    console.log(user);
    expensifyApi.getProgress(user.id).then( p => {
      this.props.loadProgress(p)
    });
  }

  componentDidMount() {
    expensifyApi.listCategories().then( p => {
      this.props.updateCategoriesList(p)
    });
    this.loadUserProgress();
    
  }

  render() {
    const{ headerTitle, headerType, activeTab, user, loadProgress, logOutUser } = this.props;

    return (
      <div>
        <Router>
          <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser}/>
            <div className="contentWrapper">
              <Switch>
                <Route exact path="/expense/:id">
                  <AddMeasure updateTitle={this.updateTitle} loadProgress={this.loadUserProgress}  />
                </Route>
                <Route exact path="/progress/:id">
                  <Progress user={user} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);