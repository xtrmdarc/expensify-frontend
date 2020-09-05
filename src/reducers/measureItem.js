const { SET_MEASURE_ITEM } = require('../actions');

const measureItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_MEASURE_ITEM: {
      return { ...state, ...action.measureItem };
    }
    default: return state;
  }
};

export default measureItemReducer;
