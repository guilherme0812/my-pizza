import {useState} from 'react';
import { View, Text } from 'react-native'
import Select from '../../../../components/Select';
import {Container} from './styles';

const ChooseDrink = ({index}) => {
  const [data, setData] = useState()
  const list = [{name: 'caipirinha', id: '0001'},{name: 'Coca-cola 2L', id: '0002'},]
  return (
    <Container>
      <Select
        data={data}
        setData={setData}
        index={index}
        list={list}
        value={'name'}
        placeholder="Selecione uma bebida"
      />
    </Container>
  )
}
export default ChooseDrink