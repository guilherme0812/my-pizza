import {CHANGE_USER} from '../../actions/actionTypes'

const initialState = {nome: 'Visitante', email: 'emal@gmail.com'}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER: 
      console.log(action.payload[0])
      return {
        ...initialState,
        nome: action.payload[0].nome,
        email: action.payload[0].email
      }
    default:
      return initialState
  }
}
export default UserReducer