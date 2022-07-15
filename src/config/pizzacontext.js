import React, { useState } from 'react';
import constate from "constate"

const pizzacontext = () => {
  const [count, setCount] = useState(0)
  const [sizeSelected, setSizeSelected] = useState()
  const [flavorsSelected, setFlavorsSelected] = useState([])

  return {
    sizeSelected, setSizeSelected, flavorsSelected, setFlavorsSelected, count
  }
}

export const [PizzaContextProvider, usePizzaContext] = constate(pizzacontext)