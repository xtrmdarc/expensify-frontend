import React from 'react';
import CategoryList from './CategoryList';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMeasure from './AddMeasure';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Router>
          <Header headerTitle={this.props.headerTitle} headerType={this.props.headerType}/>
            <div className="contentWrapper">
              <Switch>
                <Route exact path="/">
                  <CategoryList updateTitle={this.updateTitle} />
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

export default connect(mapStateToProps)(App);