# BIL Project Blueprint

This document serves as the master technical reference for the BIL project, outlining the architecture, design system, and technical standards.

## 1. Technical Stack & Architecture

The project is managed as a monorepo using **Turborepo** and **Bun** as the package manager and runtime.

### Core Components:
- **`apps/web`**: Next.js 16 (App Router) frontend.
  - **Framework**: React 19.
  - **Styling**: Tailwind CSS 4.
- **`apps/api`**: Hono-based API server.
  - **Deployment**: Cloudflare Workers (via Wrangler).
- **`packages/ui`**: Shared UI component library (`@repo/ui`).
- **`packages/eslint-config` / `typescript-config`**: Shared development configurations.

### Infrastructure:
- **Runtime**: Bun.
- **API Framework**: Hono.
- **Frontend Framework**: Next.js (React 19).
- **Styling**: Tailwind CSS 4.

## 2. Design System & Identity Standards

### Brand Palette:
- **Sapphire Blue** (`--brand-cta`): Primary color for trust, professional stability, and high-conversion CTAs.
- **BIL Orange**: Primary brand energy and secondary accents. Used for branding icons and excitement.

### Visual & Aesthetic Tone:
- **Professional & Trusted**: High-trust financial aesthetic utilizing Sapphire Blue for stability.
- **Modern & Dynamic**: Responsive UI with a focus on ease of use (email signup/verify/invest flow), using premium micro-animations and Bento-grid layouts.
- **Depth & Texture**: Use of subtle professional photography to ground the digital experience.
  - **Photography Layers**: High-impact sections (Stats, Heroes) should use subtle, low-opacity background imagery (0.05-0.2 opacity) to provide professional texture without compromising text readability.
- **Bento Grids**: Use for complex data or diverse service offerings.

## 3. Core Application Flows

### Investment Flow:
1. Email Signup
2. Verification
3. Investment Selection (8%, 20%, 80% plans)
4. Capital Allocation & Monitoring

## 4. Legacy Assets
- **`inertia/`**: Contains the original static HTML/CSS site files. These are kept for reference or migration purposes.
