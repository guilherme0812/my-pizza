import React, {useState} from 'react';
import Select from '../../../../components/Select';
import { usePizzaContext } from '../../../../config/pizzacontext';

const ChooseFlavor = ({ index }) => {
  const {flavorsSelected, setFlavorsSelected} = usePizzaContext()
  const [flavorSelected, setFlavorSelected] = useState()

  const data = [{ id: '001', descricao: 'Calabresa', 'type': 1 }, { id: '002', descricao: 'Portuguesa', 'type': 1 },]

  const handleChangeFlavor = value => {

    const existsRecordInner = flavorsSelected.some(flavor => flavor.id === value.id)
    // if (flavorsSelected.length === 0) {
    //   setFlavorsSelected([value])
    // } else {
    //   console.log(flavorsSelected.some(flavor => flavor.id === value.id))
    // }
    if (!existsRecordInner) {
      setFlavorsSelected([...flavorsSelected, value])
      setFlavorSelected(value)
    } else {
      alert("Sabor já selecionado")
    }
  }
  console.log(flavorsSelected)

  return (
    <Select
      data={data}
      setData={handleChangeFlavor}
      initialValue={flavorSelected}
      placeholder="Selecione um sabor..."
      description='descricao'
      value="id"
    />
  )
}
export default ChooseFlavor