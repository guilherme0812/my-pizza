import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import styles from './styles';

const OptionGroup = ({navigation}) => {
  return (
    <View style={[styles.optionContainer]}>
      <Text style={[styles.bold, styles.textXl, styles.optionsTitle]}> Opções </Text>
      <View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>

          <TouchableOpacity style={[styles.optionItem, styles.shadowProp]} onPress={() => navigation.navigate('OrderPizza')} >
            <Image
              source={require('../../../../assets/icons/slice-pizza.png')}
            />
            <Text style={[styles.text, styles.item, styles.textSm]}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionItem, styles.shadowProp]}>
            <Image
              source={require('../../../../assets/icons/cup-drink.png')}
            />
            <Text style={[styles.text, styles.item, styles.textSm]}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionItem, styles.shadowProp]}>
            <Image
              source={require('../../../../assets/icons/order.png')}
            />
            <Text style={[styles.text, styles.item, styles.textSm]}>Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.optionItem, styles.shadowProp]}>
            <Image
              source={require('../../../../assets/icons/chat.png')}
            />
            <Text style={[styles.text, styles.item, styles.textSm]}>Pizza</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
export default OptionGroup