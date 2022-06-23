import styled from 'styled-components/native'
import { Text } from "../../components";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const Title = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black4};
    text-align: center;
`

export const Price = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black4};
    text-align: center;
`
export const ImagePizzaContainer = styled.View`
    align-items: center;
    padding-top: ${({theme}) => theme.padding}px;
    padding-bottom: ${({theme}) => theme.padding}px;
`
export const ButtonContainer = styled.View`
    padding-left: ${({theme}) => theme.padding}px;
    padding-right: ${({theme}) => theme.padding}px;
    margin-bottom: ${({theme}) => theme.padding * 2}px;
`