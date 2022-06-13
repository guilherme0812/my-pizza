import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${({theme}) => theme.padding}px;
  background-color:#ffddce;
  border-radius: 10px;
  margin-left: ${({theme}) => theme.padding}px;
  margin-right: ${({theme}) => theme.padding}px;
`

export const CardMessageConatiner = styled.View`
  width: 60%;
`
export const TextCard = styled(Text).attrs(props =>({
  size: "6",
  bold: true,
}))`
  color: ${({theme}) => theme.primary};
  text-align: left;
`