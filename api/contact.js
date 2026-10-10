
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
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      return res.status(400).json({
        error: "Solicitud inválida.",
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

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no configurada.");

      return res.status(500).json({
        error: "Servicio de contacto no disponible.",
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Von Riegen Web <contacto@vonriegenarquitectos.cl>",
        to: ["daniela@vonriegenarquitectos.cl"],
        reply_to: email,
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
      }),
    });

    if (!response.ok) {
      console.error("Error al enviar correo con Resend:", response.status);

      return res.status(502).json({
        error: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.error("Error en API de contacto:", error);

    return res.status(500).json({
      error: "Error interno del servidor.",
    });
  }
}
