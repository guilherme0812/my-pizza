import { ADD_FLAVORS } from "../actionTypes";
import { flavorsApi } from "../../../service/api";
import axios from "axios";

export const addFlavors = (flavors) => {
  return {
    type: ADD_FLAVORS,
    payload: [...flavors]
  }
}

export const getFlavors = () => {
  return dispatch => {
    flavorsApi.get('api/orders')
      .then(response => dispatch(addFlavors(response.data)) )
      .catch(console.log)
  }
}
