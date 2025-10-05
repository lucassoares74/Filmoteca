import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isSearchOpen, setisSearchOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isOpen, setisOpen,isSearchOpen, setisSearchOpen}}>
      {children}
    </AppContext.Provider>
  );
};
