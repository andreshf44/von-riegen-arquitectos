import { Link } from "react-router";

import {
    ArrowRight,
    ClipboardCheck,
    House,
    ShieldCheck,
    ScanLine,
    FileText,
    Landmark,
    BadgeCheck,
    Ruler,
    Leaf,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import "./Regularization.css";


const benefits = [
  {
    icon: ClipboardCheck,
    title: "Cumplimiento normativo",
  },
  {
    icon: House,
    title: "Valoriza tu propiedad",
  },
  {
    icon: ShieldCheck,
    title: "Tranquilidad y seguridad",
  },
];


const services = [
  {
    icon: ScanLine,
    title: "Diagnóstico inicial",
    description:
      "Revisamos tu situación actual y los antecedentes disponibles para definir el camino a seguir.",
  },

  {
    icon: Ruler,
    title: "Levantamiento y planos",
    description:
      "Realizamos el levantamiento en terreno y elaboramos planos actualizados según normativa.",
  },

  {
    icon: FileText,
    title: "Tramitación municipal",
    description:
      "Gestionamos permisos, informes, recepciones y todo lo necesario ante la Dirección de Obras.",
  },

  {
    icon: BadgeCheck,
    title: "Recepción final",
    description:
      "Obtenemos la recepción final o resolución que acredita la regularización de tu propiedad.",
  },
];


const process = [
  {
    number: "01",
    title: "Asesoría inicial",
    description:
      "Conocemos tu caso y evaluamos los antecedentes disponibles.",
  },

  {
    number: "02",
    title: "Diagnóstico",
    description:
      "Identificamos las diferencias y definimos el plan de acción.",
  },

  {
    number: "03",
    title: "Levantamiento y documentación",
    description:
      "Realizamos mediciones y preparamos los planos y documentos necesarios.",
  },

  {
    number: "04",
    title: "Tramitación",
    description:
      "Ingresamos y hacemos seguimiento de los trámites ante la municipalidad.",
  },

  {
    number: "05",
    title: "Recepción",
    description:
      "Obtienes tu propiedad regularizada, lista para cualquier gestión.",
  },
];


const cases = [
  {
    title: "Propiedades con ampliaciones no regularizadas",
    description:
      "Ponemos al día lo construido para evitar futuros problemas.",
    image:
      "/images/regularization/extensions.png",
  },

  {
    title: "Viviendas sin recepción municipal",
    description:
      "Gestionamos la recepción final de tu vivienda.",
    image:
      "/images/regularization/no-reception.png",
  },

  {
    title: "Regularización para venta o financiamiento",
    description:
      "Asegura que tu propiedad cumpla con los requisitos legales.",
    image:
      "/images/regularization/sale.png",
  },

  {
    title: "Actualización de planos y antecedentes",
    description:
      "Actualizamos planos antiguos y documentación técnica.",
    image:
      "/images/regularization/plans.png",
  },
];


export default function Regularization() {
  return (
    <main className="regularization-page">

      <Navbar variant="full" />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="regularization-hero">

        <div className="regularization-hero__copy">

          <span className="regularization-eyebrow">
            Regularización
          </span>

          <h1>
            Regularización
            <br />
            de propiedades
          </h1>

          <div className="regularization-small-line" />

          <p className="regularization-hero__description">
            Te ayudamos a poner tu propiedad al día,
            asegurando que cumpla con la normativa vigente
            y pueda ser utilizada, vendida o financiada
            sin impedimentos.
          </p>


          <div className="regularization-benefits">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="regularization-benefit"
                >
                  <Icon strokeWidth={1.1} />

                  <span>
                    {benefit.title}
                  </span>
                </article>
              );
            })}

          </div>

        </div>


        <div className="regularization-hero__visual">

          <img
            src="/images/regularization/hero.png"
            alt="Vivienda regularizada integrada al paisaje"
          />


          <div className="regularization-hero__banner">

            <div className="regularization-hero__banner-icon">
              <Landmark strokeWidth={1} />
            </div>

            <p>
              Previene problemas futuros
              <br />
              y evita multas o sanciones.
            </p>

            <div className="regularization-hero__banner-divider" />

            <p>
              Agenda una asesoría inicial
              <br />
              sin costo.
            </p>

            <Link
              to="/contacto"
              aria-label="Agendar asesoría"
            >
              <ArrowRight strokeWidth={1.1} />
            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          POR QUÉ REGULARIZAR
      ================================================= */}

      <section className="regularization-why">

        <div className="regularization-why__copy">

          <span className="regularization-eyebrow">
            ¿Por qué regularizar?
          </span>

          <div className="regularization-small-line" />

          <h2>
            Evita complicaciones,
            <br />
            asegura tu tranquilidad.
          </h2>

          <p>
            Muchas propiedades presentan construcciones sin
            permiso, ampliaciones no recepcionadas o discrepancias
            entre lo construido y lo autorizado.
          </p>

          <p>
            Regularizar permite resguardar tu inversión y
            abrir nuevas posibilidades para tu propiedad.
          </p>

        </div>


        <div className="regularization-why__visual">

          <img
            src="/images/regularization/section-sketch.png"
            alt="Corte arquitectónico de vivienda"
          />

        </div>

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="regularization-services">

        <div className="regularization-section-heading">
          <span>
            Nuestros servicios
          </span>

          <div className="regularization-small-line" />
        </div>


        <div className="regularization-services__grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="regularization-service"
              >

                <Icon strokeWidth={1} />

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </article>
            );
          })}

        </div>

      </section>


      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="regularization-process">

        <div className="regularization-section-heading regularization-section-heading--left">
          <span>
            Nuestro proceso
          </span>

          <div className="regularization-small-line" />
        </div>


        <div className="regularization-process__grid">

          {process.map((step, index) => (
            <article
              key={step.number}
              className="regularization-process__step"
            >

              <span className="regularization-process__number">
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
                  className="regularization-process__arrow"
                  strokeWidth={1}
                />
              )}

            </article>
          ))}

        </div>

      </section>


      {/* =================================================
          WHO IS THIS FOR
      ================================================= */}

      <section className="regularization-cases">

        <div className="regularization-section-heading regularization-section-heading--left">
          <span>
            ¿Para quién es este servicio?
          </span>

          <div className="regularization-small-line" />
        </div>


        <div className="regularization-cases__grid">

          {cases.map((item) => (
            <article
              key={item.title}
              className="regularization-case"
            >

              <div className="regularization-case__image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="regularization-cta">

        <div className="regularization-cta__illustration">
          <Leaf strokeWidth={0.8} />
        </div>

        <h2>
          Regulariza tu propiedad
          <br />
          y construye con tranquilidad.
        </h2>

        <div className="regularization-cta__divider" />

        <p>
          Resolvemos tus dudas y te orientamos
          <br />
          en el primer paso.
        </p>

        <Link
          to="/contacto"
          className="regularization-cta__button"
        >
          Agendar asesoría

          <ArrowRight strokeWidth={1.1} />
        </Link>

      </section>


      <Footer />

    </main>
  );
}