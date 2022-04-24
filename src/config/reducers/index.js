import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CountCartReducer from './countCartReducer'
import FlavorsReducer from "./flavors/flavorsReducer";
import SelectedPizzaReducer from "./flavors/selectedPizzaReducer";

const RootReducer = combineReducers({
  UserReducer,
  CountCartReducer,
  flavors: FlavorsReducer,
  selectedPizza: SelectedPizzaReducer
})

export default RootReducer