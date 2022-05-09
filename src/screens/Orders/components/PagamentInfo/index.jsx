import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';

const PagamentInfo = () => {
  return (
    <View style={styles.PagamentInfoContainer}>
      <View>
        <Text style={[styles.bold, styles.textXl]}>R$ 60</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableOpacity>
          <Text style={[styles.text, styles.textSl]}>métodos de pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default PagamentInfo