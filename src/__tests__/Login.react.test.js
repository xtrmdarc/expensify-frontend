import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import Login from '../components/Login';

const initialStateBase = {
  pageNavigation: {
    headerTitle: '',
    headerType: 0,
    activeTab: '',
  },
  categoriesList: [],
  addMeasureItem: {},
  user: {

  },
  progress: [],
};
const storeBase = createStore(rootReducer, initialStateBase);

function render(
  ui,
  {
    initialState = initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {' '}
          {children}
          {' '}
        </Router>
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test('Login username input renders correctly', () => {
  const loginUser = jest.fn();
  render(<Login loginUser={loginUser} />);

  expect(screen.getByTestId('username')).toBeDefined();
});

test('Login password input renders correctly', () => {
  const loginUser = jest.fn();
  render(<Login loginUser={loginUser} />);

  expect(screen.getByTestId('password')).toBeDefined();
});

test('Login button renders correctly', () => {
  const loginUser = jest.fn();
  render(<Login loginUser={loginUser} />);

  expect(screen.getByTestId('loginBtn')).toBeDefined();
});
