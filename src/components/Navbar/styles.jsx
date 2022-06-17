import styled from 'styled-components/native'
import {Text} from '../../components'

export const Container = styled.View`
  margin: ${({theme}) => theme.padding}px;
  margin-top: ${({theme}) => theme.padding * 2}px;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled(Text).attrs(props => ({
  bold: true,
  size: "4"
}))`
  color: ${({theme}) => theme.black4};
`