import axios from "axios";
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
    axios.get('http://localhost:3333/api/users').then(response => dispatch(changeUser(data)))
  }
}
