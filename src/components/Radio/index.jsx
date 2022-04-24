import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles';

const Radio = ({
  option=[],
  horizontal=true,
  onChangeSelect,
  selected,
  value="descricao"
}) => {
  const horizontalStyle = horizontal? 'row' : 'column'

  return(
    <View style={{flexDirection: horizontalStyle, justifyContent: 'center'}}>
      {option.map( (opt, index) => (
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => onChangeSelect(index, opt)}
          key={index}
        >
          <View style={styles.outlineCircle}>
            {selected == index && <View style={styles.innerCircle}></View>}
          </View>
          <Text style={styles.text}>{opt[value]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
export default Radio