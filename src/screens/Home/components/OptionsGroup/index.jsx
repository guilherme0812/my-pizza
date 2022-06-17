import React from 'react';
import { FlatList } from 'react-native'
import { Container, Title, List } from './styles';
import Card from '../Card';

const OptionGroup = ({ navigation }) => {
  const data = [
    { key: '1', to: "OrderPizza", text: "Pizza", image: require('../../../../assets/icons/slice-pizza.png') },
    { key: '2', to: "OrderDrink", text: "Bebida", image: require('../../../../assets/icons/cup-drink.png') },
    { key: '3', to: "Orders", text: "Pedido", image: require('../../../../assets/icons/order.png') },
    { key: '4', to: "Orders", text: "Chat", image: require('../../../../assets/icons/chat.png') },
  ]
  const renderItem = ({ item }) => (
    <Card navigation={navigation} to={item.to} text={item.text} image={item.image} />
  )

  return (
    <Container>
      <Title> Opções </Title>

      <List
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  )
}
export default OptionGroup