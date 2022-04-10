import React, { createContext, useState, useContext } from "react";

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [name, setName] = useState('Alexandre');
  const [cardMessage, setMessageCard] = useState('Toda terça entrega Free')

  return (
    <HomeContext.Provider
      value={{
        name,
        setName,
        cardMessage,
        setMessageCard
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  const context = useContext(HomeContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { name, setName, cardMessage, setMessageCard } = context;
  return { name, setName, cardMessage, setMessageCard };
}