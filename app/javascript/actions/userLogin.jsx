export const USER_LOGIN = 'USER_LOGIN'
function userLogin() {
  return {
    type: USER_LOGIN
  }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    json
  }
};

export const LOGIN_ERROR = 'LOGIN_ERROR'
function loginError() {
  return {
    type: LOGIN_ERROR
  }
};

export const SET_TOKEN = 'SET_TOKEN'
export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  }
};

function handleResponse(dispatch, response) {
  if (response.status === 200) {
    response.json().then(json => dispatch(loginSuccess(json)))
  } else {
    dispatch(loginError())
  }
} 

export function userSignin({userName, userPassword}) {
    return (dispatch) => {
        dispatch(userLogin())
            return fetch(`http://localhost:3000/v1/authenticate?email=${userName}&password=${userPassword}`, {
                method: "POST"
            })
            .then ((response) => handleResponse(dispatch, response))
    }
};