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

export function deleteCamp(id) {
    return (dispatch) => {
        dispatch(deleteRequest())
            return fetch(`http://localhost:3000/v1/camps/${id}`, {
                method: "DELETE"
            }).then (() => dispatch(deletedSuccess()))
    }
};