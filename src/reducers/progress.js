const { LOAD_PROGRESS } = require("../actions");

const progressReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_PROGRESS: {
      return [...action.progress];
    }
    default: return state;
  }
}

export default progressReducer;
