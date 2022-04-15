import {CHANGE_USER, LOGOUT} from '../actions/actionTypes'

const initialState = {
  user: 'Visitante',
  isLogged: false,
}

export default function UserReducer(prevState = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true,
      }
    case LOGOUT:
      return {
        ...prevState,
        user: '',
        isLogged: false
      }
    default:
      return prevState
  }
}