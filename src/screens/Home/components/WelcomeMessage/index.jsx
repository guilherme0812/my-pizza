import React, { useEffect, useState } from 'react';
import { Container, Hello, MessageText } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../../config/actions/user';

const WelcomeMessage = () => {
  const [user, setUser] = useState([])

  const dispatch = useDispatch()
  const userName = useSelector(state => state.UserReducer)

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    <Container>
      <Hello> Olá, {userName?.nome} </Hello>
      <MessageText>Peça sua pizza</MessageText>
    </Container>
  )
}

export default WelcomeMessage