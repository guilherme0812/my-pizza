import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CountCartReducer from './countCartReducer'

const Reducer = combineReducers({UserReducer, CountCartReducer})

export default Reducer