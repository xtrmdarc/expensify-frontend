const { LOGIN_USER, LOGOUT_USER } = require('../actions');

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      console.log(localStorage.getItem('userToken'));
      return { ...state, ...action.user.user};
    }
    case LOGOUT_USER: {
      return {};
    }
    default: return state;
  }
};

export default userReducer;
