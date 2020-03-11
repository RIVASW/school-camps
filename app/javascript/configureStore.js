import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  camps: [],
  currentCamp: null,
  isFetching: false,
  forReview: undefined
};

function rootReducer(state, action) {
  console.log(action.type);
  console.log(state);

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
      const item = action.newItem;
      console.log(item);
      return { ...state, forReview: item };
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
