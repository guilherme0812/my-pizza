import React, { useEffect } from 'react';
import { View } from 'react-native'
import ChooseFlavor from '../ChooseFlavor';
import { useDispatch } from 'react-redux';
import { getFlavors } from '../../../../config/actions/flavor';
import { Container } from './styles'

const SelectGroup = ({ index }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFlavors())
  }, []);

  return (
    <Container>
      <ChooseFlavor index={0} />
      <ChooseFlavor index={1} />
      <ChooseFlavor index={2} />
    </Container>
  )
}
export default SelectGroup