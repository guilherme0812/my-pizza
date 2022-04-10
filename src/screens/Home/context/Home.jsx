import React, { createContext, useState, useContext } from "react";

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <HomeContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHome() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { count, setCount } = context;
  return { count, setCount };
}