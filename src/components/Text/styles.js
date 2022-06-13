import styled from 'styled-components/native'

export const TextContainer = styled.Text`
  font-family: ${props => props.bold ? 'bold' : 'text'};
  font-size: ${props => {
    const test = props.size && props.size;

    if (test === "1") {
      return '10px'
    } else if (test ===  "2") {
      return '12px'
    } else if (test === "3") {
      return "14px"
    } else if (test === "4") {
      return "18px"
    } else if (test === "5") {
      return "20px"
    } else if (test === "6") {
      return "25px"
    } else if (test === "7") {
      return "30px"
    } else {
      return "12px"
    }
  }}
`