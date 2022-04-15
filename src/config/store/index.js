import { createStore } from "redux";

// import UserReducer from "../reducers/userReducer";
import Reducer from "../reducers";
// const store = createStore(UserReducer)
const store = createStore(Reducer)
export default store