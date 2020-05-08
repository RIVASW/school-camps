export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export function setCurrentPage(pageNumber) {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber
  }
};