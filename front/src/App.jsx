import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistroPage from "./pages/RegistroPage/RegistroPage";
import MisFavoritosPage from "./pages/MisFavoritosPage/MisFavoritosPage";
import MisReservasPage from "./pages/MisReservasPage/MisReservasPage";
import Producto from "./pages/Producto/Producto";
import Reserva from "./pages/Reserva/Reserva";
import ReservaExitosa from "../src/pages/ReservaExitosa/ReservaExitosa";
import NuevoProductoPage from "../src/pages/NuevoProductoPage/NuevoProductoPage";
import NuevoProductoOk from "../src/pages/NuevoProductoOk/NuevoProductoOk";
import { AuthProvider } from "./../src/context/AuthContext";
import { ProdProvider } from "../src/context/ProdContext";
import "./styles.css";
import { FavsProvider } from "./context/FavsContext";
import { FiltroProvider } from "./context/FiltroContext";
import RegistroExitosoPage from "./pages/RegistroExitosoPage/RegistroExitosoPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/registro" component={RegistroPage}></Route>

          <FavsProvider>
            <FiltroProvider>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/admin" component={NuevoProductoPage}></Route>
              <Route
                exact
                path="/registro-exitoso"
                component={RegistroExitosoPage}
              ></Route>
              <Route
                exact
                path="/auth/confirm-account/:token"
                component={RegistroExitosoPage}
              ></Route>

              <Route
                exact
                path="/usuario/:id_usuario/favoritos"
                component={MisFavoritosPage}
              ></Route>
              <Route
                exact
                path="/usuario/:id_usuario/reservas"
                component={MisReservasPage}
              ></Route>

              <Route
                exact
                path="/creacion-producto-exitosa"
                component={NuevoProductoOk}
              ></Route>

              <ProdProvider>
                <Route
                  exact
                  path="/producto/:id_producto"
                  component={Producto}
                ></Route>
                <Route
                  exact
                  path="/producto/:id_producto/reserva"
                  component={Reserva}
                ></Route>
                <Route
                  exact
                  path="/producto/:id_producto/reserva-exitosa"
                  component={ReservaExitosa}
                ></Route>
              </ProdProvider>
            </FiltroProvider>
          </FavsProvider>

          <Route exact path="/not-found" component={NotFoundPage} />
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
