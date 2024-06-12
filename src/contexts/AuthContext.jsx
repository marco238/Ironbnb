import { createContext, useState } from "react";
import { setAccessToken } from "../stores/AccessTokenStore";

// es un componente especial de contexto de react
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (token) => {
    setAccessToken(token);

  }

  return (
    <AuthContext.Provider value={{
      login
    }}>
      {children}
    </AuthContext.Provider>
  );
};
