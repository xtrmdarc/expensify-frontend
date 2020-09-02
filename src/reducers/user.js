const { LOGIN_USER, LOGOUT_USER } = require('../actions');

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { token } = action.user;
      localStorage.setItem('userToken', token);
      return { ...state, ...action.user.user, token };
    }
    case LOGOUT_USER: {
      localStorage.removeItem('userToken');
      return {};
    }
    default: return state;
  }
};

export default userReducer;
