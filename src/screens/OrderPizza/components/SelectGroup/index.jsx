import React from 'react';
import ChooseFlavor from '../ChooseFlavor';
import { useDispatch } from 'react-redux';
import { Container } from './styles'

const SelectGroup = () => {

  return (
    <Container>
      <ChooseFlavor index={0} />
      <ChooseFlavor index={1} />
      <ChooseFlavor index={2} />
    </Container>
  )
}
export default SelectGroup