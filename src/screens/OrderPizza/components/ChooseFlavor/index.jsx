import React from 'react';
import Select from '../../../../components/Select';
import { useSelector } from 'react-redux';

const ChooseFlavor = ({data,setData,index}) => {
  const flavors = useSelector(state => state.flavors)

  return(
    <Select
      data={data}
      setData={setData}
      index={index}
      placeholder="Selecione um sabor..."
      list={flavors}
      value={'Flavor'}
      key={undefined}
    />
  )
}
export default ChooseFlavor