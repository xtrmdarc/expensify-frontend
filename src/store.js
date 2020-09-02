import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, {
  pageNavigation: {
    headerTitle: '',
    headerType: 0,
    activeTab: '',
  },
  categoriesList: [],
  addMeasureItem: {},
  user: {
    token: localStorage.getItem('userToken') || '',
  },
  progress: [],
});

export default store;
