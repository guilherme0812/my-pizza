import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles';

const ProductInfo = () => {
  return (
    <View>
      <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>Refrigerante 1.5L</Text>
      <Text style={[styles.textXl, styles.bold, styles.infoProductText]}>R$ 8,00</Text>
    </View>
  )
}
export default ProductInfo