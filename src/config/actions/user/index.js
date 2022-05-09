import { CHANGE_USER } from "../actionTypes";
import { usersApi } from "../../../service/api";

export const changeUser = (payload) => {
  return {
    type: CHANGE_USER,
    payload: [...payload]
  }
}

export const getUsers = () => {
  return dispatch => {
    usersApi({
      method: "get",
      url: "api/users",
    }).then( response => dispatch(changeUser(response.data)));
  }
}
