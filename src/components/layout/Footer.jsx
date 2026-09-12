// src/components/layout/Footer.jsx

import { Link } from "react-router";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <Link to="/" className="footer__brand">
          <span>VON RIEGEN</span>
          <small>ARQUITECTOS</small>

          <p>
            Arquitectura que nace del lugar
            <br />
            y mejora la vida de las personas.
          </p>
        </Link>

        <div className="footer__column">
          <Link to="/arquitectura" className="footer__title">
            Arquitectura
          </Link>

          <Link to="/arquitectura/enfoque">Enfoque</Link>
          <Link to="/arquitectura/educacion">
            Arquitectura + Educación
          </Link>
        </div>

        <div className="footer__column">
          <Link to="/regularizacion" className="footer__title">
            Regularización
          </Link>

          <Link to="/regularizacion">
            Regularización de propiedades
          </Link>
        </div>

        <div className="footer__column">
          <Link to="/division-predios" className="footer__title">
            División de predios
          </Link>

          <Link to="/division-predios">División de predios</Link>
        </div>

        <div className="footer__column">
          <Link
            to="/arquitectura/proyectos"
            className="footer__title"
          >
            Proyectos
          </Link>

          <Link to="/arquitectura/proyectos">
            Obras construidas
          </Link>
        </div>

        <div className="footer__column">
          <Link to="/estudio" className="footer__title">
            Estudio
          </Link>

          <Link to="/estudio">Quiénes somos</Link>
        </div>

        <div className="footer__column">
          <Link to="/contacto" className="footer__title">
            Contacto
          </Link>

          <Link to="/contacto">Formulario</Link>
        </div>

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
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Von Riegen Arquitectos</span>

        <a
          href="https://andresenrique.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__credit"
        >
          Diseño y desarrollo por Andrés Enrique ↗
        </a>

        <span>Pucón, Araucanía, Chile</span>
      </div>
    </footer>
  );
}
