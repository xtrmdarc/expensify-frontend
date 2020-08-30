import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import Header from '../components/Header';

/* eslint-disable react/prop-types */
function render(
  ui,
  {
    initialState = {
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
    },
    store = createStore(rootReducer, initialState),
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

/* eslint-enable react/prop-types */
test('Header title renders correctly', () => {
  const headerTitle = 'Choose category';
  const headerType = 1;
  const logOutUser = () => {};
  render(
    <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser} />,
  );

  expect(screen.getByText('Choose category')).toBeDefined();
});

test('Header does not render back button if headerType equals 1', () => {
  const headerTitle = 'Choose category';
  const headerType = 1;
  const logOutUser = () => {};
  render(
    <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser} />,
  );

  expect(screen.getByText('Back').className).toMatch(/hidden/);
});

test('Header does render back button if headerType is not equal to 1', () => {
  const headerTitle = 'Choose category';
  const headerType = 2;
  const logOutUser = () => {};
  render(
    <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser} />,
  );

  expect(screen.getByText('Back').className).not.toMatch(/hidden/);
});

test('Header renders a logout button', () => {
  const headerTitle = 'Choose category';
  const headerType = 2;
  const logOutUser = () => {};
  render(
    <Header headerTitle={headerTitle} headerType={headerType} logOutUser={logOutUser} />,
  );

  expect(screen.getByText('Log out')).toBeDefined();
});
