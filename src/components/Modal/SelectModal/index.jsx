import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './styles';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const options = ["Calabresa", "4 Queijos", "Portuguesa", "Peperoni", "Bacon", "Vegetariana", "6 Quiejos", "Frango com queijo", "Milho", "Especial"]

const SelectModal = ({handleModalVisibility, setData}) => {
  const onPressItem = (option) => {
    handleModalVisibility(false)
    setData(option)
  }
  const option = options.map( (option, index) => (
    <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={() => onPressItem(option)}
    >
      <Text style={[styles.bold, styles.textBase, styles.optionText]}> {option} </Text>
    </TouchableOpacity>
  ))
  return(
    <TouchableOpacity onPress={() => handleModalVisibility(false)} style={[styles.container]}>
      <View style={[styles.modal]}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}
export default SelectModal