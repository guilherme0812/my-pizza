import React, {useEffect} from 'react';
import { View } from 'react-native'
import ChooseFlavor from '../ChooseFlavor';
import { useDispatch } from 'react-redux';
import { getFlavors } from '../../../../config/actions/flavor';

const SelectGroup = ({ index }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFlavors())
  }, []);

  return (
    <View>
      <ChooseFlavor index={0} />
      <ChooseFlavor index={1} />
      <ChooseFlavor index={2} />
    </View>
  )
}
export default SelectGroup