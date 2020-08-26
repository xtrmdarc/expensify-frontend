export const CHANGE_HEADER_TITLE = 'CHANGE_HEADER_TITLE';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export const changeHeaderTitle = title => {
  return {
    type: CHANGE_HEADER_TITLE,
    title,
  };
}

export const changeActiveTab = activeTab => {
  return {
    type: CHANGE_ACTIVE_TAB,
    activeTab,
  };
}