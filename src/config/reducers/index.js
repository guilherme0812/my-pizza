import { combineReducers } from "redux";
import CountCartReducer from './countCartReducer'
import FlavorsReducer from "./flavors/flavorsReducer";
import SelectedPizzaReducer from "./pizza/selectedPizzaReducer";
import UserReducer from "./user/userReducer";

const RootReducer = combineReducers({
  UserReducer,
  CountCartReducer,
  flavors: FlavorsReducer,
  selectedPizza: SelectedPizzaReducer
})

export default RootReducer