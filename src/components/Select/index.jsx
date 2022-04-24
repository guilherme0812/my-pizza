import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import SelectModal from '../Modal/SelectModal';
import styles from './styles';

const Select = ({
  data,
  setData,
  index,
  placeholder='Selecione...',
  list=[],
  value='descricao',
  key,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }
  const pushToIndex = (value) => {
    let dataArray = data
    data[index] = value
    setData(dataArray)
  }
  // console.log(data)
  return (
    <View>
      <TouchableOpacity
        style={styles.select}
        onPress={() => handleModalVisibility(true)}
      >
        <Text style={[styles.text, styles.textOption, styles.textLg]}> {data? data : placeholder} </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => handleModalVisibility(false)}
      >
        <SelectModal {...{ handleModalVisibility, list, value }} setData={setData}  />
      </Modal>

    </View>
  )
}
export default Select