import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import {
  setAuthStorage,
  getAuthStorage,
  removeAuthStorage,
} from "../utils/auth";

export const AuthContext = createContext({
  auth: {
    idUsuario: Number,
    firstName: "",
    lastName: "",
    email: "",
    jwt: "",
    favoritos: [null],
    roles: [""],
  },
  authenticate: (auth) => {},
  logout: () => {},
});

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getAuthStorage());

  useEffect(() => {
    const storedAuth = getAuthStorage();
    if (storedAuth) {
      // chequear que el jwt no haya expirado
      const decoded = jwt_decode(storedAuth.jwt);
      if (decoded.exp * 1000 <= Date.now()) {
        logout();
      } else {
        setAuth(storedAuth);
      }
    } else {
      setAuth(null);
    }
  }, [setAuth]);

  // Si en Login, user y pass son correctos son pasados a la función authenticate
  const authenticate = (response) => {
    const auth = {
      idUsuario: response.idUsuario,
      firstName: response.nombre,
      lastName: response.apellido,
      email: response.email,
      jwt: response.jwt,
      roles: response.authorities?.map((el) => el.authority),
    };

    setAuth(auth);
    setAuthStorage(auth);
  };

  const logout = () => {
    setAuth(null);
    removeAuthStorage();
  };

  return <Provider value={{ auth, authenticate, logout }}>{children}</Provider>;
};
