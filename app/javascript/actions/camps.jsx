import fetch from 'cross-fetch';

export const REQUEST_CAMPS = 'REQUEST_CAMPS'
function requestCamps() {
  return {
    type: REQUEST_CAMPS
  }
};

export const RECEIVE_CAMPS = 'RECEIVE_CAMPS'
function receiveCamps(json) {
  return {
    type: RECEIVE_CAMPS,
    json
  }
};

export function fetchCamps(confirmed) {
    return (dispatch) => {
      dispatch(requestCamps())
      return fetch(`/v1/camps.json?confirmed=${confirmed}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCamps(json)))
    }
  };
