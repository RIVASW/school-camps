import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const initialState = {
  camps: [],
  currentCamp: null,
  isFetching: false,
  forReview: undefined,
  isCampSubmited: false,
  isDeleted: false,
  isAdmin: false,
  isLoginFormVisible: false,
  isUserLoginSucces: false,
  isUserLoginError: false,
  authenticationToken: null,
  newCampImage: null
};

function rootReducer(state, action) {

  switch (action.type) {
    case "REQUEST_CAMPS":
      return { ...state, isFetching: true };
    case "RECEIVE_CAMPS":
      return { ...state, camps: action.json, isFetching: false };
    case "REQUEST_CAMP":
      return { ...state, isFetching: true };
    case "RECEIVE_CAMP":
      const currentCamp = action.json;
      console.log(currentCamp);
      return { ...state, currentCamp, isFetching: false };
    case "ADD_FOR_REVIEW":
      return { ...state, isCampSubmited: false };
    case "SEND_SUCCESS":
      return { ...state, isCampSubmited: true };
    case "DELETE_REQUEST":
      return { ...state, isDeleted: false };
    case "DELETED_SUCCES":
      return { ...state, isDeleted: true };
    case "EDIT_CAMP_REQUEST":
      return { ...state, isCampSubmited: false };
    case "EDIT_SUCCESS":
      return { ...state, isCampSubmited: true };
    case "IS_ADMIN":
      return { ...state, isAdmin: action.isAdmin };
    case "SHOW_LOGIN_FORM":
      return { ...state, isLoginFormVisible: true, isUserLoginError: false };
    case "HIDE_LOGIN_FORM":
      return { ...state, isLoginFormVisible: false };
    case "USER_LOGIN":
      return { ...state, isUserLoginSucces: false, isUserLoginError: false, isAdmin: false };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authenticationToken: action.json.auth_token,
        isUserLoginSucces: true,
        isLoginFormVisible: false,
        isAdmin: true
      };
    case "LOGIN_ERROR":
      return { ...state, isUserLoginError: true };
    case "LOG_OUT":
      return { ...state, isUserLoginSucces: false, isAdmin: false };
    case "IMAGE_TO_STORE":
      return { ...state, newCampImage: action.image };
    case "RESET_CAMP_FORM":
      return { ...state, isCampSubmited: false, currentCamp: null, newCampImage: null };
  default: return state;
  }
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
