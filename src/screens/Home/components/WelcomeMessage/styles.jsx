import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View`
margin-left: ${({theme}) => theme.padding}px;
`

export const Hello = styled(Text).attrs(props => ({
  size: "4",
  bold: true
}))`
  color: ${({theme}) => theme.primary}
`

export const MessageText = styled(Text).attrs(props => ({
  size: "7",
  bold: true
}))`
  color: ${({theme}) => theme.black5}
`