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

export function editCamp(id, {name, location, price, contacts, description}) {
    return (dispatch) => {
        dispatch(editCampRequest())
            return fetch(`http://localhost:3000/v1/camps/${id}?name=${name}&location=${location}&price=${price}&contacts=${contacts}&description=${description}`, {
                method: "PUT"
            }).then (() => dispatch(editSuccess()))
    }
};