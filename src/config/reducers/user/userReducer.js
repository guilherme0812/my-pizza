import {CHANGE_USER} from '../../actions/actionTypes'

const initialState = {nome: 'Guilherme', email: 'guilherme@gmail.com'}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER: 
      return console.log(action.payload)
    default:
      return initialState
  }
}
export default UserReducer