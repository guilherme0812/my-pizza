import React from 'react';
import Select from '../../../../components/Select';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FLAVOR } from '../../../../config/actions/actionTypes';
import store from '../../../../config/store'

const ChooseFlavor = ({index}) => {
  const flavorsList = useSelector(state => state.flavors)
  const selectedFlavor = useSelector(state => state.selectedPizza.flavors[index])

  const dispatch = useDispatch()

  const handleChangeFlavor = value => {
    dispatch({type: ADD_FLAVOR, payload: {flavor: value, index: index}})
  }

  return(
    <Select
      data={selectedFlavor}
      setData={handleChangeFlavor}
      index={index}
      placeholder="Selecione um sabor..."
      list={flavorsList}
      value={'description'}
      key={undefined}
    />
  )
}
export default ChooseFlavor