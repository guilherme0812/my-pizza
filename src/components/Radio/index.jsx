import React from 'react';
import { View } from 'react-native'
import styles, { RadioContainer, RadioTouchable, Circle } from './styles';
import Text from '../Text'

const Radio = ({
  option = [],
  horizontal = true,
  onChangeSelect,
  selected,
  value = "descricao"
}) => {
  const horizontalStyle = horizontal ? 'row' : 'column'

  return (
    <RadioContainer {...{horizontalStyle}}>
      {option.map((opt, index) => (
        <RadioTouchable
          onPress={() => onChangeSelect(opt)}
          key={index}
        >
          <Circle>
            {selected == index && <View style={styles.innerCircle}></View>}
          </Circle>
          <Text size="3">{opt[value]}</Text>
        </RadioTouchable>
      ))}
    </RadioContainer>
  )
}
export default Radio