import { createContext, useContext, useState } from "react";
import { apiPostLogin } from "../api/api";

const authContext = createContext();

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = (value) =>
    apiPostLogin("login", value)
      .then((res) => setUser(res.data))

  const signOut = () => setUser(null);

  return {
    user,
    signIn,
    signOut,
  };
};

export const ProvideAuth = ({ children }) => {
  // esto es un HOC o Componente de Orden Superior
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
