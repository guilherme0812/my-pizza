import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.white};
  width: 90px;
  height: 90px;
  border-radius: 10px;
  padding: ${({theme}) => theme.padding}px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  elevation: 5;
`