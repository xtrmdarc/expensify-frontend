
const expensifyApi = (() => {
  const endpoint = '/';
  
  const listCategories = async () => {
    const response = await fetch('/expense_category/index');
    const categories = await response.json();
    return categories;
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

  return { listCategories, createNewMeasurement };

})();

export default expensifyApi;