import { CHANGE_HEADER_TITLE, CHANGE_ACTIVE_TAB } from '../actions';


const pageNavigationReducer = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_HEADER_TITLE: {
      return Object.assign({},state, {headerTitle: action.title});
    }
    case CHANGE_ACTIVE_TAB: {
      return Object.assign({},state, {activeTab: action.title});
    }
    default: return state;
  }
}

export default pageNavigationReducer;