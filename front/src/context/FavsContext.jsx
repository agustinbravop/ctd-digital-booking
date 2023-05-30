import { createContext, useState, useEffect, useContext } from "react";
import { environment } from "../constants";
import { AuthContext } from "./AuthContext";

export const FavsContext = createContext({
  favs: [
    {
      idProducto: Number,
    },
  ],
  addNewFav: (idProducto) => {},
  removeFav: (idProducto) => {},
});

const { Provider } = FavsContext;

export const FavsProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);
  const { BASE_URL } = environment;
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    async function fetchFavs() {
      if (auth) {
        try {
          const res = await fetch(`${BASE_URL}/auth/favs/`, {
            method: "GET",
            headers: { Authorization: "Bearer " + auth.jwt },
          });
          if (res.status === 200) {
            const prods = await res.json();
            setFavs(prods);
          } else {
            setFavs([]);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
    fetchFavs();
  }, [auth, BASE_URL]);

  const addNewFav = async (idProducto) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/favs/agregar/${idProducto}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.jwt,
        },
      });
      if (res.status === 200) {
        const prods = await res.json();
        setFavs(prods);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeFav = async (idProducto) => {
    try {
      const res = await fetch(`${BASE_URL}/auth/favs/eliminar/${idProducto}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + auth.jwt,
        },
      });
      if (res.status === 200) {
        const prods = await res.json();
        setFavs(prods);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <Provider value={{ favs, addNewFav, removeFav }}>{children}</Provider>;
};
