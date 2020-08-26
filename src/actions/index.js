export const CHANGE_HEADER_FORMAT = 'CHANGE_HEADER_TITLE';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

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