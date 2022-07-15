import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import styles from './styles';

const SelectModal = ({
  data,
  setData,
  description,
  handleModalVisibility,
  key
}) => {
  
  const onPressItem = (option) => {
    handleModalVisibility(false)
    setData(option)
  }
  
  const options = data.map( (option, index) => (
    <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={() => onPressItem(option)}
    >
      <Text style={[styles.bold, styles.textBase, styles.optionText]}> {option[description]} </Text>
    </TouchableOpacity>
  ))

  return(
    <TouchableOpacity onPress={() => handleModalVisibility(false)} style={[styles.container]}>
      <View style={[styles.modal]}>
        <ScrollView>
          {options}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}
export default SelectModal