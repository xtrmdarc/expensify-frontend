import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CategoryItem from '../components/CategoryItem';
import rootReducer from '../reducers';

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

test('CategoryItem name renders correctly', () => {
  const categoryData = {
    name: 'Utilities',
    id: 1,
  };
  const component = render(
    <CategoryItem categoryData={categoryData} />,
  );

  expect(screen.getByText(categoryData.name)).toBeDefined();
});
