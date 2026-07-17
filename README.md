# Bridge Capital

Marketing website for **Bridge Capital**, a financial consultation and capital advisory service. The site presents the firm's process, service lines, and a consultation-request form across four pages: Home, About, Services, and Contact.

## Overview

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Fonts:** Newsreader (display) + IBM Plex Sans / IBM Plex Mono (body & utility), loaded via `next/font/google`
- **Design concept:** A schematic "bridge" motif (SVG) recurs across the site as a visual metaphor for the firm's role connecting a business to a lender. Blueprint-style grid backgrounds and a serif/mono type pairing reinforce a consultative, knowledge-led tone.

## Pages

| Route        | Description                                                                   |
| ------------ | ------------------------------------------------------------------------------ |
| `/`          | Hero, six-step engagement process, CTA                                        |
| `/about`     | Firm positioning, operating principles                                        |
| `/services`  | Service offering grouped into three phases: Discovery, Positioning, Financing |
| `/contact`   | Consultation request form and contact details                                 |

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx        Root layout — fonts, nav, footer
  page.tsx           Home
  about/page.tsx     About
  services/page.tsx  Services
  contact/page.tsx   Contact
  globals.css        Design tokens (color, grid) and Tailwind theme
components/
  Navbar.tsx         Site navigation (responsive)
  Footer.tsx         Site footer
  BridgeMotif.tsx     Signature SVG bridge illustration
  ContactForm.tsx    Consultation request form (client component)
```

## Design Tokens

| Token            | Hex       | Usage                                   |
| ---------------- | --------- | ---------------------------------------- |
| `--color-ink`    | `#0A1128` | Primary text, dark sections              |
| `--color-blue`   | `#0000FF` | Brand blue — links, structural accents   |
| `--color-yellow` | `#FFEF00` | Brand yellow — CTAs, highlights          |
| `--color-paper`  | `#FAF9F5` | Background                                |
| `--color-slate`  | `#4A5165` | Body copy                                 |

## Known Follow-ups

- **Contact form is not yet wired to a backend.** `components/ContactForm.tsx` currently only updates local UI state on submit. Connect it to an API route, transactional email provider (e.g. Resend, SendGrid), or form service (e.g. Formspree) before launch.
- **Placeholder contact details.** Replace the email, phone number, and hours in `components/Footer.tsx` and `app/contact/page.tsx` with real values.
- **Placeholder metadata.** Update `app/layout.tsx` metadata (title/description) and add an Open Graph image before launch.

## License

Proprietary. All rights reserved. This code is the property of Bridge Capital and is not licensed for reuse or redistribution.
