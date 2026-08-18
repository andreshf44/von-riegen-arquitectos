// src/components/layout/Footer.jsx

import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer__brand">
        <span>VON RIEGEN</span>
        <small>ARQUITECTOS</small>
      </Link>

      <nav className="footer__nav">
        <Link to="/arquitectura">Arquitectura</Link>
        <Link to="/regularizacion">Regularización</Link>
        <Link to="/division-predios">División de predios</Link>

        {/* mientras Proyectos solo viva dentro de Arquitectura,
            este link puede apuntar allí */}
        <Link to="/arquitectura/proyectos">Proyectos</Link>

        <Link to="/estudio">Estudio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <div className="footer__social">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          IG
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          WA
        </a>
      </div>
    </footer>
  );
}