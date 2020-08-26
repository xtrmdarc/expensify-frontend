const { SET_MEASURE_ITEM } = require("../actions");

const measureItemReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_MEASURE_ITEM: {
      console.log(Object.assign({}, state, action.measureItem));
      return Object.assign({}, state, action.measureItem);
    }
    default: return state;
  }
}

export default measureItemReducer;