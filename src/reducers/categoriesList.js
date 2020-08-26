const { LOAD_CATEGORIES_LIST } = require("../actions");

const categoriesListReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_CATEGORIES_LIST: {
      return action.categories;
    }
    default: return state;
  }
}

export default categoriesListReducer;
