import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logos/logo_HD.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar__brand"
        onClick={closeMenu}
      > 
        <img
          src={logo}
          alt="Von Riegen Arquitectos"
          className="navbar__logo"
        />
        <div className="navbar__brand-text">
          <span>VON RIEGEN</span>
          <small>ARQUITECTOS</small>
        </div>
      </Link>

      <nav
        className={`navbar__nav ${
          menuOpen ? "navbar__nav--open" : ""
        }`}
      >
        <NavLink
          to="/arquitectura"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Arquitectura
        </NavLink>

        <NavLink
          to="/regularizacion"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Regularización
        </NavLink>

        <NavLink
          to="/division-predios"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          División de predios
        </NavLink>

        <NavLink
          to="/arquitectura/proyectos"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Proyectos
        </NavLink>

        <NavLink
          to="/estudio"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Estudio
        </NavLink>

        <NavLink
          to="/contacto"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Contacto
        </NavLink>
      </nav>

      <button
        className={`navbar__menu ${
          menuOpen ? "navbar__menu--open" : ""
        }`}
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}