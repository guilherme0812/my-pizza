import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import SelectModal from '../../../../components/Modal/SelectModal';
import styles from './styles';

const ChooseFlavors = ({data,setData, index}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }
  const pushToIndex = (value) => {
    let flovors = data
    data[index] = value
    setData(flovors)
  }
  console.log(data)
  return (
    <View>
      <TouchableOpacity
        style={styles.select}
        onPress={() => handleModalVisibility(true)}
      >
        <Text style={[styles.text, styles.textOption, styles.textLg]}> {data[index]? data[index] : 'Selecione o sabor'} </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => handleModalVisibility(false)}
      >
        <SelectModal {...{ handleModalVisibility }} setData={pushToIndex} />
      </Modal>

    </View>
  )
}
export default ChooseFlavors