# Project Architecture (Local)

## Monorepo Structure
The project is managed as a monorepo using **Turborepo** and **Bun** as the package manager and runtime.

- **`apps/web`**: Next.js 16 (App Router) frontend.
  - Framework: React 19.
  - Styling: Tailwind CSS 4.
- **`apps/api`**: Hono-based API server.
  - Deployment: Cloudflare Workers (via Wrangler).
- **`packages/ui`**: Shared UI component library (`@repo/ui`).
- **`packages/eslint-config` / `typescript-config`**: Shared development configurations.

## Design & Identity Standards
- **Brand Palette**:
  - **BIL Orange**: Primary brand energy and secondary accents. Used for branding icons and excitement.
  - **Sapphire Blue** (`--brand-cta`): Primary color for trust, professional stability, and high-conversion CTAs.
- **Section Standards**:
  - **Photography Layers**: High-impact sections (Stats, Heroes) should use subtle, low-opacity background imagery (0.05-0.2 opacity) to provide professional texture without compromising text readability.
  - **Bento Grids**: Use for complex data or diverse service offerings (see `tiers.tsx`).

## Legacy Assets
- **`inertia/`**: Contains the original static HTML/CSS site files. These are kept for reference or migration purposes.
