import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CountCartReducer from './countCartReducer'
import FlavorsReducer from "./flavors/flavorsReducer";
import selectedFlavorsReducer from "./flavors/selectedFlavorsReducer";

const RootReducer = combineReducers({
  UserReducer,
  CountCartReducer,
  flavors: FlavorsReducer,
  selectedFlavors: selectedFlavorsReducer
})

export default RootReducer