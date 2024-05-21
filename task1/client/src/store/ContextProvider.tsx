import { useState } from "react";
import { AppContext } from "./context";
import { User } from "../types/User";

export const ContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState<User[] | undefined>();
  const [dialogData, setDialogData] = useState<User | undefined>();

  const toggleOpenState = () => setIsOpen((prevValue) => !prevValue);

  const contextValue = {
    users,
    setUsers,
    isOpen,
    toggleOpenState,
    dialogData,
    setDialogData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
