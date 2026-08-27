import { Link } from "react-router";
import {
  Sun,
  Compass,
  Mountain,
  Trees,
  Leaf,
  Droplets,
  Recycle,
  Pencil,
  PanelsTopLeft,
  HardHat,
  CircleCheck,
  HouseHeart,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Approach.css";

const placeFactors = [
  {
    icon: Sun,
    title: "Clima",
    text: "Estrategias pasivas que aprovechan la luz, el calor y la ventilación natural.",
  },
  {
    icon: Compass,
    title: "Orientación",
    text: "El diseño considera el recorrido solar y las mejores vistas.",
  },
  {
    icon: Mountain,
    title: "Topografía",
    text: "La pendiente y el relieve guían la implantación y el diseño.",
  },
  {
    icon: Trees,
    title: "Paisaje",
    text: "Integramos y protegemos la vegetación existente.",
  },
];

const wellbeing = [
  {
    image: "/images/approach/light.jpeg",
    title: "Luz natural",
    text: "Mejora el estado de ánimo, regula ritmos y aporta vitalidad a los espacios.",
  },
  {
    image: "/images/approach/nature.jpeg",
    title: "Conexión con la naturaleza",
    text: "Reduce el estrés y aumenta la concentración y la creatividad.",
  },
  {
    image: "/images/approach/material.png",
    title: "Materialidad saludable",
    text: "Materiales nobles, locales y de bajo impacto ambiental.",
  },
  {
    image: "/images/approach/acoustics.png",
    title: "Acústica y confort",
    text: "Espacios que favorecen el descanso, la concentración y las conversaciones.",
  },
  {
    image: "/images/approach/scale.png",
    title: "Escala humana",
    text: "Proporciones pensadas desde las personas y su experiencia cotidiana.",
  },
];

const sustainability = [
  "Eficiencia energética",
  "Gestión del agua",
  "Materiales locales",
  "Bajo impacto",
  "Ciclo de vida",
];

const materialization = [
  {
    icon: Pencil,
    title: "Diseño",
    text: "Idea, concepto y anteproyecto.",
  },
  {
    icon: PanelsTopLeft,
    title: "Proyecto",
    text: "Planos, especificaciones y coordinación.",
  },
  {
    icon: HardHat,
    title: "Obra",
    text: "Visitas periódicas y seguimiento en terreno.",
  },
  {
    icon: CircleCheck,
    title: "Entrega",
    text: "Revisión final y entrega del proyecto.",
  },
  {
    icon: HouseHeart,
    title: "Post-ocupación",
    text: "Acompañamiento y evaluación del habitar.",
  },
];

export default function Approach() {
    return (
        <main className="approach-page">
            <Navbar variant="full" />

            {/* HERO */}

            <section className="approach-hero">
                <div className="approach-hero__copy">
                    <span className="approach-eyebrow">
                        Arquitectura / Enfoque
                    </span>

                    <h1>
                        Nuestro
                        <br />
                        enfoque
                    </h1>

                    <div className="approach-small-line" />

                    <p>
                        Cada proyecto nace del encuentro entre el lugar y las personas.
                        Escuchamos, observamos y diseñamos espacios que mejoran la calidad
                        de vida y respetan su entorno.
                    </p>
                </div>

                <div className="approach-hero__image">
                    <img
                        src="/images/approach/hero.jpeg"
                        alt="Arquitectura integrada al paisaje del sur de Chile"
                    />
                </div>
            </section>

            {/* 01 — EL LUGAR */}

            <section className="approach-place">
                <div className="approach-section-intro">
                    <span className="approach-number">01</span>
                    <span className="approach-eyebrow">El lugar</span>

                    <h2>
                        Antes de diseñar,
                        <br />
                        observamos.
                    </h2>

                    <p>
                        Analizamos el clima, la orientación, la topografía y el paisaje
                        para que la arquitectura se integre y potencie lo que ya existe.
                    </p>
                </div>

                <div className="approach-place__sketch">
                    <img
                        src="/images/approach/site-sketch.png"
                        alt="Croquis de implantación arquitectónica"
                    />
                </div>

                <div className="approach-place__factors">
                    {placeFactors.map(({ icon: Icon, title, text }) => (
                        <article key={title}>
                            <Icon strokeWidth={1.2} />
                            <div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 02 — LA PERSONA */}

            <section className="approach-person">
                <div className="approach-person__image">
                    <img
                        src="/images/approach/person.jpeg"
                        alt="Interior residencial conectado con el paisaje"
                    />
                </div>

                <div className="approach-person__copy">
                    <span className="approach-number">02</span>
                    <span className="approach-eyebrow">La persona</span>

                    <h2>
                        No diseñamos una casa.
                        <br />
                        Diseñamos una forma de habitar.
                    </h2>

                    <p>
                        Escuchamos tus ideas, entendemos tus necesidades y traducimos tu
                        estilo de vida en espacios únicos y funcionales.
                    </p>
                </div>

                <ul className="approach-person__list">
                    <li>Forma de habitar</li>
                    <li>Rutinas y usos</li>
                    <li>Familia y comunidad</li>
                    <li>Sueños y proyecciones</li>
                </ul>
            </section>

            {/* 03 — BIENESTAR */}

            <section className="approach-wellbeing">
                <div className="approach-section-intro">
                    <span className="approach-number">03</span>
                    <span className="approach-eyebrow">El bienestar</span>

                    <h2>
                        Espacios que cuidan
                        <br />
                        y potencian la vida.
                    </h2>

                    <p>
                        Aplicamos principios de neuroarquitectura para diseñar ambientes
                        que influyen positivamente en el bienestar físico, emocional y
                        cognitivo.
                    </p>
                </div>

                <div className="approach-wellbeing__grid">
                    {wellbeing.map((item) => (
                        <article key={item.title}>
                            <img src={item.image} alt="" />

                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* 04 — SUSTENTABILIDAD */}

            <section className="approach-sustainability">
                <div className="approach-section-intro">
                    <span className="approach-number">04</span>
                    <span className="approach-eyebrow">La sustentabilidad</span>

                    <h2>
                        Diseñar mejor
                        <br />
                        antes que consumir más.
                    </h2>

                    <p>
                        Optimizamos recursos, reducimos impactos y proponemos sistemas
                        eficientes que hacen más sustentables y resilientes nuestros
                        proyectos.
                    </p>
                </div>

                <div className="approach-sustainability__list">
                    {sustainability.map((item, index) => (
                        <div key={item}>
                            {index === 0 && <Leaf strokeWidth={1.2} />}
                            {index === 1 && <Droplets strokeWidth={1.2} />}
                            {index === 2 && <Trees strokeWidth={1.2} />}
                            {index === 3 && <Recycle strokeWidth={1.2} />}
                            {index === 4 && <CircleCheck strokeWidth={1.2} />}

                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <div className="approach-sustainability__image">
                    <img
                        src="/images/approach/sustainability.png"
                        alt="Arquitectura sustentable integrada al paisaje"
                    />
                </div>
            </section>

            {/* 05 — MATERIALIZACIÓN */}

            <section className="approach-materialization">
                <div className="approach-section-intro">
                    <span className="approach-number">05</span>
                    <span className="approach-eyebrow">La materialización</span>

                    <h2>Del papel al lugar.</h2>

                    <p>
                        Acompañamos todo el proceso: desde el diseño hasta la obra,
                        cuidando cada decisión para que la arquitectura se construya como
                        fue pensada.
                    </p>
                </div>

                <div className="approach-materialization__steps">
                    {materialization.map(({ icon: Icon, title, text }, index) => (
                        <article key={title}>
                            <Icon strokeWidth={1.15} />

                            <h3>{title}</h3>
                            <p>{text}</p>

                            {index !== materialization.length - 1 && (
                                <span className="approach-materialization__arrow">→</span>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}

            <section className="approach-cta">
                <h2>
                    ¿Tienes un proyecto
                    <br />
                    en mente?
                </h2>


                <p>
                    Cuéntanos sobre tu terreno, tu proyecto
                    <br />
                    y cómo imaginas habitarlo.
                    <br />
                    Te ayudamos a hacerlo realidad.
                </p>

                <Link to="/contacto" className="approach-cta__link">
                    Conversemos
                    <span>→</span>
                </Link>

            </section>

            <Footer />
        </main>
    );
}