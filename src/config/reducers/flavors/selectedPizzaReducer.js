import { ADD_FLAVOR, CHANGE_PRICE, CHANGE_SIZE } from "../../actions/actionTypes"

const initialState = {
  size: {
    id: "",
    description: "Tamanho da pizza" 
  },
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
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.payload.value
      }
    case CHANGE_SIZE:
      return {
        ...state,
        size: {
          id: action.payload.id,
          description: action.payload.description
        }
      }
    default:
      return state

  }
}
export default SelectedPizzaReducer