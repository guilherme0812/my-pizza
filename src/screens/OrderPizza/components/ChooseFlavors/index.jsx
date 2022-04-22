import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import SelectModal from '../../../../components/Modal/SelectModal';
import styles from './styles';

const ChooseFlavors = () => {
  const [flavor1, setFlavor1] = useState('Selecione um sabor')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.select}
        onPress={() => handleModalVisibility(true)}
      >
        <Text style={[styles.text, styles.textOption, styles.textLg]}> {flavor1} </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => handleModalVisibility(false)}
      >
        <SelectModal {...{ handleModalVisibility }} setData={setFlavor1} />
      </Modal>
    </View>
  )
}
export default ChooseFlavors