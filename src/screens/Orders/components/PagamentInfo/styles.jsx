import styled from 'styled-components/native'
import { Text } from "../../../../components";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Price = styled(Text).attrs(props => ({
    bold: true,
    size: "4"
  }))`
    color: ${({theme}) => theme.black3};
`

export const PagamentText = styled(Text).attrs(props => ({
    size: "3"
  }))`
    color: ${({theme}) => theme.black4};
`