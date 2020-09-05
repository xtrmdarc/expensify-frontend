import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import FooterNav from '../components/FooterNav';

/* eslint-disable */
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

/* eslint-enable */
test('Category list tab renders correctly', () => {
  const actualTab = 'list';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('listTab')).toBeDefined();
});

test('Progress tab renders correctly', () => {
  const actualTab = 'progress';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('progressTab')).toBeDefined();
});

test('Category list tab show active class if prop is present', () => {
  const actualTab = 'list';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('listTab').className).toMatch(/active/);
});

test('Progress tab show active class if prop is present', () => {
  const actualTab = 'progress';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('progressTab').className).toMatch(/active/);
});

test('Category list tab show active class if prop is not present', () => {
  const actualTab = 'proress';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('listTab').className).not.toMatch(/active/);
});

test('Progress tab show active class if prop is not present', () => {
  const actualTab = 'list';
  render(<FooterNav actualTab={actualTab} userId={1} />);

  expect(screen.getByTestId('progressTab').className).not.toMatch(/active/);
});
