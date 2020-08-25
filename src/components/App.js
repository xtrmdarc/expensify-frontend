import React from 'react';
import CategoryList from '../containers/CategoryList';
import Header from './Header';
import FooterNav from './FooterNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddMeasure from '../containers/AddMeasure';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <div className="contentWrapper">
          <Switch>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route exact path="/expense/:id">
              <AddMeasure />
            </Route>
          </Switch>
        </div>
        <FooterNav />
      </Router>
    </div>
    );
}

export default App;