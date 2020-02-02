import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  camps: [
    {
      name: 'Camp 1',
      time: 'Whole day long'
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_CAMPS_SUCCESS":
      return { camps: action.json };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}
