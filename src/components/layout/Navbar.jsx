import { Link, NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar({ variant = "simple" }) {
  const isFull = variant === "full";

  return (
    <header className={`navbar navbar--${variant}`}>
      <Link to="/" className="navbar__brand">
        <span>VON RIEGEN</span>
        <small>ARQUITECTOS</small>
      </Link>

      <nav className="navbar__nav">
        {isFull ? (
          <>
            <NavLink
              to="/arquitectura"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Arquitectura
            </NavLink>

            <NavLink
              to="/regularizacion"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Regularización
            </NavLink>

            <NavLink
              to="/division-predios"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              División de predios
            </NavLink>

            <NavLink
              to="/arquitectura/proyectos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Proyectos
            </NavLink>

            <NavLink
              to="/estudio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Estudio
            </NavLink>

            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/estudio">Estudio</NavLink>
            <span className="navbar__separator" />
            <NavLink to="/contacto">Contacto</NavLink>
          </>
        )}
      </nav>

      {isFull && (
        <button
          className="navbar__menu"
          type="button"
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>
      )}
    </header>
  );
}
