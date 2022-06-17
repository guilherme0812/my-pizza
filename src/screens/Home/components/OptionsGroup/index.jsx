import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles, { Container, Title } from './styles';
import Card from '../Card';

const OptionGroup = ({ navigation }) => {
  const data = [
    { key: '1', to: "OrderPizza", text: "Pizza", image: require('../../../../assets/icons/slice-pizza.png') }
  ]

  return (
    <Container>
      <Title> Opções </Title>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <Card navigation={navigation} to="OrderPizza" text="Pizza" image={require('../../../../assets/icons/slice-pizza.png')} />

        <TouchableOpacity style={[styles.optionItem, styles.shadowProp]} onPress={() => navigation.navigate('OrderPizza')} >
          <Image
            source={require('../../../../assets/icons/slice-pizza.png')}
          />
          <Text style={[styles.text, styles.item, styles.textSm]}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionItem, styles.shadowProp]} onPress={() => navigation.navigate('OrderDrink')}>
          <Image
            source={require('../../../../assets/icons/cup-drink.png')}
          />
          <Text style={[styles.text, styles.item, styles.textSm]}>Bebida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionItem, styles.shadowProp]} onPress={() => navigation.navigate('Orders')}>
          <Image
            source={require('../../../../assets/icons/order.png')}
          />
          <Text style={[styles.text, styles.item, styles.textSm]}>Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionItem, styles.shadowProp]}>
          <Image
            source={require('../../../../assets/icons/chat.png')}
          />
          <Text style={[styles.text, styles.item, styles.textSm]}>Chat</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  )
}
export default OptionGroup