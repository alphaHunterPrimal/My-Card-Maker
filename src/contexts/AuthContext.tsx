
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { setCookie, parseCookies } from 'nookies'
//import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
}


type AuthContextType = {
  superuser: string,
  setSuperuser: React.Dispatch<React.SetStateAction<string>>,
  userId: string, 
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  userName: string, 
  setUserName: React.Dispatch<React.SetStateAction<string>>,

  inicial: boolean, setInicial:React.Dispatch<React.SetStateAction<boolean>>,

  //user: SuperUser | undefined;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [superuser, setSuperuser] = useState<string>("");
  const [inicial, setInicial] = React.useState<boolean>(false);
  const [userId, setUserId] = React.useState<string>("")
  const [userName, setUserName] = React.useState<string>("")


  return (
    <AuthContext.Provider value={{ inicial, setInicial,superuser, setSuperuser, userId, setUserId, userName, setUserName}}>
      {props.children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
    const value = useContext(AuthContext)
  
    return value;
}