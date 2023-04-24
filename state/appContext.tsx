import { createContext } from "react";

interface ContextProps {}

export const appContext = createContext({} as ContextProps)

export const appProvider = ({children}: any) => {
  <appContext.Provider
    value={{
      
    }}
  >
    {children}
  </appContext.Provider>
}
