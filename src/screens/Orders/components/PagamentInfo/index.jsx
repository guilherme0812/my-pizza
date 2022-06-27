import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Price, PagamentText } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const PagamentInfo = () => {
  return (
    <Container>
      <Price>R$ 60</Price>
      <TouchableOpacity>
        <PagamentText>
          métodos de pagamento
          <Icon name="caret-down" size={15} />
        </PagamentText>
      </TouchableOpacity>
    </Container>
  )
}
export default PagamentInfo