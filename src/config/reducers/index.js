import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CountCartReducer from './countCartReducer'
import FlavorsReducer from "./flavors/flavorsReducer";

const RootReducer = combineReducers({
  UserReducer,
  CountCartReducer,
  flavors: FlavorsReducer,
})

export default RootReducer