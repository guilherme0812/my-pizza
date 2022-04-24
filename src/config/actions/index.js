import {CHANGE_USER, LOGOUT, COUNT_CART_ACTION, ADD_FLAVOR} from './actionTypes'

// Actions
export function changeUser(user) {
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user
  }
}

export function logout() {
  return {
    type: LOGOUT,
    info: "Logout the current user",
  }
}

export function countcartAction(value) {
  return {
    type: COUNT_CART_ACTION,
    payload: value
  }
}

export function addFlavor(flavor, index) {
  return {
    type: ADD_FLAVOR,
    payload: {flavor, index}
  }
}