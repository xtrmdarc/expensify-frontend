const expensifyApi = (() => {
  const listCategories = async () => {
    const response = await fetch('/api/expense_category/index');
    const categories = await response.json();
    return categories;
  };

  const getCategoryInfo = async catId => {
    const response = await fetch(`/api/category/${catId}`);
    const catInfo = await response.json();
    return catInfo;
  };

  const createNewMeasurement = async measurementObj => {
    const response = await fetch('/api/measurement/create', {
      method: 'POST',
      headers: {
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

  const getProgress = async userId => {
    const response = await fetch(`/api/progress/${userId}`);
    const data = await response.json();
    return data;
  };

  const signUpUser = async user => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    listCategories, createNewMeasurement, getCategoryInfo, loginUser, getProgress, signUpUser,
  };
})();

export default expensifyApi;
