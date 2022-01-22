
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

//import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
}


type AuthContextType = {
  superuser: string,
  setSuperuser: React.Dispatch<React.SetStateAction<string>>,

  inicial: boolean, setInicial:React.Dispatch<React.SetStateAction<boolean>>,

  //user: SuperUser | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [superuser, setSuperuser] = useState<string>("");
  const [inicial, setInicial] = React.useState<boolean>(false);
/*
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])
*/
  async function signInWithGoogle() {
      console.log("oi")
    //const provider = new firebase.auth.GoogleAuthProvider();
/*
    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  */
   }
  return (
    <AuthContext.Provider value={{ inicial, setInicial,superuser, setSuperuser, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
    const value = useContext(AuthContext)
  
    return value;
}