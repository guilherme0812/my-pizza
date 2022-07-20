import { useState, useEffect } from 'react';
import constate from "constate"
import AsyncStorage from '@react-native-async-storage/async-storage';

const pizzacontext = () => {
  const [count, setCount] = useState(0)
  const [sizeSelected, setSizeSelected] = useState()
  const [flavorsSelected, setFlavorsSelected] = useState([])
  const [pizzasSelectedList, setPizzasSelectedList] = useState([])

  AsyncStorage.clear()
  const getPizzasSelected = async () => {
    try {
      const response = await AsyncStorage.getItem('@pizzasSelected')
      if (response !== null) {
        const json = JSON.parse(response)
        setPizzasSelectedList(json)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSelectPizza = () => {
    const body = {
      size: sizeSelected,
      flavors: flavorsSelected
    }

    setPizzasSelectedList([...pizzasSelectedList, body])
  }

  const savePizzaInStorage = async () => {
    console.log("Enviando dados para o storage...")
    try {
      const json = JSON.stringify(pizzasSelectedList)
      
      const response = await AsyncStorage.setItem("@pizzasSelected", json)
      console.log('Enviado!')
      clearForm()
    } catch (error) {
      console.log(error)
    }
  }

  const clearForm = () => {
    setSizeSelected(null)
    setFlavorsSelected([])
  } 

  useEffect(() => {
    getPizzasSelected()
  }, []);

  useEffect(() => {
    if (pizzasSelectedList.length > 0) {
      savePizzaInStorage()
    }
  }, [pizzasSelectedList]);

  return {
    sizeSelected, setSizeSelected, flavorsSelected, setFlavorsSelected, handleSelectPizza, count
  }
}

export const [PizzaContextProvider, usePizzaContext] = constate(pizzacontext)