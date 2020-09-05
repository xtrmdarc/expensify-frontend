import expensifyApi from '../api/expensify';

const Authentication = (() => {
  const loginUser = token => {
    localStorage.setItem('userToken', token);
  };

  const isValidLogin = (user, pLoginUser) => {
    let loggedIn = true;
    if (Object.keys(user).length === 0) {
      const userToken = localStorage.getItem('userToken');

      if (userToken && userToken !== 'undefined' && userToken !== undefined) {
        expensifyApi.autoLogin(localStorage.getItem('userToken')).then(p => {
          loginUser(p.token);
          pLoginUser(p);
        });
        loggedIn = 'trying';
      } else {
        loggedIn = false;
      }
    }
    return loggedIn;
  };

  const logout = () => {
    localStorage.removeItem('userToken');
  };

  return { loginUser, isValidLogin, logout };
})();

export default Authentication;
