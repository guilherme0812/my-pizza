import React, { useState, useContext, createContext } from 'react';

const HomeContext = createContext()

const HomeProvider = () => {
  const [test, setTest] = useState({})
  return (
    <HomeContext.Provider>
      values={{test, setTest}}
    </HomeContext.Provider>
  )
}

export function useHome () {
  const context = useContext(HomeContext)

  const {test, setTest} = context
  return (
    test,
    setTest
  )
}
export default HomeProvider