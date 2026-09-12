import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
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

const opinions = [
  {
    number: "01",
    commentary: "Daniela brinda un servicio de arquitectura de alta calidad, destacando por su profesionalismo y compromiso. Se involucra personalmente en cada actividad y tarea del proyecto, realizando un seguimiento permanente de las tareas y manteniéndose siempre disponible para resolver consultas. Su dedicación y la capacidad de gestión,  generan confianza y garantizan una experiencia muy satisfactoria.",
    title: "Rodrigo Lopez",
    subtitle: "Falta Casa",
    url: "/images/home/opinions/opinion-01.png",
  },
  {
    number: "02",
    commentary:"Con Daniela sentí que se logró una mezcla perfecta entre lo que yo tenía en mente y sus propuestas. En otras palabras supo leer al cliente y plasmar tanto en diseño, habitabilidad, luz y eficiencia energética un resultado equilibrado que me dejó muy satisfecho.",
    title: "Falta Nombre",
    subtitle: "Casa en Los Riscos",
    url: "/images/home/opinions/opinion-02.png",
  },
  {
    number: "03",
    commentary:"Trabajar con Daniela fue muy bueno, ella supo escuchar e interpretar nuestras necesidades de muy buena manera. Proactiva, responsable y creativa, dispuesta a rediseñar y soltar ideas previas. Tuvimos una relación armónica, sin tensiones y de comunicación directa y clara.",
    title: "Simón Aldunate",
    subtitle: "Falta Casa",
    url: "/images/home/opinions/opinion-03.jpg",
  },
  {
    number: "04",
    commentary:"Para mí hacer mi casa con Daniela, ha sido una muy buena experiencia, sobre todo el aspecto creativo y la posibilidad de proponer ideas que ella lleva con mucha buena voluntad a la acción, a la realización. En mi casa que está en cerro con inclinación y bosque, ella logró ubicarla en un perfecto lugar para el tema luz, sol y encuentro con la naturaleza.",
    title: "Ximena Araneda Castex",
    subtitle: "Casa en Los Riscos",
    url: "/images/home/opinions/opinion-04.jpg",
  },
];

export default function Home() {

  const [currentOpinion, setCurrentOpinion] = useState(0);

  const opinion = opinions[currentOpinion];

  const nextOpinion = () => {
    setCurrentOpinion((current) =>
      current === opinions.length - 1 ? 0 : current + 1
    );
  };

  const previousOpinion = () => {
    setCurrentOpinion((current) =>
      current === 0 ? opinions.length - 1 : current - 1
    );
  };

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
            src="/images/home/architectural-sketch.png"
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

      <section className="customers_opinion">

        <div className="customers-opinion__quote">
          <span className="customers-opinion__eyebrow">
            LO QUE DICEN NUESTROS CLIENTES
          </span>
          <h2>"{opinion.commentary}"</h2>
        </div>

        <div className="customers-opinion__info">
          <div className="customers-opinion__client">
            <h3>{opinion.title}</h3>
            <span>{opinion.subtitle}</span>
          </div>

          <div className="customers-opinion__navigation">
            <p> {opinion.number} / {String(opinions.length).padStart(2, "0")}</p>
            <div className="customers-opinion__arrows">
              <button
                type="button"
                onClick={previousOpinion}
                aria-label="Comentario anterior"
              >
                <ArrowLeft strokeWidth={1.1} />
              </button>

              <button
                type="button"
                onClick={nextOpinion}
                aria-label="Comentario siguiente"
              >
                <ArrowRight strokeWidth={1.1} />
              </button>
            </div>
          </div>
        </div>
        <div className="customers-opinion__image">
          <img
            src={opinion.url}
            alt={`Proyecto ${opinion.subtitle}`}
          />
        </div>
      </section>

      <Footer />

    </main>
  );
}