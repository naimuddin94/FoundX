"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../services/AuthService";
import { IUser } from "../types";

interface IUserContextValues {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserContextValues | null>(null);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userUser must be used within the the UserProvider");
  }

  return context;
};

export default UserProvider;
