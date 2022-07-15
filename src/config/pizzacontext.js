import React, { useState } from 'react';
import constate from "constate"

const pizzacontext = () => {
  const [count, setCount] = useState(0)
  const [sizeSelected, setSizeSelected] = useState()

  console.log("selected: ", sizeSelected)
  return {
    sizeSelected, setSizeSelected, count
  }
}

export const [PizzaContextProvider, usePizzaContext] = constate(pizzacontext)