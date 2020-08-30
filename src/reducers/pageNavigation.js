import { CHANGE_HEADER_FORMAT, CHANGE_ACTIVE_TAB } from '../actions';

const pageNavigationReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_HEADER_FORMAT: {
      return { ...state, headerTitle: action.title, headerType: action.headerType };
    }
    case CHANGE_ACTIVE_TAB: {
      return { ...state, activeTab: action.activeTab };
    }
    default: return state;
  }
};

export default pageNavigationReducer;
