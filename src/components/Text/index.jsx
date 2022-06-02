import React from 'react';
import { TextContainer } from './styles';

const Text = ({children, ...props}) => {
  return (
    <TextContainer {...props}>
      {children}
    </TextContainer>
  )
}
export default Text