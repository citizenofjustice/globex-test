import { useState } from "react";
import { AppContext } from "./context";

export const ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenState = () => setIsOpen((prevValue) => !prevValue);

  const contextValue = { isOpen, toggleOpenState };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
