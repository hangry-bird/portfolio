import React, { createContext } from 'react';

type ProviderPorps = {
  backgroundColor: string
}

export const MainContext = createContext<ProviderPorps | null>(null);
export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const styled = {
    backgroundColor: "#F0FFFF"
  }
  return (
    <MainContext.Provider value={styled}>
      {children}
    </MainContext.Provider>

  )
}
