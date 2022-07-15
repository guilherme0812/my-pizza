import React, {useState} from 'react';
import Select from '../../../../components/Select';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_FLAVOR } from '../../../../config/actions/actionTypes';
import store from '../../../../config/store'

const ChooseFlavor = ({ index }) => {
  // const flavorsList = useSelector(state => state.flavors)
  // const selectedFlavor = useSelector(state => state.selectedPizza.flavors[index])
  const [selectedFlavor, setSelectedFlavor] = useState()

  const data = [{ id: '001', descricao: 'Calabresa', 'type': 1 }, { id: '002', descricao: 'Portuguesa', 'type': 1 },]

  const dispatch = useDispatch()

  const handleChangeFlavor = value => {
    setSelectedFlavor(value)
  }

  return (
    <Select
      data={data}
      setData={handleChangeFlavor}
      initialValue={selectedFlavor}
      placeholder="Selecione um sabor..."
      description='descricao'
      value="id"
    />
  )
}
export default ChooseFlavor