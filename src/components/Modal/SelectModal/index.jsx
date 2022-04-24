import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './styles';

const SelectModal = ({
  handleModalVisibility, 
  setData, 
  list,
  value,
  key
}) => {
  
  const onPressItem = (option) => {
    handleModalVisibility(false)
    setData(option)
  }
  const option = list.map( (option, index) => (
    <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={() => onPressItem(option[value])}
    >
      <Text style={[styles.bold, styles.textBase, styles.optionText]}> {option[value]} </Text>
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