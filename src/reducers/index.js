import { combineReducers } from 'redux';
import  pageNavigationReducer from './pageNavigation';

const rootReducer = combineReducers({
  pageNavigation: pageNavigationReducer
});

export default rootReducer;