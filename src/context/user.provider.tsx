import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IUser } from "../types";

interface IUserContextValues {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserContextValues | null>(null);

const userProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default userProvider;
