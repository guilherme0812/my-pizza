import { ADD_FLAVORS } from "../../actions/actionTypes"
const initialState = []

const FlavorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLAVORS:
      return [...action.payload]
    default:
      return state
  }
}
export default FlavorsReducer