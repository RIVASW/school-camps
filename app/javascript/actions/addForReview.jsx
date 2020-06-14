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

export function addNewCamp(camp, token, captchaToken) {
    return (dispatch) => {
        dispatch(addForReview())
        const formData = new FormData();
        for(let key in camp) {
          camp[key] && formData.append(`camp[${key}]`, camp[key]);
        }
        formData.append('captcha_token', captchaToken);

        return fetch(`v1/camps`, {
            method: "POST",
            body: formData,
            headers: {
              'Authorization': token
            }
        }).then (() => dispatch(sendSuccess()))
    }
};


