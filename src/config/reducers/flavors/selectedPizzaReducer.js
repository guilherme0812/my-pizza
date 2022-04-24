import { COUNT_CART_ACTION, ADD_FLAVOR } from "../../actions/actionTypes"

const initialState = {
  size: '',
  flavors: [],
  price: 0
}

const SelectedPizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLAVOR:
      let newFlavors = state.flavors
      newFlavors[action.payload.index] = action.payload.flavor
      return {
        ...state,
        flavors: newFlavors
      }
    case 'CHANGE_PRICE':
      return {
        ...state,
        price: action.payload.value
      }
    default:
      return state

  }
}
export default SelectedPizzaReducer