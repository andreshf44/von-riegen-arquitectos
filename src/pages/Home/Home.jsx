import { Link } from "react-router";
import Navbar from "../../components/layout/Navbar";
import "./Home.css";

const services = [
  {
    number: "01",
    title: "Arquitectura personalizada",
    description:
      "Espacios pensados desde el lugar, el clima y la forma de habitar.",
    path: "/arquitectura",
    className: "architecture",
  },
  {
    number: "02",
    title: "Regularización de propiedades",
    description:
      "Asesoría y tramitación para poner tu propiedad en regla.",
    path: "/regularizacion",
    className: "regularization",
  },
  {
    number: "03",
    title: "División de predios",
    description:
      "Estudios y gestión para dividir o fusionar terrenos.",
    path: "/division-predios",
    className: "land",
  },
];

export default function Home() {
  return (
    <main className="home">
      <Navbar />

      <section className="home__intro">
        <div className="home__intro-copy">
          <p className="home__eyebrow">Arquitectura · Pucón, Chile</p>

          <h1>
            Arquitectura
            <br />
            para el sur.
          </h1>

          <p className="home__description">
            Diseño, regularización y gestión territorial desde una mirada
            sustentable, cercana y personalizada.
          </p>

          <Link to="/estudio" className="home__studio-link">
            Conocer el estudio
            <span>→</span>
          </Link>
        </div>

        <div className="home__drawing" aria-hidden="true">
          <img
            src="/public/images/home/architectural-sketch.png"
            alt=""
            className="home__drawing-image"
          />
        </div>
      </section>

      <section className="home__services">
        <p className="home__services-label">¿Qué necesitas?</p>

        <div className="home__services-grid">
          {services.map((service) => (
            <Link
              to={service.path}
              key={service.path}
              className={`service-card service-card--${service.className}`}
            >
              <div className="service-card__overlay" />

              <div className="service-card__content">
                <span className="service-card__number">
                  {service.number}
                </span>

                <div className="service-card__bottom">
                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <span className="service-card__link">
                    Explorar
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}