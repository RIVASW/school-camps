export const EDIT_CAMP_REQUEST = 'EDIT_CAMP_REQUEST'
function editCampRequest() {
  return {
    type: EDIT_CAMP_REQUEST
  }
};

export const EDIT_SUCCESS = 'EDIT_SUCCESS'
function editSuccess() {
  return {
    type: EDIT_SUCCESS
  }
};

export function editCamp(id, camp, token) {
    return (dispatch) => {
        dispatch(editCampRequest())
        const formData = new FormData();
        for(let key in camp) {
          (camp[key] || camp[key] === false) && formData.append(`camp[${key}]`, camp[key]);
        }
        return fetch(`/v1/camps/${id}`, {
            method: "PUT",
            body: formData,
            headers: {
              'Authorization': token
            }
        }).then (() => dispatch(editSuccess()))
    }
};
