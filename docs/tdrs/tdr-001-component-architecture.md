# TDR-001: Component Architecture — IPNEXT Landing Page

## Status
Accepted

## Date
2026-03-09

## Summary

Define la arquitectura de componentes para la landing page de IPNEXT.

## Rules

### Estructura de Carpetas

```
src/
  app/
    layout.tsx       # Root layout con Inter font y metadata
    page.tsx         # Página principal que compone las secciones
    globals.css      # Tailwind v4 @theme + base styles
  components/
    Navbar.tsx           # Navbar sticky (server component)
    Hero.tsx             # Hero section (server component)
    PlansSection.tsx     # Planes fibra + wireless (server component)
    FeaturesSection.tsx  # Cards "¿Por qué IPNEXT?" (server component)
    StatsSection.tsx     # Métricas 10k+/99.9%/1Gbps (server component)
    FAQSection.tsx       # Acordeón FAQ ('use client')
    ContactSection.tsx   # Cards de contacto (server component)
    Footer.tsx           # Footer (server component)
    WhatsAppWidget.tsx   # FAB flotante ('use client')
```

### Reglas de Componentes

1. **Server components por defecto**: todos los componentes son Server Components salvo que requieran interactividad
2. **`'use client'` solo donde hay interactividad**:
   - `FAQSection.tsx`: accordion con estado open/closed
   - `WhatsAppWidget.tsx`: toggle visible/hidden del bubble
3. **Un archivo por sección**: cada sección de la landing = un componente en `src/components/`
4. **Composición en page.tsx**: la página principal importa y compone todas las secciones en orden

### Reglas de Estilos

1. **Solo Tailwind CSS**: no usar CSS inline ni CSS Modules
2. **Design tokens via @theme**: los colores se definen en `globals.css` bajo `@theme` y se usan como clases `bg-ipnext-*`, `text-ipnext-*`
3. **No hardcodear colores**: nunca usar colores hex directamente en className; usar siempre las variables de Tailwind
4. **Mobile-first**: diseñar primero para mobile, luego usar breakpoints `sm:`, `md:`, `lg:`, `xl:`
5. **Breakpoints estándar**:
   - Mobile: < 640px (default)
   - sm: 640px
   - md: 768px
   - lg: 1024px
   - xl: 1280px

### Reglas de Tipografía

- **Font exclusiva**: Inter (cargada via `next/font/google` en layout.tsx)
- **Aplicar en body**: la variable CSS `--font-inter` se aplica al body
- **No usar otras fuentes**: nunca agregar otras fuentes sin actualizar este TDR

### Reglas de Íconos

- **Biblioteca exclusiva**: `lucide-react`
- **No usar otros íconos**: no mezclar con heroicons, feather, etc.
- **Tree-shaking**: importar siempre íconos individuales, no el bundle completo

### Reglas de Accesibilidad

- `<nav>` con `role="navigation"` y `aria-label`
- Botones con `aria-label` descriptivo
- FAQ items con `aria-expanded` y `aria-controls`
- Secciones con `id` para deep-linking desde el navbar
- Imágenes con `alt` descriptivo

### Max Width y Layout

- **Max width del contenido**: `max-w-7xl` (1280px) con `mx-auto`
- **Padding lateral desktop**: `px-[120px]` → usar `px-8 md:px-16 lg:px-[120px]`
- **Padding lateral mobile**: `px-6`
- **Section padding vertical**: `py-20` (80px)
