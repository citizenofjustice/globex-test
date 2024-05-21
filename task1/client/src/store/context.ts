import { createContext } from "react";

interface ContextProps {
  isOpen: boolean;
  toggleOpenState: () => void;
}

export const AppContext = createContext<ContextProps | undefined>(undefined);
