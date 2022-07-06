import React, {useState} from 'react';
import constate from "constate"

const pizzacontext = () => {
  const [count, setCount] = useState(0)

  return {
    count
  }
}

export const [PizzaContextProvider, usePizzaContext] = constate(pizzacontext)