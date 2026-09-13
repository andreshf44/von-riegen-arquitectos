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
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "./Education.css";


export default function Education() {

  const [showSpatialDetails, setShowSpatialDetails] = useState(false);
  const [showWaldorfProposal, setShowWaldorfProposal] = useState(false);

  const [activeSpatialDetail, setActiveSpatialDetail] = useState(0);
  const [activeWaldorfDetail, setActiveWaldorfDetail] = useState(0);


  /* =================================================
     LUNA / TIERRA / SOL
  ================================================= */

  const spatialDetails = [
    {
      number: "01",
      name: "Luna",
      title: "El recorrido como experiencia.",

      description:
        "La circulación deja de ser únicamente un espacio de tránsito. Se transforma en un recorrido donde aparecen pausas, encuentros y nuevas relaciones entre interior y exterior.",

      image: "/images/education/pedro-morales-luna-detail.png",

      image2:
        "/images/education/pedro-morales-luna-detail-02.png",

      image3:
        "/images/education/pedro-morales-luna-detail-03.png",

      keyPoints: [
        "Transiciones graduales",
        "Conexión visual con el exterior",
        "Espacios de encuentro espontáneo",
        "Luz natural durante el recorrido",
      ],

      quote:
        "Caminar también es aprender.",
    },

    {
      number: "02",
      name: "Tierra",
      title: "Un centro para permanecer.",

      description:
        "La naturaleza se incorpora al corazón del recorrido. El espacio central funciona como punto de orientación, permanencia y encuentro para la comunidad educativa.",

      image:
        "/images/education/pedro-morales-tierra-detail.png",

      image2:
        "/images/education/pedro-morales-tierra-detail-02.png",

      image3:
        "/images/education/pedro-morales-tierra-detail-03.png",

      keyPoints: [
        "Naturaleza como centro",
        "Permanencia y encuentro",
        "Orientación dentro del conjunto",
        "Escala cercana y reconocible",
      ],

      quote:
        "Habitar también significa detenerse.",
    },

    {
      number: "03",
      name: "Sol",
      title: "La luz construye el espacio.",

      description:
        "Aberturas, cubiertas y geometrías permiten que la luz cambie durante el día. Las sombras y reflejos pasan a formar parte de la experiencia cotidiana de aprender.",

      image:
        "/images/education/pedro-morales-sol-detail.png",

      image2:
        "/images/education/pedro-morales-sol-detail-02.png",

      image3:
        "/images/education/pedro-morales-sol-detail-03.png",

      keyPoints: [
        "Luz como elemento activo",
        "Cambios durante el día",
        "Sombras y profundidad",
        "Relación interior y exterior",
      ],

      quote:
        "La luz también enseña.",
    },
  ];


  const spatialDetail =
    spatialDetails[activeSpatialDetail];


  const nextSpatialDetail = () => {

    setActiveSpatialDetail((current) =>
      current === spatialDetails.length - 1
        ? 0
        : current + 1
    );

  };


  const previousSpatialDetail = () => {

    setActiveSpatialDetail((current) =>
      current === 0
        ? spatialDetails.length - 1
        : current - 1
    );

  };


  /* =================================================
     WALDORF
  ================================================= */

  const waldorfDetails = [

    {
      number: "01",

      name: "Contexto",

      title:
        "Crecer sin perder la identidad del lugar.",

      description:
        "La propuesta de extensión incorpora dos nuevas salas, una sala multiuso y cafetería, manteniendo una relación cercana con la escala, la materialidad y las formas orgánicas del colegio existente.",

      image:
        "/images/education/waldorf-existing.png",

      image2:
        "/images/education/waldorf-context-sketch.png",

      image3:
        "/images/education/waldorf-sketch.png",

      keyPoints: [
        "Continuidad con el colegio existente",
        "Escala cercana y reconocible",
        "Relación con el paisaje",
        "Formas orgánicas",
      ],

      quote:
        "Crecer sin perder la identidad.",
    },


    {
      number: "02",

      name: "Croquis",

      title:
        "Explorar la forma desde el uso.",

      description:
        "Los primeros croquis estudian cómo articular las nuevas piezas, relacionar los distintos programas y construir una secuencia de espacios conectados.",

      image:
        "/images/education/waldorf-sketch.png",

      image2:
        "/images/education/waldorf-sketch-02.png",

      image3:
        "/images/education/waldorf-context-sketch.png",

      keyPoints: [
        "Exploración volumétrica",
        "Articulación de nuevas piezas",
        "Continuidad espacial",
        "Geometría vinculada al programa",
      ],

      quote:
        "La forma aparece desde la manera de habitar.",
    },


    {
      number: "03",

      name: "Organización",

      title:
        "Organizar alrededor del encuentro.",

      description:
        "La geometría organiza el programa alrededor de un centro compartido, favoreciendo distintas maneras de reunirse, aprender y permanecer.",

      image:
        "/images/education/waldorf-plan-sketch.png",

      image2:
        "/images/education/waldorf-sketch-02.png",

      image3:
        "/images/education/waldorf-sketch.png",

      keyPoints: [
        "Centro como espacio de encuentro",
        "Programa conectado",
        "Circulaciones integradas",
        "Diversidad de escalas",
      ],

      quote:
        "El centro organiza la vida del conjunto.",
    },


    {
      number: "04",

      name: "Propuesta",

      title:
        "Una extensión integrada al paisaje.",

      description:
        "La ampliación busca incorporarse al colegio como una continuidad natural de su lenguaje arquitectónico, ampliando las posibilidades de encuentro, aprendizaje y vida comunitaria.",

      image:
        "/images/education/waldorf-existing.png",

      image2:
        "/images/education/waldorf-sketch.png",

      image3:
        "/images/education/waldorf-plan-sketch.png",

      keyPoints: [
        "Dos nuevas salas",
        "Sala multiuso",
        "Cafetería",
        "Integración con el paisaje",
      ],

      quote:
        "Una arquitectura que acompaña el aprendizaje.",
    },

  ];


  const waldorfDetail =
    waldorfDetails[activeWaldorfDetail];


  const nextWaldorfDetail = () => {

    setActiveWaldorfDetail((current) =>
      current === waldorfDetails.length - 1
        ? 0
        : current + 1
    );

  };


  const previousWaldorfDetail = () => {

    setActiveWaldorfDetail((current) =>
      current === 0
        ? waldorfDetails.length - 1
        : current - 1
    );

  };


  return (

    <main className="education-page">

      <Navbar variant="full" />


      {/* =================================================
          HERO
      ================================================= */}

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

          <h2>
            Línea de investigación
          </h2>

          <p>
            Exploramos cómo el espacio puede potenciar
            el aprendizaje, el bienestar y las relaciones
            en entornos educativos.
          </p>


          <div className="education-hero__note">

            <span>

              Estudios y propuestas conceptuales

              <br />

              <small>
                (no corresponden a obras construidas)
              </small>

            </span>

            <span className="education-info">
              i
            </span>

          </div>

        </div>


        <div className="education-hero__visual">

          <img
            src="/images/education/hero-sketch.png"
            alt="Estudio conceptual de arquitectura educativa"
          />

        </div>

      </section>


      {/* =================================================
          NAVEGACIÓN DE TEMAS
      ================================================= */}

      <nav
        className="education-topics"
        aria-label="Temas de investigación"
      >

        <span className="education-topics__label">
          Explora los temas
        </span>


        <div className="education-topics__grid">

          <a href="#luz-natural">
            <span>01</span>
            <strong>Luz natural</strong>
          </a>

          <a href="#naturaleza">
            <span>02</span>
            <strong>Naturaleza</strong>
          </a>

          <a href="#acustica">
            <span>03</span>
            <strong>Acústica</strong>
          </a>

          <a href="#materialidad">
            <span>04</span>
            <strong>Materialidad</strong>
          </a>

          <a href="#escala">
            <span>05</span>
            <strong>Escala</strong>
          </a>

          <a href="#bienestar">
            <span>06</span>
            <strong>Bienestar</strong>
          </a>

        </div>

      </nav>


      {/* =================================================
          01 — MARCO DE INVESTIGACIÓN
      ================================================= */}

      <section className="education-framework">

        <div className="education-framework__heading">

          <span className="education-eyebrow">
            01 / Marco de investigación
          </span>

          <h2>
            Seis variables para
            <br />
            observar el espacio.
          </h2>

        </div>


        <div className="education-framework__content">

          <p>
            Analizamos los entornos educativos desde distintas
            dimensiones que influyen en la experiencia cotidiana
            de aprender, convivir y habitar.
          </p>

        </div>

      </section>


      {/* =================================================
          PRINCIPIOS
      ================================================= */}

      <section className="education-principles">

        <div className="education-principles__grid">


          <article
            className="education-principle"
            id="luz-natural"
          >

            <Sun strokeWidth={1} />

            <span className="education-principle__number">
              01
            </span>

            <h3>
              Luz natural
            </h3>

            <p>
              La luz acompaña los ritmos del día,
              orienta y genera bienestar.
            </p>

          </article>


          <article
            className="education-principle"
            id="naturaleza"
          >

            <Leaf strokeWidth={1} />

            <span className="education-principle__number">
              02
            </span>

            <h3>
              Naturaleza
            </h3>

            <p>
              El contacto con el paisaje favorece la calma,
              la atención y la curiosidad.
            </p>

          </article>


          <article
            className="education-principle"
            id="acustica"
          >

            <AudioLines strokeWidth={1} />

            <span className="education-principle__number">
              03
            </span>

            <h3>
              Acústica
            </h3>

            <p>
              El sonido influye en la concentración
              y la comunicación.
            </p>

          </article>


          <article
            className="education-principle"
            id="materialidad"
          >

            <Layers strokeWidth={1} />

            <span className="education-principle__number">
              04
            </span>

            <h3>
              Materialidad
            </h3>

            <p>
              Los materiales construyen identidad,
              percepción y experiencia.
            </p>

          </article>


          <article
            className="education-principle"
            id="escala"
          >

            <UserRound strokeWidth={1} />

            <span className="education-principle__number">
              05
            </span>

            <h3>
              Escala
            </h3>

            <p>
              Diseñamos considerando el cuerpo,
              la mirada, la edad y el movimiento.
            </p>

          </article>


          <article
            className="education-principle"
            id="bienestar"
          >

            <Heart strokeWidth={1} />

            <span className="education-principle__number">
              06
            </span>

            <h3>
              Bienestar
            </h3>

            <p>
              El bienestar surge de la relación
              entre todos estos factores.
            </p>

          </article>

        </div>

      </section>


      {/* =================================================
          02 — OBSERVAR ANTES DE DISEÑAR
      ================================================= */}

      <section className="education-observe">

        <div className="education-observe__copy">

          <span className="education-eyebrow">
            02 / Observar antes de diseñar
          </span>

          <h2>
            El espacio también
            <br />
            participa del aprendizaje.
          </h2>

          <p>
            Estudiamos referentes y establecimientos educacionales
            para comprender cómo la luz, el color, las circulaciones,
            la escala y la naturaleza pueden modificar la manera
            en que niñas, niños y comunidades viven sus espacios.
          </p>

        </div>


        <div className="education-observe__gallery">

          <figure>

            <img
              src="/images/education/research-01.png"
              alt="Referente de arquitectura educativa"
            />

            <figcaption>
              Referentes internacionales
            </figcaption>

          </figure>


          <figure>

            <img
              src="/images/education/research-02.png"
              alt="Análisis de luz natural"
            />

            <figcaption>
              Luz · color · ritmo · circulación
            </figcaption>

          </figure>


          <figure>

            <img
              src="/images/education/research-03.png"
              alt="Espacio educativo"
            />

            <figcaption>
              Espacios que inspiran
            </figcaption>

          </figure>

        </div>

      </section>


      {/* =================================================
          03 — PEDRO MORALES
      ================================================= */}

      <section className="education-case">

        <div className="education-case__header">

          <div className="education-case__title">

            <span className="education-eyebrow">
              03 / Caso de estudio
            </span>

            <h2>
              Escuela Básica
              <br />
              Pedro Morales
            </h2>

            <span className="education-case__location">
              San Fernando · Chile
            </span>

            <p>
              Una propuesta construida a partir de tres
              experiencias espaciales conectadas:
              Luna, Tierra y Sol.
            </p>

          </div>


          <div className="education-case__plan">

            <img
              src="/images/education/pedro-morales-plan.png"
              alt="Planta propuesta Escuela Pedro Morales"
            />

          </div>


          <div className="education-case__story">

            <span>
              Relato
            </span>

            <h3>
              Mirar al cielo.
            </h3>

            <p>
              La propuesta organiza la intervención como
              una secuencia de experiencias que transforma
              los recorridos existentes en espacios de
              encuentro, exploración y aprendizaje.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          04 — LUNA / TIERRA / SOL
      ================================================= */}

      <section className="education-spatial">

        <div className="education-spatial__intro">

          <span className="education-eyebrow">
            04 / Estrategia espacial
          </span>

          <h2>
            Tres espacios,
            <br />
            tres experiencias.
          </h2>

          <button
            type="button"
            onClick={() =>
              setShowSpatialDetails(!showSpatialDetails)
            }
            aria-expanded={showSpatialDetails}
          >

            Ver más detalles

            <ArrowRight
              strokeWidth={1}
              className={
                showSpatialDetails
                  ? "education-arrow--open"
                  : ""
              }
            />

          </button>

        </div>


        {/* LUNA */}

        <article className="education-spatial-card">

          <div className="education-spatial-card__top">

            <span className="education-spatial-card__number">
              01
            </span>

            <div>

              <span className="education-spatial-card__eyebrow">
                Luna
              </span>

              <h3>
                Recorrer y encontrarse
              </h3>

            </div>

          </div>


          <div className="education-spatial-card__image">

            <img
              src="/images/education/pedro-morales-luna.png"
              alt="Concepto Luna"
            />

          </div>


          <p>
            La circulación se transforma en una secuencia
            de encuentro, transición y descubrimiento.
          </p>

        </article>


        {/* TIERRA */}

        <article className="education-spatial-card">

          <div className="education-spatial-card__top">

            <span className="education-spatial-card__number">
              02
            </span>

            <div>

              <span className="education-spatial-card__eyebrow">
                Tierra
              </span>

              <h3>
                Permanecer y conectar
              </h3>

            </div>

          </div>


          <div className="education-spatial-card__image">

            <img
              src="/images/education/arquitectura-educacion-croquis-tierra.png"
              alt="Croquis Tierra"
            />

          </div>


          <p>
            Un nodo central vincula recorridos y espacios
            de permanencia, integrando la naturaleza.
          </p>

        </article>


        {/* SOL */}

        <article className="education-spatial-card">

          <div className="education-spatial-card__top">

            <span className="education-spatial-card__number">
              03
            </span>

            <div>

              <span className="education-spatial-card__eyebrow">
                Sol
              </span>

              <h3>
                Aprender desde la luz
              </h3>

            </div>

          </div>


          <div className="education-spatial-card__image">

            <img
              src="/images/education/arquitectura-educacion-croquis-sol-original-hq.png"
              alt="Croquis Sol"
            />

          </div>


          <p>
            La luz se convierte en parte activa del espacio,
            generando una atmósfera cambiante.
          </p>

        </article>

      </section>


      {/* =================================================
          DETALLE LUNA / TIERRA / SOL
      ================================================= */}

      <div
        className={`education-spatial-detail ${
          showSpatialDetails
            ? "education-spatial-detail--open"
            : ""
        }`}
      >

        <div className="education-spatial-detail__inner">


          <div className="education-expanded-label">

            <ArrowRight strokeWidth={0.8} />

            <span>
              Vista desplegada — Ver más detalles
            </span>

          </div>


          <div className="education-spatial-detail__layout">


            <aside className="education-spatial-detail__nav">

              {spatialDetails.map((item, index) => (

                <button
                  key={item.name}
                  type="button"
                  className={
                    activeSpatialDetail === index
                      ? "education-spatial-detail__nav-item education-spatial-detail__nav-item--active"
                      : "education-spatial-detail__nav-item"
                  }
                  onClick={() =>
                    setActiveSpatialDetail(index)
                  }
                >

                  <span>
                    {item.number}
                  </span>

                  <strong>
                    {item.name}
                  </strong>

                </button>

              ))}

            </aside>


            <article className="education-spatial-detail__content">


              <div className="education-spatial-detail__header">

                <span className="education-eyebrow">
                  {spatialDetail.number} / {spatialDetail.name}
                </span>

                <h3>
                  {spatialDetail.title}
                </h3>

                <p>
                  {spatialDetail.description}
                </p>

              </div>


              <div className="education-spatial-detail__body">


                <figure className="education-spatial-detail__main-image">

                  <img
                    src={spatialDetail.image}
                    alt={`Estrategia espacial ${spatialDetail.name}`}
                  />

                </figure>


                <div className="education-spatial-detail__secondary-images">

                  <img
                    src={spatialDetail.image2}
                    alt={`${spatialDetail.name} — estudio 01`}
                  />

                  <img
                    src={spatialDetail.image3}
                    alt={`${spatialDetail.name} — estudio 02`}
                  />

                </div>


                <aside className="education-spatial-detail__aside">

                  <span className="education-spatial-detail__aside-title">
                    Elementos clave
                  </span>


                  <ul>

                    {spatialDetail.keyPoints.map((point) => (

                      <li key={point}>
                        {point}
                      </li>

                    ))}

                  </ul>


                  <blockquote>
                    “{spatialDetail.quote}”
                  </blockquote>


                  <div className="education-spatial-detail__navigation">

                    <button
                      type="button"
                      onClick={previousSpatialDetail}
                      aria-label="Experiencia anterior"
                    >
                      ←
                    </button>

                    <span>
                      {activeSpatialDetail + 1} / {spatialDetails.length}
                    </span>

                    <button
                      type="button"
                      onClick={nextSpatialDetail}
                      aria-label="Experiencia siguiente"
                    >
                      →
                    </button>

                  </div>

                </aside>

              </div>

            </article>

          </div>


          <button
            type="button"
            className="education-detail-close"
            onClick={() =>
              setShowSpatialDetails(false)
            }
          >

            Cerrar detalles

            <ArrowRight strokeWidth={1} />

          </button>

        </div>

      </div>


      {/* =================================================
          05 — ANTES / PROPUESTA
      ================================================= */}

      <section className="education-transformation">

        <div className="education-transformation__title">

          <span className="education-eyebrow">
            05 / Del análisis al proyecto
          </span>

          <h2>
            Transformar la circulación
            <br />
            en experiencia.
          </h2>

        </div>


        <article className="education-transformation__item">

          <span>
            Antes
          </span>

          <div className="education-transformation__image">

            <img
              src="/images/education/pedro-morales-before.png"
              alt="Situación existente"
            />

          </div>

          <p>
            Patios y pasillos entendidos principalmente
            como lugares de tránsito, con pocas oportunidades
            de permanencia y encuentro.
          </p>

        </article>


        <div className="education-transformation__arrow">
          <ArrowRight strokeWidth={0.8} />
        </div>


        <article className="education-transformation__item">

          <span>
            Estrategia de diseño
          </span>

          <div className="education-transformation__image">

            <img
              src="/images/education/arquitectura-educacion-02-croquis-pasillo.png"
              alt="Propuesta de circulación"
            />

          </div>

          <p>
            La geometría, la madera y la luz convierten
            los recorridos en espacios para encontrarse,
            observar, jugar y aprender.
          </p>

        </article>

      </section>


      {/* =================================================
          06 — WALDORF
      ================================================= */}

      <section className="education-waldorf">

        <div className="education-waldorf__copy">

          <span className="education-eyebrow">
            06 / Aplicación
          </span>

          <h2>
            Colegio Waldorf Pucón
          </h2>

          <span className="education-waldorf__subtitle">
            Proyecto de extensión
          </span>

          <p>
            Programa de dos salas nuevas,
            sala multiuso y cafetería.
          </p>

          <button
            type="button"
            onClick={() =>
              setShowWaldorfProposal(!showWaldorfProposal)
            }
            aria-expanded={showWaldorfProposal}
          >

            Ver propuesta

            <ArrowRight
              strokeWidth={1}
              className={
                showWaldorfProposal
                  ? "education-arrow--open"
                  : ""
              }
            />

          </button>

        </div>


        <div className="education-waldorf__sketch">

          <img
            src="/images/education/waldorf-sketch.png"
            alt="Croquis proyecto Colegio Waldorf"
          />

        </div>


        <div className="education-waldorf__image">

          <img
            src="/images/education/waldorf-existing.png"
            alt="Colegio Waldorf Pucón"
          />

        </div>

      </section>


      {/* =================================================
          WALDORF EXPANDIDO
      ================================================= */}

      <div
        className={`education-waldorf-detail ${
          showWaldorfProposal
            ? "education-waldorf-detail--open"
            : ""
        }`}
      >

        <div className="education-waldorf-detail__inner">


          <div className="education-expanded-label">

            <ArrowRight strokeWidth={0.8} />

            <span>
              Vista desplegada — Ver propuesta
            </span>

          </div>


          <div className="education-waldorf-detail__layout">


            {/* NAVEGACIÓN */}

            <aside className="education-waldorf-detail__nav">

              {waldorfDetails.map((item, index) => (

                <button
                  key={item.name}
                  type="button"
                  className={
                    activeWaldorfDetail === index
                      ? "education-waldorf-detail__nav-item education-waldorf-detail__nav-item--active"
                      : "education-waldorf-detail__nav-item"
                  }
                  onClick={() =>
                    setActiveWaldorfDetail(index)
                  }
                >

                  <span>
                    {item.number}
                  </span>

                  <strong>
                    {item.name}
                  </strong>

                </button>

              ))}

            </aside>


            {/* CONTENIDO */}

            <article className="education-waldorf-detail__content">


              <div className="education-waldorf-detail__header">

                <span className="education-eyebrow">
                  {waldorfDetail.number} / {waldorfDetail.name}
                </span>

                <h3>
                  {waldorfDetail.title}
                </h3>

                <p>
                  {waldorfDetail.description}
                </p>

              </div>


              <div className="education-waldorf-detail__body">


                {/* IMAGEN PRINCIPAL */}

                <figure className="education-waldorf-detail__main-image">

                  <img
                    src={waldorfDetail.image}
                    alt={`Colegio Waldorf — ${waldorfDetail.name}`}
                  />

                </figure>


                {/* IMÁGENES SECUNDARIAS */}

                <div className="education-waldorf-detail__secondary-images">

                  <img
                    src={waldorfDetail.image2}
                    alt={`${waldorfDetail.name} — estudio 01`}
                  />

                  <img
                    src={waldorfDetail.image3}
                    alt={`${waldorfDetail.name} — estudio 02`}
                  />

                </div>


                {/* INFO */}

                <aside className="education-waldorf-detail__aside">

                  <span className="education-waldorf-detail__aside-title">
                    Elementos clave
                  </span>


                  <ul>

                    {waldorfDetail.keyPoints.map((point) => (

                      <li key={point}>
                        {point}
                      </li>

                    ))}

                  </ul>


                  <blockquote>
                    “{waldorfDetail.quote}”
                  </blockquote>


                  <div className="education-waldorf-detail__navigation">

                    <button
                      type="button"
                      onClick={previousWaldorfDetail}
                      aria-label="Sección anterior"
                    >
                      ←
                    </button>

                    <span>
                      {activeWaldorfDetail + 1} / {waldorfDetails.length}
                    </span>

                    <button
                      type="button"
                      onClick={nextWaldorfDetail}
                      aria-label="Sección siguiente"
                    >
                      →
                    </button>

                  </div>

                </aside>

              </div>

            </article>

          </div>


          <button
            type="button"
            className="education-detail-close"
            onClick={() =>
              setShowWaldorfProposal(false)
            }
          >

            Cerrar propuesta

            <ArrowRight strokeWidth={1} />

          </button>

        </div>

      </div>


      {/* =================================================
          CTA
      ================================================= */}

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

        <Link
          to="/contacto"
          className="education-cta__button"
        >

          Conversemos

          <ArrowRight strokeWidth={1.1} />

        </Link>

      </section>


      <Footer />

    </main>

  );

}