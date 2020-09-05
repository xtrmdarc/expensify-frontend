export const CHANGE_HEADER_FORMAT = 'CHANGE_HEADER_TITLE';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const LOAD_CATEGORIES_LIST = 'LOAD_CATEGORIES_LIST';
export const SET_MEASURE_ITEM = 'SET_MEASURE_ITEM';
export const LOGIN_USER = 'LOGIN_USER';
export const LOAD_PROGRESS = 'LOAD_PROGRESS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const changeHeaderTitle = (title, headerType, prevPage = '/') => ({
  type: CHANGE_HEADER_FORMAT,
  title,
  headerType,
  prevPage,
});

export const changeActiveTab = activeTab => ({
  type: CHANGE_ACTIVE_TAB,
  activeTab,
});

export const loadCategoriesList = categories => ({
  type: LOAD_CATEGORIES_LIST,
  categories,
});

export const setMeasureItem = measureItem => ({
  type: SET_MEASURE_ITEM,
  measureItem,
});

export const loginUser = user => ({
  type: LOGIN_USER,
  user,
});

export const loadProgress = progress => ({
  type: LOAD_PROGRESS,
  progress,
});

export const logOutUser = () => ({
  type: LOGOUT_USER,
});
