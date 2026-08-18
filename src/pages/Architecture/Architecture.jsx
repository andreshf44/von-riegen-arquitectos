import { Link } from "react-router";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Architecture.css";
import {
    Sun,
    Leaf,
    Brain,
    Mountain,
} from "lucide-react";

const features = [
    {
      icon: Sun,
      title: "Diseño pasivo",
      text: "Estrategias de diseño solar pasivo para mejorar el confort térmico y la eficiencia energética.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidad",
      text: "Materiales locales, sistemas constructivos eficientes y bajo impacto ambiental.",
    },
    {
      icon: Brain,
      title: "Neuroarquitectura",
      text: "Espacios que influyen positivamente en el bienestar y las emociones de quienes los habitan.",
    },
    {
      icon: Mountain,
      title: "Entorno",
      text: "Integración respetuosa con el paisaje, la topografía y la vegetación existente.",
    },
];

const process = [
  {
    number: "01",
    title: "Conversación",
    text: "Escuchamos tus ideas, necesidades y sueños.",
  },
  {
    number: "02",
    title: "Terreno",
    text: "Analizamos el lugar, el entorno y sus condicionantes.",
  },
  {
    number: "03",
    title: "Diseño",
    text: "Propuesta a medida, integrando arquitectura y sustentabilidad.",
  },
  {
    number: "04",
    title: "Desarrollo",
    text: "Planos, especificaciones técnicas y definición constructiva.",
  },
  {
    number: "05",
    title: "Construcción",
    text: "Acompañamiento en obra, coordinación y visitas periódicas.",
  },
];

const included = [
  "Planos de arquitectura",
  "Planos de construcción",
  "Elección del sistema constructivo y aislación",
  "Diseño solar pasivo",
  "Neuroarquitectura",
  "Visitas a obra",
  "Proyectos anexos (piscina, quinchos, cabañas, etc.)",
];

export default function Architecture() {
  return (
    <main className="architecture">
      <Navbar variant="full" />

      {/* HERO */}

      <section className="architecture__hero">
        <div className="architecture__hero-copy">
          <span className="architecture__eyebrow">
            01 / Arquitectura personalizada
          </span>

          <h1>
            Tu casa,
            <br />
            diseñada para
            <br />
            el sur de Chile.
          </h1>

          <div className="architecture__small-line" />

          <p>
            Diseñamos espacios sustentables o tradicionales, adaptados al
            clima, el terreno y la forma de habitar de cada persona.
          </p>

          <Link to="/contacto" className="architecture__text-link">
            Conversemos sobre tu proyecto
            <span>→</span>
          </Link>
        </div>

        <div className="architecture__hero-image">
          <img
            src="/images/architecture/hero.jpeg"
            alt="Casa contemporánea en el sur de Chile"
          />
        </div>
      </section>

      {/* QUÉ HACEMOS */}

      <section className="architecture__what">
        <div className="architecture__what-intro">
          <span className="architecture__eyebrow">Qué hacemos</span>

          <h2>
            Arquitectura residencial
            <br />
            sustentable y tradicional,
            <br />
            adaptada al clima, el terreno
            <br />
            y a la forma de habitar
            <br />
            de cada persona.
          </h2>
        </div>

        <div className="architecture__features">
          {features.map((feature) => (
            <article className="architecture__feature" key={feature.title}>
                <span className="architecture__feature-icon">
                    <feature.icon strokeWidth={1.25} />
                </span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ENFOQUE + PROCESO */}

      <section className="architecture__approach">
        <div className="architecture__approach-copy">
          <span className="architecture__eyebrow">
            Nuestro enfoque
          </span>

          <h2>
            Cada proyecto nace del
            <br />
            encuentro entre el lugar
            <br />
            y las personas.
          </h2>

          <p>
            Escuchamos tus ideas, entendemos tus necesidades y diseñamos
            espacios únicos que dialogan con el clima, la luz, el paisaje y
            la forma en que quieres habitar.
          </p>

          <Link
            to="/arquitectura/enfoque"
            className="architecture__text-link"
          >
            Más sobre nuestro enfoque
            <span>→</span>
          </Link>
        </div>

        <div className="architecture__approach-image">
          <img
            src="/images/architecture/approach.jpeg"
            alt="Interior de vivienda integrado al paisaje"
          />
        </div>

        <div className="architecture__process">
          <span className="architecture__eyebrow">
            Cómo trabajamos
          </span>

          <div className="architecture__timeline">
            {process.map((step) => (
              <article
                className="architecture__timeline-item"
                key={step.number}
              >
                <span className="architecture__timeline-dot" />

                <span className="architecture__timeline-number">
                  {step.number}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}

      <section className="architecture__includes">
        <div className="architecture__includes-content">
          <span className="architecture__eyebrow">
            Qué incluye el servicio
          </span>

          <div className="architecture__includes-list">
            {included.map((item, index) => (
              <div className="architecture__include" key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="architecture__includes-image">
          <img
            src="/images/architecture/detail.jpeg"
            alt="Interior de vivienda contemporánea"
          />
        </div>
      </section>

      {/* EDUCACIÓN */}

      <section className="architecture__education">
        <div className="architecture__education-copy">
          <span className="architecture__eyebrow">
            Línea de investigación
          </span>

          <h2>
            Arquitectura
            <br />
            + Educación
          </h2>

          <p>
            Una exploración sobre cómo los espacios educativos pueden
            potenciar el aprendizaje, el bienestar y las relaciones.
          </p>

          <Link
            to="/arquitectura/educacion"
            className="architecture__text-link"
          >
            Explorar investigación
            <span>→</span>
          </Link>
        </div>

        <div className="architecture__education-image">
          <img
            src="/images/architecture/education-sketch.jpeg"
            alt="Estudios y croquis de arquitectura educacional"
          />
        </div>
      </section>

      {/* PROYECTOS */}

      <section className="architecture__projects">
        <div className="architecture__projects-heading">
          <span className="architecture__eyebrow">
            Proyectos relacionados
          </span>

          <Link
            to="/arquitectura/proyectos"
            className="architecture__text-link"
          >
            Ver todos los proyectos
            <span>→</span>
          </Link>
        </div>

        <div className="architecture__projects-grid">
          <ProjectCard
            image="/images/architecture/project-01.jpeg"
            name="Casa Pucón"
            location="Pucón"
            year="2022"
            area="240 m²"
          />

          <ProjectCard
            image="/images/architecture/project-02.jpeg"
            name="Casa Villarrica"
            location="Villarrica"
            year="2021"
            area="180 m²"
          />

          <ProjectCard
            image="/images/architecture/project-03.jpeg"
            name="Casa Caburgua"
            location="Caburgua"
            year="2023"
            area="210 m²"
          />
        </div>
      </section>

      {/* CTA */}

      <section className="architecture__cta">
        <h2>
          ¿Tienes un proyecto
          <br />
          en mente?
        </h2>

        <p>
          Cuéntanos sobre tu terreno, tus necesidades
          <br />
          y cómo imaginas habitarlo.
        </p>

        <Link to="/contacto" className="architecture__cta-button">
          Conversemos
          <span>→</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}

function ProjectCard({ image, name, location, year, area }) {
  return (
    <Link
      to="/arquitectura/proyectos"
      className="architecture__project"
    >
      <div className="architecture__project-image">
        <img src={image} alt={name} />
      </div>

      <div className="architecture__project-info">
        <div>
          <h3>{name}</h3>

          <p>
            Arquitectura · {area} · {year}
          </p>
        </div>

        <span>＋</span>
      </div>

      <span className="architecture__project-location">
        {location}
      </span>
    </Link>
  );
}
