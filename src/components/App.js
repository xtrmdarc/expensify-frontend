import React from 'react';
import CategoryList from '../containers/CategoryList';
import Header from './Header';
import FooterNav from './FooterNav';

const App = () => {
  return (
    <div>
      <Header />
      <div class="contentWrapper">
        <CategoryList />
      </div>
      <FooterNav />
    </div>
    );
}

export default App;