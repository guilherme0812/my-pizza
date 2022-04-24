import React from 'react';
import { View, Text } from 'react-native'
import ChooseFlavor from '../ChooseFlavor';

const SelectGroup = ({ index }) => {
  return (
    <View>
      <ChooseFlavor index={0} />
      <ChooseFlavor index={1} />
      <ChooseFlavor index={2} />
    </View>
  )
}
export default SelectGroup