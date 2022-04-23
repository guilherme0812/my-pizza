import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles';

const Radio = ({
  option=[],
  horizontal=true,
  onChangeSelect,
  selected
}) => {
  return(
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {option.map( (opt, index) => (
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => onChangeSelect(index)}
          key={index}
        >
          <View style={styles.outlineCircle}>
            {selected == index && <View style={styles.innerCircle}></View>}
          </View>
          <Text style={styles.text}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
export default Radio