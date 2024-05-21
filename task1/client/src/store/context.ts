import { createContext } from "react";
import { User } from "../types/User";

interface ContextProps {
  users: User[] | undefined;
  setUsers: (users: User[]) => void;
  isOpen: boolean;
  toggleOpenState: () => void;
  dialogData: User | undefined;
  setDialogData: (userData: User) => void;
}

export const AppContext = createContext<ContextProps | undefined>(undefined);
