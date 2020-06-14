import fetch from 'cross-fetch';

export const REQUEST_CAMP = 'REQUEST_CAMP'
function requestCamp(id) {
  return {
    type: REQUEST_CAMP,
    id
  }
};

export const RECEIVE_CAMP = 'RECEIVE_CAMP'
function receiveCamp(json) {
  return {
    type: RECEIVE_CAMP,
    json
  }
};

export function fetchCamp(id) {
    return (dispatch) => {
      dispatch(requestCamp(id))
      return fetch(`v1/camps/${id}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCamp(json)))
    }
};
