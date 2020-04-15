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

export function addNewCamp(camp, token) {
    return (dispatch) => {
        dispatch(addForReview())
        const formData = new FormData();
        for(let key in camp) {
          camp[key] && formData.append(key, camp[key]);
        }
        return fetch(`http://localhost:3000/v1/camps`, {
            method: "POST",
            body: formData,
            headers: {
              'Authorization': token
            }
        }).then (() => dispatch(sendSuccess()))
    }
};


