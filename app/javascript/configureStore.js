import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { SET_TOKEN } from './actions/userLogin';
import { SET_CURRENT_PAGE } from './actions/pagination';

const initialState = {
  camps: [],
  currentCamp: null,
  campToDeleteId: null,
  currentPage: 1,
  campsPerPage: 9,
  isFetching: false,
  forReview: undefined,
  isCampSubmited: false,
  isDeleted: false,
  isConfirmDeleteVisible: false,
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
      return { ...state, isFetching: true, isCampSubmited: false, isDeleted: false };
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
    case "DELETED_SUCCESS":
      return { ...state, isDeleted: true, isConfirmDeleteVisible: false };
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
      return { ...state, isCampSubmited: false, currentCamp: null, newCampImage: null, isDeleted: false };
    case "SHOW_DELETE_MODAL":
      return { ...state, isConfirmDeleteVisible: true };
    case "HIDE_DELETE_MODAL":
      return { ...state, isConfirmDeleteVisible: false };
    case "CONFIRM_DELETE_CAMP":
      return { ...state, campToDeleteId: action.id, isConfirmDeleteVisible: true };
    case SET_TOKEN:
      return { ...state, authenticationToken: action.token, isAdmin: true };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber }
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
