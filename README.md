# Bridge Capital — Website

The official marketing website for **Bridge Capital**, a financial consultation service helping businesses prepare, position, and secure financing from banks and financial institutions.

Built with [Next.js](https://nextjs.org) (App Router), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS v4](https://tailwindcss.com).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (utility) via `next/font/google`
- **Linting:** ESLint (Next.js config)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, 6-step engagement process, CTA |
| `/about` | About — company story, operating principles |
| `/services` | Services — grouped by Consultation & Discovery, Positioning & Proposal, Financing & Negotiation |
| `/contact` | Contact — consultation request form |

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the site. The page auto-updates as you edit files in `app/`.

## Project Structure

```text
app/
├── page.tsx              # Home
├── about/
│   └── page.tsx          # About
├── services/
│   └── page.tsx          # Services
├── contact/
│   └── page.tsx          # Contact
├── layout.tsx            # Root layout, fonts, nav/footer shell
└── globals.css           # Design tokens (colors, blueprint grid)

components/
├── Navbar.tsx
├── Footer.tsx
├── BridgeMotif.tsx       # Signature bridge SVG motif
└── ContactForm.tsx       # Consultation request form (UI only — needs backend)
```

## Notes Before Deploying

- **Contact form:** Currently UI-only. Wire it up to an email service or API route (e.g. Resend, Formspree, or a custom `app/api/contact/route.ts`) before going live. See the `TODO` comment in `components/ContactForm.tsx`.
- **Placeholder content:** Email, phone, and hours in the footer and contact page are placeholders. Update them with the actual business details before deployment.

## Deployment

Build and start the production server:

```bash
npm run build
npm start
```

The easiest deployment option is **Vercel**, the creators of Next.js.

## Credits

Built by **Supun Dharmaratne** for **Bridge Capital**.