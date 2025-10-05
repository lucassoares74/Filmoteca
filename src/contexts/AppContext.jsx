import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isOpen, setisOpen}}>
      {children}
    </AppContext.Provider>
  );
};
