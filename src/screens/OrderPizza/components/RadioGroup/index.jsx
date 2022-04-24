import React, { useState } from 'react';
import { View, Text } from 'react-native'
import Radio from '../../../../components/Radio';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { CHANGE_PRICE } from '../../../../config/actions/actionTypes';

const RadioGroup = ({ index }) => {
  const [selected, setSelected] = useState(1)

  const options = [
    '16 fatias', 
    '12 fatias', 
    '8 fatias', 
    '6 fatias'
  ]

  const handleSelect = (index) => {
    setSelected(index)

  }

  return (
    <View style={styles.radioGroupContainer}>
      <Radio
        selected={selected}
        option={options}
        horizontal={true}
        onChangeSelect={(index) => handleSelect(index)}
      />
    </View>
  )
}
export default RadioGroup