
import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);

const clean = (value, maxLength) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Método no permitido.",
    });
  }

  try {
    if (
      !req.body ||
      typeof req.body !== "object" ||
      Array.isArray(req.body)
    ) {
      return res.status(400).json({
        error: "Solicitud inválida.",
      });
    }

    // Honeypot contra bots
    if (req.body.website) {
      return res.status(200).json({
        success: true,
        message: "Mensaje recibido.",
      });
    }

    const name = clean(req.body.name, 100);
    const email = clean(req.body.email, 254);
    const phone = clean(req.body.phone, 30);
    const service = clean(req.body.service, 100);
    const message = clean(req.body.message, 3000);

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Nombre, email y mensaje son obligatorios.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Ingresa un correo electrónico válido.",
      });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("Configuración SMTP incompleta.");

      return res.status(500).json({
        error: "Servicio de contacto no disponible.",
      });
    }

    const port = Number(SMTP_PORT);

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      console.error("Puerto SMTP inválido.");

      return res.status(500).json({
        error: "Servicio de contacto no disponible.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: {
        name: "Von Riegen Web",
        address: SMTP_USER,
      },
      to: "daniela@vonriegenarquitectos.cl",
      replyTo: email,
      subject: `Nueva consulta web — ${name.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>Nueva consulta desde Von Riegen Arquitectos</h2>

        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone || "No indicado")}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(service || "No indicado")}</p>

        <hr>

        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });

  } catch (error) {
    console.error("Error al enviar correo del formulario:", error);

    return res.status(502).json({
      error: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
    });
  }
}
