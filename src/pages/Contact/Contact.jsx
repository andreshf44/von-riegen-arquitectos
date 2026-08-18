// src/pages/Contact/Contact.jsx

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact">
      <Navbar variant="full" />

      <section className="contact__main">
        <div className="contact__left">
          <span className="contact__eyebrow">Contacto</span>

          <h1>
            Conversemos
            <br />
            sobre tu proyecto.
          </h1>

          <p className="contact__intro">
            Cuéntanos en qué podemos ayudarte.
            <br />
            Te responderemos a la brevedad.
          </p>

          <div className="contact__info">
            <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
              <span className="contact__info-icon">◌</span>

              <span>
                <small>WhatsApp</small>
                +56 9 1234 5678
              </span>
            </a>

            <a href="mailto:hola@vonriegenarquitectos.cl">
              <span className="contact__info-icon">✉</span>

              <span>
                <small>Email</small>
                hola@vonriegenarquitectos.cl
              </span>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <span className="contact__info-icon">◎</span>

              <span>
                <small>Instagram</small>
                @vonriegen.arquitectos
              </span>
            </a>

            <div className="contact__info-item">
              <span className="contact__info-icon">⌖</span>

              <span>
                <small>Ubicación</small>
                Pucón, Araucanía, Chile
              </span>
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" name="phone" type="tel" />
          </div>

          <fieldset className="contact__services">
            <legend>¿Qué necesitas?</legend>

            <label>
              <input type="radio" name="service" value="arquitectura" />
              <span>Diseño de arquitectura personalizada</span>
            </label>

            <label>
              <input type="radio" name="service" value="regularizacion" />
              <span>Regularización de propiedades</span>
            </label>

            <label>
              <input type="radio" name="service" value="division" />
              <span>División y fusión de predios</span>
            </label>
          </fieldset>

          <div className="contact__field contact__field--message">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" />
          </div>

          <button type="submit" className="contact__submit">
            <span>Enviar</span>
            <span>→</span>
          </button>
        </form>
      </section>

      <section className="contact__gallery">
        <img
          src="/images/contact/contact-banner.png"
          alt="Arquitectura y paisaje del sur de Chile"
        />
      </section>

      <Footer />
    </main>
  );
}