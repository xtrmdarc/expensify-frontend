import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import SecurityWrapper from './containers/SecurityWrapper';

const store = createStore(rootReducer, {
  pageNavigation: {
    headerTitle: '',
    headerType: 0,
    activeTab: '',
  },
  categoriesList: [],
  addMeasureItem: {},
  user: {

  },
});

ReactDOM.render(
  <Provider store={store}>
    <SecurityWrapper />
  </Provider>,
  document.getElementById('root')
);
