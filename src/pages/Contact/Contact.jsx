// src/pages/Contact/Contact.jsx

import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const focusContactForm = (event) => {
    event.preventDefault();

    document
      .querySelector("#name")
      ?.focus();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "No se pudo enviar el mensaje."
        );
      }

      setStatus("success");
      setFeedback(
        "Gracias por escribirnos. Recibimos tu mensaje y te responderemos a la brevedad."
      );

      form.reset();
    } catch (error) {
      console.error("Error enviando formulario:", error);

      setStatus("error");
      setFeedback(
        "No pudimos enviar tu mensaje. Inténtalo nuevamente o escríbenos por WhatsApp."
      );
    }
  };

  return (
    <main className="contact">
      <Navbar variant="full" />

      <section className="contact__main">
        <div className="contact__left">
          <span className="contact__eyebrow">
            Contacto
          </span>

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
            <a
              href="https://wa.me/56961244920?text=Hola%2C%20me%20gustaría%20conversar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__info-icon">
                ◌
              </span>

              <span>
                <small>WhatsApp</small>
                +56 9 6124 4920
              </span>
            </a>

            <a href="#contact-form" onClick={focusContactForm}>
              <span className="contact__info-icon">✉</span>

              <span>
                <small>Email</small>
                daniela@vonriegenarquitectos.cl
              </span>
            </a>

            <a
              href="https://www.instagram.com/vonriegenarquitectos/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__info-icon">
                ◎
              </span>

              <span>
                <small>Instagram</small>
                @vonriegenarquitectos
              </span>
            </a>

            <div className="contact__info-item">
              <span className="contact__info-icon">
                ⌖
              </span>

              <span>
                <small>Ubicación</small>
                Pucón, Araucanía, Chile
              </span>
            </div>
          </div>
        </div>

        <form
          id="contact-form"
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="name">
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="phone">
              Teléfono
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
            />
          </div>

          <fieldset className="contact__services">
            <legend>
              ¿Qué necesitas?
            </legend>

            <label>
              <input
                type="radio"
                name="service"
                value="arquitectura"
              />

              <span>
                Diseño de arquitectura personalizada
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="service"
                value="regularizacion"
              />

              <span>
                Regularización de propiedades
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="service"
                value="division"
              />

              <span>
                División y fusión de predios
              </span>
            </label>
          </fieldset>

          <div className="contact__field contact__field--message">
            <label htmlFor="message">
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
            />
          </div>

          <div
            aria-hidden="true"
            style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            }}
          >
            <label htmlFor="website">Sitio web</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          
          <button
            type="submit"
            className="contact__submit"
            disabled={status === "sending"}
          >
            <span>
              {status === "sending"
                ? "Enviando..."
                : "Enviar"}
            </span>

            <span>→</span>
          </button>

          {feedback && (
            <p
              className={`contact__feedback contact__feedback--${status}`}
              role="status"
            >
              {feedback}
            </p>
          )}
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
