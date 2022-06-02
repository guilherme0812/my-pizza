import styled from 'styled-components/native'

export const TextContainer = styled.Text`
  font-family: text;
  font-size:  ${({ size }) => size && size}px;
`