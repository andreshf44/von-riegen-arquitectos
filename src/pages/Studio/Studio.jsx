import { Link } from "react-router";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Studio.css";

const timeline = [
  {
    year: "2000",
    title: "Universidad de Chile",
    text: "Titulada de Arquitectura.",
  },
  {
    year: "2003",
    title: "Hopland, California",
    text: "Estudios de bioconstrucción y técnicas constructivas alternativas.",
  },
  {
    year: "2004 — 2015",
    title: "Young & Borlik Architects",
    text: "Experiencia en Palo Alto, California, en proyectos de arquitectura de autor y diseño a medida.",
  },
  {
    year: "2015",
    title: "Pucón, Araucanía",
    text: "Se radica en el sur de Chile y desarrolla su práctica profesional en la región.",
  },
  {
    year: "2023",
    title: "Neurociencia aplicada a la arquitectura",
    text: "Diplomado en la Universidad del Desarrollo.",
  },
];

export default function Studio() {
  return (
    <main className="studio">
      <Navbar />

      <section className="studio__hero">
        <div className="studio__intro">
          <span className="studio__eyebrow">Estudio</span>

          <h1>
            Arquitectura
            <br />
            con propósito.
          </h1>

          <p className="studio__lead">
            Una práctica que combina experiencia internacional,
            conocimiento del territorio y una mirada sensible sobre
            cómo habitamos los espacios.
          </p>
        </div>

        <div className="studio__portrait">
          <img
            src="/images/studio/daniela.jpeg"
            alt="Daniela von Riegen"
          />
        </div>
      </section>

      <section className="studio__profile">
        <div className="studio__profile-heading">
          <span className="studio__section-label">Daniela von Riegen</span>

          <h2>
            Arquitecta
            <br />
            y fundadora.
          </h2>
        </div>

        <div className="studio__profile-text">
          <p>
            Arquitecta titulada en la Universidad de Chile, con más de
            dos décadas de experiencia profesional y una trayectoria
            marcada por la arquitectura sustentable y el diseño a medida.
          </p>

          <p>
            Su experiencia internacional en California fortaleció una
            forma de trabajar donde el detalle, la materialidad, el
            paisaje y las necesidades de cada persona son parte de una
            misma conversación.
          </p>

          <p>
            Desde Pucón desarrolla proyectos de arquitectura,
            regularización y gestión territorial en el sur de Chile.
          </p>
        </div>
      </section>

      <section className="studio__trajectory">
        <div className="studio__trajectory-intro">
          <span className="studio__section-label">Trayectoria</span>

          <h2>
            Más de veinte años
            <br />
            construyendo una mirada.
          </h2>
        </div>

        <div className="studio__timeline">
          {timeline.map((item) => (
            <article className="studio__timeline-item" key={item.year}>
              <span className="studio__timeline-year">{item.year}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio__approach">
        <div className="studio__approach-copy">
          <span className="studio__section-label">El estudio</span>

          <h2>
            Diseñamos desde
            <br />
            el lugar y las personas.
          </h2>

          <p>
            Cada proyecto nace del encuentro entre clima, paisaje,
            materialidad y forma de habitar. El objetivo no es imponer
            una arquitectura, sino encontrar una respuesta propia para
            cada contexto.
          </p>
        </div>

        <div className="studio__principles">
          <div>
            <span>01</span>
            <h3>Sustentabilidad</h3>
            <p>
              Estrategias conscientes con el entorno y los recursos.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Diseño a medida</h3>
            <p>
              Soluciones pensadas desde la vida cotidiana de cada cliente.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Bienestar</h3>
            <p>
              Espacios que consideran luz, escala, materialidad y percepción.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Territorio</h3>
            <p>
              Una práctica arraigada en el paisaje y normativa del sur.
            </p>
          </div>
        </div>
      </section>

      <section className="studio__image-banner">
        <img
          src="/images/studio/studio-banner.png"
          alt="Arquitectura integrada al paisaje del sur de Chile"
        />
        <div className="studio__cta">
          <h2>
            ¿Tienes un proyecto en mente?
          </h2>

          <Link to="/arquitectura" className="studio__cta-link">
            <span>Ver servicios</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}