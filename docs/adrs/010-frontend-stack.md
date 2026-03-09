# ADR-010: Frontend Stack — IPNEXT Landing Page

## Status
Accepted

## Date
2026-03-09

## Context

Se necesita implementar la landing page de IPNEXT a partir de un diseño existente en Pencil (.pen). El objetivo es una página de marketing estática con algunos elementos interactivos (FAQ accordion, WhatsApp widget).

## Decision

Se adopta el siguiente stack:

### Framework
**Next.js 16 (App Router)** con TypeScript

- SSR/SSG para SEO óptimo
- App Router para layouts modernos
- `next/font/google` para carga óptima de fuentes

### CSS
**Tailwind CSS v4**

- Configuración via CSS `@theme` directive (no tailwind.config.ts)
- Design tokens como CSS custom properties
- Mobile-first responsive design

### Tema
**Naranja oscuro** (frame `Q7kRS` del archivo `/Users/rhernandezba/Documents/page_ipnext.pen`)

- Fondo principal: `#0A0A0A`
- Acento primario: `#FF6B00` (naranja)
- Acento secundario: `#FF8C00` (naranja claro)

### Íconos
**lucide-react** — biblioteca de íconos consistente con el diseño en Pencil

### Font
**Inter** via `next/font/google` — cargada con `display: swap` para performance

## Consequences

**Positivo:**
- Stack moderno y bien mantenido
- Excelente DX con TypeScript + Tailwind
- SSR mejora SEO para captación de leads
- lucide-react es tree-shakable (bundle pequeño)

**Negativo:**
- Tailwind v4 es relativamente nuevo; la documentación puede estar incompleta
- Next.js requiere Node.js server para SSR (aunque puede deployarse como static export)

## Alternatives Considered

- Vite + React: descartado por menor soporte SEO out-of-the-box
- Bootstrap: descartado por menor flexibilidad y mayor peso
- CSS Modules: descartado por mayor verbosidad vs Tailwind
