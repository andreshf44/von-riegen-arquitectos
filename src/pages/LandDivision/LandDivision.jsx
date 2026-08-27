import { useState } from "react";
import { Link } from "react-router";

import {
  ArrowRight,
  ArrowUp,
  Trees,
  FileCheck2,
  ChartNoAxesColumnIncreasing,
  Mountain,
  MapPin,
  Map,
  ShieldCheck,
  House,
  Leaf,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "./LandDivision.css";


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: Trees,
    title: "Aprovecha el valor de tu terreno",
  },
  {
    icon: FileCheck2,
    title: "Cumplimiento normativo",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Más oportunidades de desarrollo",
  },
];


/* =========================================================
   IMPLICATIONS
========================================================= */

const implications = [
  {
    icon: Mountain,
    title: "Análisis del terreno",
    description:
      "Evaluamos la topografía, accesos, normativa y condiciones del predio.",
  },

  {
    icon: MapPin,
    title: "Diseño de subdivisión",
    description:
      "Proponemos alternativas de división que optimizan el terreno y su valor.",
  },

  {
    icon: Map,
    title: "Planos y estudios",
    description:
      "Elaboramos los planos y estudios requeridos por la normativa.",
  },

  {
    icon: FileCheck2,
    title: "Tramitación",
    description:
      "Gestionamos los permisos en las instituciones competentes.",
  },

  {
    icon: ShieldCheck,
    title: "Resultado",
    description:
      "Obtienes tu subdivisión aprobada y lista para escriturar o vender.",
  },
];


/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Asesoría inicial",
    description:
      "Conocemos tu terreno y tus objetivos.",
  },

  {
    number: "02",
    title: "Estudio y diagnóstico",
    description:
      "Analizamos la normativa, restricciones y factibilidad.",
  },

  {
    number: "03",
    title: "Propuesta de división",
    description:
      "Diseñamos la mejor opción de subdivisión para ti.",
  },

  {
    number: "04",
    title: "Planos y tramitación",
    description:
      "Elaboramos planos y gestionamos permisos ante los organismos correspondientes.",
  },

  {
    number: "05",
    title: "Aprobación y entrega",
    description:
      "Obtienes la subdivisión aprobada y lista para su inscripción.",
  },
];


/* =========================================================
   DIVISION TYPES
========================================================= */

const divisionTypes = [
  {
    id: "urban-lots",

    number: "01",

    icon: House,

    title: "División en lotes urbanos",

    description:
      "Subdivisiones dentro de áreas urbanas o urbanizables según el plan regulador.",

    image:
      "/images/land-division/urban-lots.png",

    expandedTitle:
      "Dividir dentro de la ciudad",

    expandedDescription:
      "Estudiamos las condiciones normativas y territoriales del predio para definir una subdivisión que aproveche su potencial, manteniendo coherencia con el entorno urbano y con las exigencias del plan regulador.",

    considerationsTitle:
      "Qué consideramos",

    considerations: [
      "Plan regulador y normativa vigente",
      "Superficie y dimensiones del predio",
      "Accesos y conectividad",
      "Factibilidad de subdivisión",
      "Condiciones particulares del terreno",
    ],
  },

  {
    id: "rural-lots",

    number: "02",

    icon: Trees,

    title: "División en lotes rurales",

    description:
      "Subdivisiones en terrenos rurales conforme a la legislación vigente.",

    image:
      "/images/land-division/rural-lots.png",

    expandedTitle:
      "Subdividir respetando el territorio",

    expandedDescription:
      "Analizamos las características del terreno rural y la normativa aplicable para desarrollar una subdivisión responsable, clara y compatible con las condiciones propias del lugar.",

    considerationsTitle:
      "Qué consideramos",

    considerations: [
      "Normativa aplicable al suelo rural",
      "Superficie mínima permitida",
      "Accesibilidad a los nuevos lotes",
      "Topografía y condiciones naturales",
      "Configuración y deslindes existentes",
    ],
  },

  {
    id: "land-merger",

    number: "03",

    icon: Leaf,

    title: "Fusión de predios",

    description:
      "Unimos terrenos para cumplir con requisitos normativos o de proyecto.",

    image:
      "/images/land-division/land-merger.png",

    expandedTitle:
      "Unificar para abrir nuevas posibilidades",

    expandedDescription:
      "La fusión permite reunir dos o más propiedades en una única unidad predial, facilitando proyectos que requieren una superficie mayor o una nueva configuración territorial.",

    considerationsTitle:
      "Qué consideramos",

    considerations: [
      "Compatibilidad entre los predios",
      "Títulos y antecedentes existentes",
      "Deslindes y superficies",
      "Nueva configuración predial",
      "Tramitación e inscripción",
    ],
  },

  {
    id: "developments",

    number: "04",

    icon: MapPin,

    title: "Loteos y proyectos",

    description:
      "Desarrollamos proyectos de loteo desde el diseño hasta su aprobación.",

    image:
      "/images/land-division/development.png",

    expandedTitle:
      "Diseñar el territorio como un conjunto",

    expandedDescription:
      "Desarrollamos propuestas integrales de loteo considerando no solo la división del suelo, sino también accesos, relaciones entre lotes, áreas comunes y la forma en que el proyecto se integra al territorio.",

    considerationsTitle:
      "Qué consideramos",

    considerations: [
      "Estrategia general de loteo",
      "Accesos y circulaciones",
      "Distribución y proporción de lotes",
      "Áreas comunes y relaciones espaciales",
      "Desarrollo del expediente técnico",
    ],
  },
];


/* =========================================================
   COMPONENT
========================================================= */

export default function LandDivision() {
  const [activeDivision, setActiveDivision] =
    useState(null);


  const handleDivisionToggle = (id) => {
    setActiveDivision((current) =>
      current === id ? null : id
    );
  };


  return (
    <main className="land-division-page">

      <Navbar variant="full" />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="land-division-hero">

        <div className="land-division-hero__copy">

          <span className="land-division-eyebrow">
            División de predios
          </span>

          <div className="land-division-small-line" />


          <h1>
            División
            <br />
            de predios
          </h1>


          <div className="land-division-small-line" />


          <p className="land-division-hero__description">
            Optimizamos el potencial de tu terreno
            mediante subdivisiones responsables y
            normativas, maximizando su valor actual
            y futuro.
          </p>


          <div className="land-division-benefits">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="land-division-benefit"
                >
                  <Icon strokeWidth={1} />

                  <span>
                    {benefit.title}
                  </span>
                </article>
              );
            })}

          </div>

        </div>


        <div className="land-division-hero__visual">

          <img
            src="/images/land-division/hero.png"
            alt="Terreno subdividido en el sur de Chile"
          />


          <div className="land-division-hero__cta">

            <p>
              Transformamos tu terreno
              <br />
              en nuevas oportunidades.
            </p>

            <div className="land-division-hero__cta-line" />


            <Link to="/contacto">

              <span>
                Asesoría inicial sin costo
              </span>

              <ArrowRight strokeWidth={1.1} />

            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          QUÉ IMPLICA
      ================================================= */}

      <section className="land-division-implications">

        <div className="land-division-implications__copy">

          <span className="land-division-eyebrow">
            ¿Qué implica dividir un predio?
          </span>

          <div className="land-division-small-line" />


          <h2>
            Más posibilidades,
            <br />
            siempre en regla.
          </h2>


          <p>
            Realizamos estudios, planos y gestiones
            necesarias para subdividir tu propiedad
            de acuerdo a la normativa vigente,
            asegurando un proceso claro, seguro
            y eficiente.
          </p>

        </div>


        <div className="land-division-implications__grid">

          {implications.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="land-division-implication"
              >

                <Icon strokeWidth={1} />


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="land-division-process">

        <div className="land-division-section-heading">

          <span>
            Nuestro proceso
          </span>

          <div className="land-division-small-line" />

        </div>


        <div className="land-division-process__grid">

          {process.map((step, index) => (
            <article
              key={step.number}
              className="land-division-process__step"
            >

              <span className="land-division-process__number">
                {step.number}
              </span>


              <h3>
                {step.title}
              </h3>


              <p>
                {step.description}
              </p>


              {index < process.length - 1 && (
                <ArrowRight
                  className="land-division-process__arrow"
                  strokeWidth={1}
                />
              )}

            </article>
          ))}

        </div>

      </section>


      {/* =================================================
          DIVISION TYPES
      ================================================= */}

      <section className="land-division-types">

        <div className="land-division-section-heading">

          <span>
            ¿Qué tipos de divisiones realizamos?
          </span>

          <div className="land-division-small-line" />

        </div>


        {/* ===============================================
            CARDS
        =============================================== */}

        <div className="land-division-types__grid">

          {divisionTypes.map((item) => {
            const Icon = item.icon;

            const isOpen =
              activeDivision === item.id;


            return (
              <article
                key={item.id}
                className={
                  isOpen
                    ? "land-division-card land-division-card--active"
                    : "land-division-card"
                }
              >

                <div className="land-division-card__image">

                  <div className="land-division-card__image-wrapper">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  </div>


                  <div className="land-division-card__icon">

                    <Icon strokeWidth={1} />

                  </div>

                </div>


                <div className="land-division-card__content">

                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.description}
                  </p>


                  <button
                    type="button"
                    className="land-division-card__more"
                    onClick={() =>
                      handleDivisionToggle(item.id)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`division-detail-${item.id}`}
                  >

                    <span>
                      {isOpen ? "Menos" : "Ver más"}
                    </span>


                    {isOpen ? (
                      <ArrowUp strokeWidth={1.1} />
                    ) : (
                      <ArrowRight strokeWidth={1.1} />
                    )}

                  </button>

                </div>

              </article>
            );
          })}

        </div>


        {/* ===============================================
            EXPANDED INFORMATION
        =============================================== */}

        {divisionTypes.map((item) => {

          const isOpen =
            activeDivision === item.id;


          if (!isOpen) {
            return null;
          }


          return (
            <div
              key={`detail-${item.id}`}
              id={`division-detail-${item.id}`}
              className="land-division-detail"
            >

              {/* NUMBER + TITLE */}

              <div className="land-division-detail__title">

                <span className="land-division-detail__number">
                  {item.number}
                </span>


                <h3>
                  {item.expandedTitle}
                </h3>

              </div>


              {/* DESCRIPTION */}

              <div className="land-division-detail__description">

                <p>
                  {item.expandedDescription}
                </p>


                <Link
                  to={`/contacto?servicio=${item.id}`}
                  className="land-division-detail__contact"
                >
                  Consultar por este servicio

                  <ArrowRight strokeWidth={1.1} />
                </Link>

              </div>


              {/* CONSIDERATIONS */}

              <div className="land-division-detail__considerations">

                <span>
                  {item.considerationsTitle}
                </span>


                <ul>
                  {item.considerations.map(
                    (consideration) => (
                      <li key={consideration}>
                        {consideration}
                      </li>
                    )
                  )}
                </ul>

              </div>


              {/* CLOSE */}

              <button
                type="button"
                className="land-division-detail__close"
                onClick={() =>
                  setActiveDivision(null)
                }
              >
                <span>
                  Menos
                </span>

                <ArrowUp strokeWidth={1.1} />
              </button>

            </div>
          );
        })}

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="land-division-cta">

        <div className="land-division-cta__illustration">

          <Trees strokeWidth={0.7} />

        </div>


        <h2>
          Cada terreno tiene
          <br />
          un potencial único.
        </h2>


        <div className="land-division-cta__divider" />


        <p>
          Te ayudamos a descubrirlo y
          <br />
          convertirlo en nuevas oportunidades.
        </p>


        <Link
          to="/contacto"
          className="land-division-cta__button"
        >
          Agenda una asesoría

          <ArrowRight strokeWidth={1.1} />
        </Link>

      </section>


      <Footer />

    </main>
  );
}