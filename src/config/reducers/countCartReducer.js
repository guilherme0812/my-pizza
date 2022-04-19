import { COUNT_CART_ACTION } from "../actions/actionTypes"

const initialState = {
  value: 0
}

const CountCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_CART_ACTION:
      return {
        ...state, 
        value: state.value + action.payload
      }
    default:
      return state

  }
}
export default CountCartReducer