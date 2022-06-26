import React from 'react';
import { View, Image, Alert } from 'react-native'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import PizzaItem from './components/PizzaItem';
import PagamentInfo from './components/PagamentInfo';
import {Container, ButtonContainer, CardContainer} from './styles';

const Orders = ({ navigation }) => {
  const handleFinish = () => {
    Alert.alert('Essa função ainda não está dispinível')
  }

  return (
    <Container>
      <Navbar navigation={navigation} title="Seus pedidos" target='Home' />

      <CardContainer>
        <PizzaItem />
        <PizzaItem />
      </CardContainer>
      <ButtonContainer>
        <PagamentInfo />
        <DefaultButton title="Finalizar pedido" handleOnclick={handleFinish} />
      </ButtonContainer>
    </Container>
  )
}
export default Orders