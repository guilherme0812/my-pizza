import {useState} from 'react';
import { View, Text } from 'react-native'
import Select from '../../../../components/Select';
import styles from './styles';

const ChooseDrink = ({index}) => {
  const [data, setData] = useState()
  const list = [{name: 'caipirinha', id: '0001'},{name: 'Coca-cola 2L', id: '0002'},]
  return (
    <View>
      <Select
        data={data}
        setData={setData}
        index={index}
        list={list}
        value={'name'}
        placeholder="Selecione uma bebida"
      />
    </View>
  )
}
export default ChooseDrink