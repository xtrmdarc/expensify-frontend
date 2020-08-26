import { combineReducers } from 'redux';
import  pageNavigationReducer from './pageNavigation';
import categoriesListReducer from './categoriesList';
import measureItemReducer from './measureItem';
import userReducer from './user';

const rootReducer = combineReducers({
  pageNavigation: pageNavigationReducer,
  categoriesList: categoriesListReducer,
  addMeasureItem: measureItemReducer,
  user: userReducer,
});

export default rootReducer;
