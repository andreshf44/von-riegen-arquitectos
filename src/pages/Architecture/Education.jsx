import { useState } from "react";
import { Link } from "react-router";
import {
  Sun,
  Leaf,
  AudioLines,
  Layers,
  UserRound,
  Heart,
  ArrowRight,
  ArrowUp,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Education.css";

const topics = [
  {
    number: "01",
    slug: "luz-natural",
    title: "Luz natural",
    icon: Sun,
    description:
      "Diseñamos espacios que aprovechan la luz del día para mejorar la concentración, el estado de ánimo y el rendimiento.",
    keyIdea:
      "La luz regula ritmos, orienta el tiempo y genera bienestar.",
    sketch: "/images/education/light-sketch.png",
    image: "/images/education/light.png",

    detailTitle: "Luz natural y aprendizaje",
    detail:
      "La calidad de la luz natural influye directamente en cómo percibimos y habitamos un espacio educativo. Consideramos la orientación, la profundidad de las aulas, las aperturas y el control del deslumbramiento para crear ambientes luminosos, confortables y capaces de acompañar los distintos momentos del día.",

    factors: [
      "Orientación solar",
      "Control del deslumbramiento",
      "Profundidad del aula",
      "Relación interior–exterior",
      "Variación de la luz durante el día",
    ],
  },

  {
    number: "02",
    slug: "naturaleza",
    title: "Naturaleza",
    icon: Leaf,
    description:
      "Integramos el paisaje, la vegetación y los elementos naturales para fomentar la calma, la curiosidad y el vínculo con el entorno.",
    keyIdea:
      "La naturaleza mejora la atención y reduce el estrés.",
    sketch: "/images/education/nature-sketch.png",
    image: "/images/education/nature.png",

    detailTitle: "Naturaleza y aprendizaje",
    detail:
      "La presencia de vegetación, vistas al exterior y espacios de transición permite que el entorno natural forme parte de la experiencia educativa. Buscamos que la arquitectura facilite momentos de observación, exploración, descanso y contacto cotidiano con el paisaje.",

    factors: [
      "Vegetación integrada",
      "Vistas al paisaje",
      "Patios y espacios exteriores",
      "Contacto cotidiano con la naturaleza",
      "Transiciones interior–exterior",
    ],
  },

  {
    number: "03",
    slug: "acustica",
    title: "Acústica",
    icon: AudioLines,
    description:
      "Proponemos soluciones que favorecen la comprensión del habla, reducen el ruido y crean ambientes adecuados para aprender.",
    keyIdea:
      "El sonido influye directamente en la atención y la comunicación.",
    sketch: "/images/education/acoustics-sketch.png",
    image: "/images/education/acoustics.png",

    detailTitle: "Acústica y concentración",
    detail:
      "Un buen ambiente acústico permite escuchar, conversar y concentrarse sin esfuerzo. La distribución de los espacios, los materiales y la absorción sonora pueden reducir interferencias y favorecer tanto el trabajo individual como las actividades grupales.",

    factors: [
      "Absorción sonora",
      "Control de reverberación",
      "Separación de actividades",
      "Comprensión del habla",
      "Confort acústico",
    ],
  },

  {
    number: "04",
    slug: "materialidad",
    title: "Materialidad",
    icon: Layers,
    description:
      "Seleccionamos materiales nobles, saludables y duraderos que aportan calidez, identidad y bajo impacto ambiental.",
    keyIdea:
      "Los materiales comunican valores y construyen bienestar.",
    sketch: "/images/education/material-sketch.png",
    image: "/images/education/material.png",

    detailTitle: "Materialidad y experiencia",
    detail:
      "Los materiales definen cómo se percibe y se vive un espacio. Buscamos superficies cálidas, resistentes y honestas, capaces de acompañar el uso cotidiano y aportar una experiencia sensorial coherente con el aprendizaje y el bienestar.",

    factors: [
      "Materiales naturales",
      "Durabilidad",
      "Bajo impacto",
      "Calidez táctil y visual",
      "Identidad del espacio",
    ],
  },

  {
    number: "05",
    slug: "escala",
    title: "Escala",
    icon: UserRound,
    description:
      "Diseñamos desde la escala humana, considerando las dimensiones del cuerpo, la mirada y el movimiento.",
    keyIdea:
      "La escala adecuada genera pertenencia y seguridad.",
    sketch: "/images/education/scale-sketch.png",
    image: "/images/education/scale.png",

    detailTitle: "Escala humana",
    detail:
      "La arquitectura educativa debe responder a las personas que la habitan. Alturas, recorridos, mobiliario y proporciones se diseñan considerando distintas edades y formas de usar el espacio, favoreciendo autonomía, orientación y sensación de pertenencia.",

    factors: [
      "Proporción",
      "Alturas y visuales",
      "Movimiento",
      "Mobiliario",
      "Autonomía",
    ],
  },

  {
    number: "06",
    slug: "bienestar",
    title: "Bienestar",
    icon: Heart,
    description:
      "La suma de todos estos factores construye espacios que cuidan a las personas y promueven comunidades más sanas.",
    keyIdea:
      "El bienestar es el objetivo último de la arquitectura.",
    sketch: "/images/education/wellbeing-sketch.png",
    image: "/images/education/wellbeing.png",

    detailTitle: "Espacios que cuidan",
    detail:
      "El bienestar surge de la combinación entre luz, naturaleza, sonido, materialidad y escala. Más que diseñar objetos aislados, buscamos construir ambientes capaces de acompañar las necesidades físicas, emocionales y sociales de quienes los utilizan.",

    factors: [
      "Confort",
      "Seguridad",
      "Pertenencia",
      "Regulación ambiental",
      "Relaciones y comunidad",
    ],
  },
];

export default function Education() {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleTopic = (slug) => {
    setOpenTopic((current) => (current === slug ? null : slug));
  };

  return (
    <main className="education-page">
      <Navbar variant="full" />

      {/* HERO */}

      <section className="education-hero">
        <div className="education-hero__copy">
          <span className="education-eyebrow">
            Arquitectura / Línea de investigación
          </span>

          <h1>
            Arquitectura
            <br />
            + Educación
          </h1>

          <div className="education-small-line" />

          <h2>Línea de investigación</h2>

          <p>
            Exploramos cómo el espacio puede potenciar el aprendizaje,
            el bienestar y las relaciones en entornos educativos.
          </p>

          <div className="education-hero__note">
            <span>
              Estudios y propuestas conceptuales
              <br />
              <small>(no corresponden a obras construidas)</small>
            </span>

            <span className="education-info">i</span>
          </div>
        </div>

        <div className="education-hero__visual">
          <img
            src="/images/education/hero-sketch.png"
            alt="Estudio conceptual de arquitectura educativa"
          />
        </div>
      </section>

      {/* TOPICS NAV */}

      <nav className="education-topics" aria-label="Temas de investigación">
        <span className="education-topics__label">
          Explora los temas
        </span>

        <div className="education-topics__grid">
          {topics.map((topic) => (
            <a
              href={`#${topic.slug}`}
              key={topic.slug}
              className="education-topic-link"
            >
              <span>{topic.number}</span>
              <strong>{topic.title}</strong>
            </a>
          ))}
        </div>
      </nav>

      {/* TOPIC SECTIONS */}

      <section className="education-research">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const isOpen = openTopic === topic.slug;

          return (
            <article
              className={`education-research__item ${
                isOpen ? "education-research__item--open" : ""
              }`}
              id={topic.slug}
              key={topic.slug}
            >
              <div className="education-research__row">
                <div className="education-research__number">
                  {topic.number}
                </div>

                <div className="education-research__copy">
                  <h2>{topic.title}</h2>

                  <p>{topic.description}</p>
                </div>

                <div className="education-research__sketch">
                  <img src={topic.sketch} alt="" />
                </div>

                <div className="education-research__image">
                  <img src={topic.image} alt={topic.title} />
                </div>

                <div className="education-research__idea">
                  <Icon strokeWidth={1.1} />

                  <span>Idea clave</span>

                  <p>{topic.keyIdea}</p>

                  <button
                    type="button"
                    className="education-more"
                    onClick={() => toggleTopic(topic.slug)}
                    aria-expanded={isOpen}
                    aria-controls={`detail-${topic.slug}`}
                  >
                    {isOpen ? "Menos" : "Ver más"}

                    {isOpen ? (
                      <ArrowUp strokeWidth={1.1} />
                    ) : (
                      <ArrowRight strokeWidth={1.1} />
                    )}
                  </button>
                </div>
              </div>

              <div
                id={`detail-${topic.slug}`}
                className={`education-research__detail ${
                  isOpen ? "education-research__detail--open" : ""
                }`}
              >
                <div className="education-research__detail-inner">
                  <div className="education-research__detail-title">
                    <span>{topic.number}</span>

                    <h3>{topic.detailTitle}</h3>
                  </div>

                  <p className="education-research__detail-copy">
                    {topic.detail}
                  </p>

                  <div className="education-research__detail-factors">
                    <span>Qué observamos</span>

                    <ul>
                      {topic.factors.map((factor) => (
                        <li key={factor}>{factor}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="education-research__detail-close"
                    onClick={() => toggleTopic(topic.slug)}
                  >
                    Menos
                    <ArrowUp strokeWidth={1.1} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* CTA */}

      <section className="education-cta">
        <h2>
          Investigamos para diseñar
          <br />
          mejores espacios educativos.
        </h2>

        <p>
          Si compartes nuestra visión o tienes un proyecto
          <br />
          en mente, conversemos.
        </p>

        <Link to="/contacto" className="education-cta__button">
          Conversemos
          <ArrowRight strokeWidth={1.1} />
        </Link>
      </section>

      <Footer />
    </main>
  );
}