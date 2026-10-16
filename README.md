
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
- JavaScript
- HTML and CSS
- [Confirm framework and additional libraries from package.json]

**Backend & Integrations**
- Vercel Serverless Functions
- Hostinger SMTP

**Infrastructure & Development**
- Git and GitHub
- Vercel
- NIC Chile (domain registration)

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

The project includes measures designed to reduce automated submissions and protect the contact workflow.

- **Honeypot protection:** an anti-spam mechanism implemented in the contact API.
- **Rate limiting:** Vercel Firewall is configured to limit `/api/contact` to five requests per IP address within ten minutes, returning HTTP 429 when the limit is exceeded.
- **Server-side credentials:** SMTP authentication is handled through private environment variables rather than frontend code.
- **Repository security:** GitHub security features are enabled to support dependency review, code analysis, and secret detection.

These measures reduce certain risks but do not guarantee complete protection against abuse.

## Deployment

The website is deployed on **Vercel** and uses the custom domain:

https://www.vonriegenarquitectos.cl/

The source code is maintained in GitHub, with deployment managed through the project's Vercel configuration.

## Local Development

Local setup instructions will be added after confirming the project's package scripts and required environment variable names.

SMTP credentials and other sensitive configuration values must never be committed to the repository.

## Project Status

**Production**

The contact form was successfully tested on October 16, 2026, with messages received through the configured email workflow.

## Developer

**Andrés Herrera**  
Frontend Developer · JavaScript · TypeScript · UX/UI

[Portfolio](https://andresenrique.com) · [LinkedIn](https://www.linkedin.com/in/andres-herrera-frey-b4879335/) · [GitHub](https://github.com/andreshf44)
