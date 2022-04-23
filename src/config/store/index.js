import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import UserReducer from "../reducers/userReducer";
import RootReducer from "../reducers";
// const store = createStore(UserReducer)
const store = createStore(RootReducer, applyMiddleware(thunk))
export default store