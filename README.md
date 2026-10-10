# Von Riegen Arquitectos

Sitio web corporativo de **Von Riegen Arquitectos**, estudio de arquitectura ubicado en Pucón, Región de La Araucanía, Chile.

**Sitio web:** https://vonriegenarquitectos.cl

## Descripción

Plataforma web orientada a presentar los servicios del estudio, sus proyectos y facilitar el contacto con potenciales clientes mediante un formulario de consultas, WhatsApp y correo electrónico.

## Tecnologías

- React
- Vite
- JavaScript
- CSS
- Vercel (hosting y despliegue)
- GitHub (control de versiones)
- Resend (envío de correos desde el formulario)
- Hostinger (correo corporativo)

## Estructura principal

- `src/`: componentes, páginas, estilos y recursos de la aplicación.
- `public/`: imágenes, favicon y archivos públicos.
- `api/contact.js`: endpoint del formulario de contacto.
- `index.html`: documento HTML principal.
- `vercel.json`: configuración de despliegue.

## Desarrollo local

Requisitos: Node.js y npm.

```bash
npm install
npm run dev
```

Para generar una versión de producción:

```bash
npm run build
```

## Formulario de contacto

El formulario envía solicitudes mediante `POST /api/contact`.

Flujo:

1. El visitante completa el formulario.
2. React envía los datos al endpoint de Vercel.
3. El servidor valida los datos y procesa la solicitud.
4. Resend envía la notificación al correo corporativo.
5. Hostinger recibe el mensaje, que puede consultarse desde su webmail o Gmail mediante POP3.

### Seguridad

- Validación de campos obligatorios y formato de email.
- Límites de longitud de los datos.
- Escape de contenido HTML.
- Campo honeypot para reducir envíos automatizados.
- Rate limiting en Vercel Firewall: 5 solicitudes cada 600 segundos por IP para `/api/contact`.
- Credencial de Resend almacenada en la variable de entorno `RESEND_API_KEY`.

**Importante:** nunca subir contraseñas, credenciales ni claves API al repositorio.

## Infraestructura

| Servicio | Responsabilidad |
|---|---|
| NIC Chile | Registro del dominio |
| Vercel | Hosting, DNS, despliegue y funciones |
| GitHub | Código fuente y versiones |
| Hostinger | Correo corporativo |
| Resend | Notificaciones del formulario |
| Gmail | Consulta y envío de correo mediante POP3/SMTP |

## Despliegue

El repositorio está conectado a Vercel. Los cambios incorporados a la rama `main` generan nuevos despliegues automáticamente.

Antes de publicar modificaciones importantes, comprobar el funcionamiento de la navegación, las imágenes y el formulario de contacto.

## Mantenimiento

- Mantener actualizadas las dependencias del proyecto.
- Revisar periódicamente los registros de errores de Vercel.
- Comprobar que las consultas del formulario lleguen correctamente.
- Mantener habilitada la autenticación de dos factores en las cuentas administrativas.
- Revisar los permisos de acceso a GitHub, Vercel, Hostinger y el dominio.

## Administración

El sitio web y el correo corporativo deben permanecer bajo cuentas autorizadas por la propietaria del estudio.

Las credenciales y los accesos administrativos se gestionan de forma privada y no se documentan en este repositorio.

---

**Von Riegen Arquitectos — Pucón, Chile**
