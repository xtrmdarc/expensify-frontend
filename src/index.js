import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import { Provider } from 'react-redux';
import store from './store';
import SecurityWrapper from './containers/SecurityWrapper';

ReactDOM.render(
  <Provider store={store}>
    <SecurityWrapper />
  </Provider>,
  document.getElementById('root'),
);
