export const CHANGE_HEADER_FORMAT = 'CHANGE_HEADER_TITLE';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const LOAD_CATEGORIES_LIST = 'LOAD_CATEGORIES_LIST';
export const SET_MEASURE_ITEM = 'SET_MEASURE_ITEM';

export const changeHeaderTitle = (title, headerType) => {
  return {
    type: CHANGE_HEADER_FORMAT,
    title,
    headerType,
  };
}

export const changeActiveTab = activeTab => {
  return {
    type: CHANGE_ACTIVE_TAB,
    activeTab,
  };
}

export const loadCategoriesList = categories => {
  return {
    type: LOAD_CATEGORIES_LIST,
    categories
  }
}

export const setMeasureItem = measureItem => {
  return{
    type: SET_MEASURE_ITEM,
    measureItem
  }
}