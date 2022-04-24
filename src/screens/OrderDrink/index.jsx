import React from 'react';
import { View, Image } from 'react-native'
import Navbar from '../../components/Navbar'
import ProductInfo from './ProductInfo';
import styles from './styles';

const OrderDrink = ({ navigation }) => {
  return (
    <View style={[styles.container, styles.verticalAlign]}>
      <Navbar navigation={navigation} title="Selecione a bebida" target='Home' />
      <ProductInfo />

      <View style={styles.pizzaContainer}>
        <Image source={require('../../assets/images/soda.png')} />
      </View>
    </View>
  )
}
export default OrderDrink