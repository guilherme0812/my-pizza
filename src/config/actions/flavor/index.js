import {ADD_FLAVOR} from '../actionTypes'

export const addFlavor = (flavor, index) => {
  return {
    type: ADD_FLAVOR,
    payload: {
      flavor,
      index
    }
  }
}
