import React from 'react';
import { View, Image, Alert } from 'react-native'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import ProductInfo from './components/ProductInfo';
import ChooseDrink from './components/ChooseDrink'
import styles from './styles';

const OrderDrink = ({ navigation }) => {
  const handleFinish = () => {
    Alert.alert('Essa função ainda não está dispinível')
  }

  return (
    <View style={[styles.container, styles.verticalAlign]}>
      <Navbar navigation={navigation} title="Selecione a bebida" target='Home' />
      <ProductInfo />

      <View style={styles.pizzaContainer}>
        <Image source={require('../../assets/images/soda.png')} />
      </View>
      <ChooseDrink />
      <DefaultButton title="Adicionar ao pedido" message="Esta função ainda não está pronta" handleOnclick={handleFinish} />
    </View>
  )
}
export default OrderDrink