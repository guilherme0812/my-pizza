import React from 'react';
import { Container, IconMenu, CartContainer, Counter } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { countcartAction } from '../../../../config/actions'
import { colors } from "../../../../assets/css"
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(state => state.CountCartReducer.value)

  return (
    <Container>
      <IconMenu>
        <Icon name="menu" size={30} color={colors.black3} />
      </IconMenu>

      <CartContainer onPress={() => dispatch(countcartAction(1))}>
        <Counter>{counterValue}</Counter>
        <Icon name="cart-outline" size={30} color={colors.black3} />
      </CartContainer>
    </Container>
  )
}

export default Navbar