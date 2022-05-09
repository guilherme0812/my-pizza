import React from 'react';
import { View, Image, Alert } from 'react-native'
import Navbar from '../../components/Navbar'
import DefaultButton from '../../components/DefaultButton'
import PizzaItem from './components/PizzaItem';
import PagamentInfo from './components/PagamentInfo';
import styles from './styles';

const Orders = ({ navigation }) => {
  const handleFinish = () => {
    Alert.alert('Essa função ainda não está dispinível')
  }

  return (
    <View style={[styles.container, styles.verticalAlign]}>
      <Navbar navigation={navigation} title="Seus pedidos" target='Home' />

      <View>
        <PizzaItem />
        <PizzaItem />
      </View>
      <View>
        <PagamentInfo />
        <DefaultButton title="Finalizar pedido" handleOnclick={handleFinish} />
      </View>
    </View>
  )
}
export default Orders