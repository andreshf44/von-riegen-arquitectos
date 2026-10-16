
# Von Riegen Arquitectos

A responsive website developed for Von Riegen Arquitectos, an architecture studio based in Pucón, Chile.

The project combines a clear visual experience with functional features for showcasing architectural work and receiving inquiries through a secure server-side contact workflow.

**[View Live Website →](https://www.vonriegenarquitectos.cl/)**

## Overview

The website was developed to establish a digital presence for the architecture studio, present its projects, and make it easier for potential clients to get in touch.

The implementation focuses on responsive interfaces, usability, and connecting the frontend experience with reliable backend services.

## Key Features

- Responsive layouts for desktop and mobile devices.
- Architectural project presentation with visual content.
- Contact form connected to a serverless API endpoint.
- Email delivery through an authenticated SMTP service.
- Anti-spam and request-limiting measures for the contact endpoint.
- Production deployment with a custom domain.

## Tech Stack

**Frontend**
- React 19
- JavaScript (ES Modules)
- React Router 7
- HTML5 & CSS3
- Lucide React

**Backend & Integrations**
- Vercel Serverless Functions
- Nodemailer
- Hostinger SMTP

**Development Tools**
- Vite 8
- ESLint
- Git & GitHub

**Deployment & Infrastructure**
- Vercel
- Custom domain managed through NIC Chile

## Contact Form Architecture

The contact form uses a server-side workflow to process inquiries without exposing SMTP credentials in the browser.

```text
Website Contact Form
         |
         v
Vercel API (/api/contact)
         |
         v
Request Processing
         |
         v
Hostinger SMTP
         |
         v
Corporate Email Inbox
```

The API receives the contact request and uses Hostinger's SMTP service to deliver the notification to the studio's corporate email account.

The current production integration does not depend on a third-party email API provider.

## Security Considerations

The contact form includes server-side validation and anti-abuse measures to improve reliability and reduce common security risks.

- **Honeypot protection:** A hidden form field helps identify automated submissions. Requests that populate this field receive a successful response without triggering email delivery.
- **Input validation:** Required fields, email format, and maximum field lengths are validated server-side.
- **HTML escaping:** User-provided content is escaped before being included in the HTML email.
- **HTTP method restriction:** The contact endpoint only accepts POST requests.
- **Rate limiting:** Vercel Firewall is configured to limit `/api/contact` to five requests per IP address within ten minutes, returning HTTP 429 when the limit is exceeded.
- **Environment variables:** SMTP credentials are stored in server-side environment variables rather than exposed in frontend code.
- **Repository security:** GitHub security features support code analysis, dependency review, and secret detection.

These measures help reduce common risks but do not guarantee complete protection against abuse.

## Deployment

The website is deployed on **Vercel** and uses the custom domain:

https://www.vonriegenarquitectos.cl/

The source code is maintained in GitHub, with deployment managed through the project's Vercel configuration.


## Local Development

### Prerequisites

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/andreshf44/von-riegen-arquitectos.git
cd von-riegen-arquitectos
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Environment Configuration

The contact form requires server-side SMTP configuration.

Keep SMTP credentials in private environment variables. Never commit credentials or `.env` files containing secrets to the repository.

Local testing of the contact API may require a compatible serverless development environment.


## Project Status

**Production**

The contact form was successfully tested on October 16, 2026, with messages received through the configured email workflow.

## Developer

**Andrés Herrera**  
Frontend Developer · JavaScript · TypeScript · UX/UI

[Portfolio](https://andresenrique.com) · [LinkedIn](https://www.linkedin.com/in/andres-herrera-frey-b4879335/) · [GitHub](https://github.com/andreshf44)
