import React from 'react';
import { Image, Alert } from 'react-native'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import ProductInfo from './components/ProductInfo';
import ChooseDrink from './components/ChooseDrink'
import { Container, ImageDrinkContainer, ButtonContainer } from './styles';

const OrderDrink = ({ navigation }) => {
  const handleFinish = () => {
    Alert.alert('Essa função ainda não está dispinível')
  }

  return (
    <Container>
      <Navbar navigation={navigation} title="Selecione a bebida" target='Home' />
      <ProductInfo />

      <ImageDrinkContainer>
        <Image source={require('../../assets/images/soda.png')} />
      </ImageDrinkContainer>
      <ChooseDrink />

      <ButtonContainer>
        <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
      </ButtonContainer>
    </Container>
  )
}
export default OrderDrink