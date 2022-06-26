import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View.attrs(props => ({
    elevation: 8
  }))`
    flex-direction: row;
    border-radius: 20px;
    padding: ${({theme}) => theme.padding}px;
    background-color: ${({theme}) => theme.white2};
    margin-bottom: ${({theme}) => theme.padding}px;
`
export const ContentContainer = styled.View`
    margin-left: ${({theme}) => theme.padding}px;
`

export const Title = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black4};
`

export const Flavor = styled(Text).attrs(props => ({
    size: "3"
  }))`
    color: ${({theme}) => theme.black5};
`

export const Price = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.primary};
`