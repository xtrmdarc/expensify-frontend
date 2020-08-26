
const expensifyApi = (() => {
  
  const listCategories = async () => {
    const response = await fetch('/expense_category/index');
    const categories = await response.json();
    return categories;
  };

  const getCategoryInfo = async (cat_id) => {
    const response = await fetch(`/category/${cat_id}`);
    const catInfo = await response.json();
    return catInfo;
  };

  const createNewMeasurement = async (measurementObj) => {
    const response = await fetch('/measurement/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(measurementObj),
    });
    const data = response.json();
    return data;
  };

  const loginUser = async (username) => {
    const response = await fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username})
    });
    
    const data = await response.json();

    if(response.status === 400) {
      throw new Error(data.error);
    }
    
    return data;
  }

  const getProgress = async (userId) => {
    const response = await fetch(`/progress/${userId}`)
    const data = await response.json();
    return data;
  }

  return { listCategories, createNewMeasurement, getCategoryInfo, loginUser, getProgress };

})();

export default expensifyApi;