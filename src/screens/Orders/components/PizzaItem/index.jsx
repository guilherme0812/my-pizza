import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';

const PizzaItem = () => {
  return (
    <View style={styles.orderItem}>
      <View>
        <Image source={require('../../../../assets/images/vector-pizza.png')} style={{ width: 80, height: 80 }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.bold, styles.textXl]}>Pizza Grande</Text>
        <Text style={[styles.text, styles.flavorsText]}>Calabresa, 4 queijos</Text>
        <Text style={[styles.bold, styles.textXl, styles.priceColor]}>R$ 30</Text>
      </View>
    </View>
  )
}
export default PizzaItem