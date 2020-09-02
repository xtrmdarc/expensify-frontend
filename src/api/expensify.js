import store from '../store';

const expensifyApi = (() => {
  const listCategories = async () => {
    const { token } = store.getState().user;
    const response = await fetch('/api/expense_category/index', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const categories = await response.json();
    return categories;
  };

  const getCategoryInfo = async catId => {
    const { token } = store.getState().user;
    const response = await fetch(`/api/category/${catId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const catInfo = await response.json();
    return catInfo;
  };

  const createNewMeasurement = async measurementObj => {
    const { token } = store.getState().user;
    const response = await fetch('/api/measurement/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(measurementObj),
    });
    const data = response.json();
    return data;
  };

  const loginUser = async (username, password) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.status === 400) {
      if (data.error) throw data.error;
      if (data.errors) throw data.errors;
    }

    return data;
  };

  const autoLogin = async pToken => {
    const response = await fetch('/api/users/auto_login', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${pToken}`,
      },
    });

    const data = await response.json();
    return data;
  };

  const getProgress = async userId => {
    const { token } = store.getState().user;
    const response = await fetch(`/api/progress/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const signUpUser = async user => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    if (response.status === 400) {
      throw data.errors;
    }

    return data;
  };

  return {
    listCategories,
    createNewMeasurement,
    getCategoryInfo,
    loginUser,
    getProgress,
    signUpUser,
    autoLogin,
  };
})();

export default expensifyApi;
