import { CHANGE_USER } from "../actionTypes";
import { api } from "../../../service/api";

export const changeUser = (payload) => {
  return {
    type: CHANGE_USER,
    payload: [...payload]
  }
}

export const getUsers = () => {
  return dispatch => {
    api({
      method: "get",
      url: "api/users",
    }).then( response => dispatch(changeUser(response.data)));
  }
}
