import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const ButtonContainer = styled.View`
    padding-left: ${({ theme }) => theme.padding}px;
    padding-right: ${({ theme }) => theme.padding}px;
    margin-bottom: ${({ theme }) => theme.padding * 2}px;
`

export const CardContainer = styled.View`
    padding-left: ${({ theme }) => theme.padding}px;
    padding-right: ${({ theme }) => theme.padding}px;
`