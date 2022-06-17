import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View`
  margin-bottom: ${({theme}) => theme.padding}px;
`

export const Title = styled(Text).attrs(props => ({
  size: "5",
  bold: true,
}))`
  color: ${({theme}) => theme.black5};
  margin-left: ${({theme}) => theme.padding}px;
`

export const List = styled.FlatList`
  height: 120px;
`