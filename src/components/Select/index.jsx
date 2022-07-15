import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import SelectModal from '../Modal/SelectModal';
import styles from './styles';

const Select = ({
  data,
  setData,
  description="descricao",
  value="id",
  initialValue,
  placeholder='Selecione...',
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }
  console.log(initialValue && initialValue[description])

  return (
    <View>
      <TouchableOpacity
        style={styles.select}
        onPress={() => handleModalVisibility(true)}
      >
        <Text style={[styles.text, styles.textOption, styles.textLg]}> {initialValue ? initialValue[description] :placeholder} </Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => handleModalVisibility(false)}
      >
        <SelectModal
          handleModalVisibility={handleModalVisibility}
          data={data}
          setData={setData}
          description={description}
        />
      </Modal>

    </View>
  )
}
export default Select