export const ADD_FOR_REVIEW = 'ADD_FOR_REVIEW'
function addForReview() {
  return {
    type: ADD_FOR_REVIEW
  }
};

export const SEND_SUCCESS = 'SEND_SUCCESS'
function sendSuccess() {
  return {
    type: SEND_SUCCESS
  }
};

export function addNewCamp({name, location, price, contacts, description}) {
    return (dispatch) => {
        dispatch(addForReview())
            return fetch(`http://localhost:3000/v1/camps/?name=${name}&location=${location}&price=${price}&contacts=${contacts}&description=${description}`, {
                method: "POST"
            }).then (() => dispatch(sendSuccess()))
    }
};



