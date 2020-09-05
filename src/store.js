import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, {
  pageNavigation: {
    headerTitle: '',
    headerType: 0,
    activeTab: '',
    prevPage: '/',
  },
  categoriesList: [],
  addMeasureItem: {},
  user: { },
  progress: [],
});

export default store;
