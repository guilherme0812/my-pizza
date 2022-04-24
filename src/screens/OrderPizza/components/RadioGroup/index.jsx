import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native'
import Radio from '../../../../components/Radio';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { CHANGE_PRICE, CHANGE_SIZE } from '../../../../config/actions/actionTypes';

const RadioGroup = ({ index }) => {
  const [selected, setSelected] = useState()
  const dispatch = useDispatch()

  useEffect(() => {

  }, [selected]);

  const options = [
    { id: "001", descricao: 'Pizza gigante', size: '55 cm', price: 35, slices: "16 fatias", },
    { id: "002", descricao: 'Pizza grande', size: '45 cm', price: 30, slices: "12 fatias", },
    { id: "003", descricao: 'Pizza média', size: '30 cm', price: 25, slices: "8 fatias", },
    { id: "004", descricao: 'Pizza pequena', size: '25 cm', price: 20, slices: "6 fatias", },
    { id: "005", descricao: 'Pizza broto', size: '20 cm', price: 18, slices: "4 fatias", },
  ]

  const handleSelect = (index, option) => {
    setSelected(index)
    dispatch({ type: CHANGE_PRICE, payload: { value: option.price } })
    dispatch({ type: CHANGE_SIZE, payload: { id: option.id, description: option.descricao } })
  }

  return (
    <View style={styles.radioGroupContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroolContainer}>
        <Radio
          selected={selected}
          option={options}
          horizontal={true}
          onChangeSelect={handleSelect}
          value="slices"
        />
      </ScrollView>
    </View>
  )
}
export default RadioGroup