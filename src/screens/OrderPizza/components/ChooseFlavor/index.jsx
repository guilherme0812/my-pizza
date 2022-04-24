import React from 'react';
import Select from '../../../../components/Select';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FLAVOR } from '../../../../config/actions/actionTypes';


const ChooseFlavor = ({index}) => {
  const flavorsList = useSelector(state => state.flavors)
  const selectedFlavor = useSelector(state => state.selectedPizza.flavors[index])

  const dispatch = useDispatch()

  const handleChangeFlavor = value => {
    console.log(value)
    dispatch({type: ADD_FLAVOR, payload: {flavor: value, index: index}})
  }

  return(
    <Select
      data={selectedFlavor}
      setData={handleChangeFlavor}
      index={index}
      placeholder="Selecione um sabor..."
      list={flavorsList}
      value={'Flavor'}
      key={undefined}
    />
  )
}
export default ChooseFlavor