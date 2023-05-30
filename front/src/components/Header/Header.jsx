import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import Logo from "../Logo/Logo";
import MenuHamburguesa from "./../../img/menu-hamburguesa.svg";
import RedesSociales from "../RedesSociales/RedesSociales";
import SaludoRegistrado from "../SaludoRegistrado/SaludoRegistrado";
import "./Header.css";

const InvitadoDesktopLinks = ({ links, page }) => {
  return links.map(
    ([link, title], idx) =>
      page !== link && (
        <Link key={idx} to={link} className="btn btn-secundario btn-xs">
          {title}
        </Link>
      )
  );
};
const InvitadoMobileLinks = ({ links, page }) => {
  return links.map(
    ([link, title], idx) =>
      page !== link && (
        <li key={idx} className="btn-cuenta-drawer">
          <Link to={link}>{title}</Link>
        </li>
      )
  );
};
const LoggedInDesktopLinks = ({ linksPorRol, rolesDelUsuario, page }) => {
  return Object.keys(linksPorRol)
    .filter((rol) => rolesDelUsuario?.includes(rol))
    .map((rol) =>
      linksPorRol[rol].map(
        ([link, title], idx) =>
          page !== link && (
            <Link key={idx} to={link} className="btn-header-link">
              {title}
            </Link>
          )
      )
    );
};
const LoggedInMobileLinks = ({ linksPorRol, rolesDelUsuario, page }) => {
  return Object.keys(linksPorRol)
    .filter((rol) => rolesDelUsuario?.includes(rol))
    .map((rol) =>
      linksPorRol[rol].map(
        ([link, title], idx) =>
          page !== link && (
            <li key={idx} className="btn-cuenta-drawer">
              <Link to={link}>{title}</Link>
            </li>
          )
      )
    );
};

function Header({ page }) {
  const [open, setOpen] = useState(false);
  const { auth, logout } = useContext(AuthContext);
  
  const linksDeInvitado = [
    ["/registro", "Crear cuenta"],
    ["/login", "Iniciar sesión"],
  ];
  const linksPorRol = {
    ROLE_USER: [
      [`/usuario/${auth?.idUsuario}/reservas`, "Mis reservas"],
      [`/usuario/${auth?.idUsuario}/favoritos`, "Mis Favoritos"],
    ],
    ROLE_ADMIN: [["/admin", "Administración"]]
  };
  
  const history = useHistory();
  const exit = () => {
    logout();
    history.push("/");
  }

  return (
    <header className="main-header">
      <Logo />

      <nav className="main-header__navbar">
        {auth ? (
          <>
            <LoggedInDesktopLinks
              linksPorRol={linksPorRol}
              rolesDelUsuario={auth.roles}
              page={page}
            />
            <div className="saludo-registrado-container">
              <SaludoRegistrado onExit={exit} />
            </div>
          </>
        ) : (
          <InvitadoDesktopLinks links={linksDeInvitado} page={page} />
        )}
      </nav>

      <div className="main-header__menu-hamburguesa">
        <button
          onClick={() => setOpen(!open)}
          aria-controls="collapse"
          aria-expanded={open}
        >
          <img src={MenuHamburguesa} alt="Menú" />
        </button>

        <div className={"collapse " + (open ? "collapse-show" : "")}>
          <div>
            <div className="collapse-header">
              <button data-testid="open-collapse" onClick={() => setOpen(!open)}>
                <i className="fas fa-times"></i>
              </button>

              {auth ? <SaludoRegistrado menuDrawer /> : <p>MENÚ</p>}
            </div>

            <div className="collapse-body">
              <ul className="ul-drawer">
                {auth ? (
                  <LoggedInMobileLinks
                    linksPorRol={linksPorRol}
                    page={page}
                    rolesDelUsuario={auth.roles}
                  />
                ) : (
                  <InvitadoMobileLinks links={linksDeInvitado} page={page} />
                )}
              </ul>
            </div>
          </div>

          <div className="collapse-footer">
            {auth ? (
              <p>
                ¿Deseas{" "}
                <span onClick={exit} aria-label="cerrar">
                  cerrar sesión
                </span>
                ?
              </p>
            ) : (
              <p></p>
            )}
            <RedesSociales />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
