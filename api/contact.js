export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Método no permitido",
      });
    }
  
    try {
      const { name, email, phone, service, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({
          error: "Nombre, email y mensaje son obligatorios.",
        });
      }
  
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
  
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({
          // Remitente corporativo verificado en Resend
          from: "Von Riegen Web <contacto@vonriegenarquitectos.cl>",
  
          // Correo que recibirá las consultas del formulario
          to: ["daniela@vonriegenarquitectos.cl"],
  
          reply_to: email,
  
          subject: `Nueva consulta web — ${name}`,
  
          html: `
            <h2>Nueva consulta desde Von Riegen Arquitectos</h2>
  
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
            <p><strong>Servicio:</strong> ${service || "No indicado"}</p>
  
            <hr>
  
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          `,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Resend error:", data);
  
        return res.status(response.status).json({
          error: "No se pudo enviar el mensaje.",
          details: data,
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Mensaje enviado correctamente.",
        data,
      });
    } catch (error) {
      console.error("Contact API error:", error);
  
      return res.status(500).json({
        error: "Error interno del servidor.",
      });
    }
  }
