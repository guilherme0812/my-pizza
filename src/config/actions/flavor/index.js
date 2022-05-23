import { ADD_FLAVORS } from "../actionTypes";
import { api } from "../../../service/api";
import axios from "axios";

export const addFlavors = (flavors) => {
  return {
    type: ADD_FLAVORS,
    payload: [...flavors]
  }
}

export const getFlavors = () => {
  return dispatch => {
    api.get('api/flavors')
      .then(response => dispatch(addFlavors(response.data)) )
      .catch(console.log)
  }
}
