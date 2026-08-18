import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        <span>VON RIEGEN</span>
        <small>ARQUITECTOS</small>
      </Link>

      <nav className="navbar__nav">
        <Link to="/estudio">Estudio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}