export const DELETE_REQUEST = 'DELETE_REQUEST'
function deleteRequest() {
  return {
    type: DELETE_REQUEST
  }
};

export const DELETED_SUCCESS = 'DELETED_SUCCESS'
function deletedSuccess() {
  return {
    type: DELETED_SUCCESS
  }
};

export function deleteCamp(id, token) {
    return (dispatch) => {
        dispatch(deleteRequest())
            return fetch(`/v1/camps/${id}`, {
                method: "DELETE",
                headers: {
                  'Authorization': token
                }
            }).then (() => dispatch(deletedSuccess()))
    }
};

export function confirmDeleteCamp(id) {
  return {
    type: "CONFIRM_DELETE_CAMP",
    id
  }
};
