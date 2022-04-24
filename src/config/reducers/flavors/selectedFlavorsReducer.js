import { COUNT_CART_ACTION } from "../../actions/actionTypes"

const initialState = []

const selectedFlavorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_CART_ACTION:
      state[action.payload.index] = action.payload.flavor
      return [...state]
    default:
      return state

  }
}
export default selectedFlavorsReducer