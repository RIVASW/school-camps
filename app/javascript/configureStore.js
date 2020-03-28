import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  camps: [],
  currentCamp: null,
  isFetching: false,
  forReview: undefined,
  isSuccess: false,
  isDeleted: false,
  isEdited: false,
  isAdmin: false
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
      return { ...state, isSuccess: false };
    case "SEND_SUCCESS":
      return { ...state, isSuccess: true };
    case "DELETE_REQUEST":
      return { ...state, isDeleted: false };
    case "DELETED_SUCCES":
      return { ...state, isDeleted: true };
    case "EDIT_CAMP_REQUEST":
      return { ...state, isEdited: false };
    case "EDIT_SUCCESS":
      return { ...state, isEdited: true };
    case "IS_ADMIN":
      return { ...state, isAdmin: action.isAdmin };
  default: return state;
  }
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
};
