# TDR-002: Design Tokens — IPNEXT Landing Page (Tema Naranja)

## Status
Accepted

## Date
2026-03-09

## Source
Extraído del frame `Q7kRS` del archivo `/Users/rhernandezba/Documents/page_ipnext.pen`

## Color Palette

### Fondos
| Token CSS | Hex | Clase Tailwind | Uso |
|-----------|-----|----------------|-----|
| `--color-ipnext-bg` | `#0A0A0A` | `bg-ipnext-bg` | Fondo principal, Hero, Features, Contact |
| `--color-ipnext-bg-sec` | `#111111` | `bg-ipnext-bg-sec` | Secciones alternadas (Plans, Stats) |
| `--color-ipnext-bg-dark` | `#0D0D0D` | `bg-ipnext-bg-dark` | FAQ section |
| `--color-ipnext-bg-card` | `#1A1A1A` | `bg-ipnext-bg-card` | Cards de features, contact |
| `--color-ipnext-bg-faq` | `#161616` | `bg-ipnext-bg-faq` | Items FAQ |
| `--color-ipnext-bg-card-dark` | `#1C1C1C` | `bg-ipnext-bg-card-dark` | Cards plan básico/ultra |
| `#141414` | `#141414` | (inline) | Cards wireless básico/pro |

### Acentos Naranja
| Token CSS | Hex | Clase Tailwind | Uso |
|-----------|-----|----------------|-----|
| `--color-ipnext-orange` | `#FF6B00` | `bg-ipnext-orange` / `text-ipnext-orange` | Acento primario, CTA, ícono contact |
| `--color-ipnext-orange-l` | `#FF8C00` | `bg-ipnext-orange-l` / `text-ipnext-orange-l` | Stats numbers, FAQ title, íconos FAQ |
| `--color-ipnext-orange-xl` | `#FFB366` | `text-ipnext-orange-xl` | Stats 1Gbps, badges wireless |
| `--color-ipnext-orange-warm` | `#FFAA44` | `text-ipnext-orange-warm` | Badge fibra básico |
| `--color-ipnext-orange-dim` | `#E87722` | `bg-ipnext-orange-dim` | Card featured fibra background |
| `--color-ipnext-orange-cta` | `#E07000` | `bg-ipnext-orange-cta` | CTA wireless plus |
| `--color-ipnext-dark-orange` | `#4A2000` | `bg-ipnext-dark-orange` | Badge BG fibra, btn fibra basic/ultra |
| `--color-ipnext-darker-orange` | `#2A1500` | `bg-ipnext-darker-orange` | Btn BG fibra ultra |
| `--color-ipnext-darkest-orange` | `#3A1800` | `bg-ipnext-darkest-orange` | Btn BG wireless pro |

### Texto
| Token CSS | Hex | Clase Tailwind | Uso |
|-----------|-----|----------------|-----|
| `--color-ipnext-text` | `#FFFFFF` | `text-ipnext-text` | Texto principal |
| `--color-ipnext-muted` | `#94A3B8` | `text-ipnext-muted` | Texto secundario, descripciones |
| `--color-ipnext-subtle` | `#64748B` | `text-ipnext-subtle` | Texto terciario, footer links |
| `--color-ipnext-dim` | `#334155` | `text-ipnext-dim` | Copyright footer |

### Bordes
| Token CSS | Hex | Clase Tailwind | Uso |
|-----------|-----|----------------|-----|
| `--color-ipnext-border` | `#2A2A2A` | `border-ipnext-border` | Bordes de cards y secciones |

### Especiales
| Token CSS | Hex | Clase Tailwind | Uso |
|-----------|-----|----------------|-----|
| `--color-ipnext-green` | `#25D366` | `bg-ipnext-green` | WhatsApp brand color |
| `--color-ipnext-violet` | `#A78BFA` | `text-ipnext-violet` | Ícono Soporte 24/7, ícono Email |
| `--color-ipnext-emerald` | `#4ADE80` | `text-ipnext-emerald` | Ícono Red Segura |

## Tipografía

| Elemento | Tamaño | Peso | Nota |
|----------|--------|------|------|
| Logo Navbar | 28px | 800 | letter-spacing: 4px |
| Hero Title | 72px | 900 | text-center |
| Hero Subtitle | 18px | 400 | text-center, opacity |
| Section Title | 44px | 800 | text-center |
| Section Subtitle | 18px | 400 | |
| Plan Speed | 48px | 900 | |
| Wireless Speed | 40px | 900 | |
| Stats Number | 48px | 900 | |
| Card Title | 20px | 700 | |
| Badge | 11px | 700 | letter-spacing: 2px |
| Body | 15px | 400 | |
| Footer Nav | 14px | 400 | |
| Copyright | 13px | 400 | |

## Spacing

| Elemento | Valor |
|----------|-------|
| Navbar height | 80px |
| Hero height | 700px |
| Section padding vertical | 80px |
| Section padding horizontal desktop | 120px |
| Card padding | 40px 36px |
| Card gap | 24px |
| Border radius cards | 16px |
| Border radius pills | 100px |

## Navbar

- Background: `#0A0A0ACC` (semi-transparent negro con blur)
- Position: sticky top
- Height: 80px
- Padding horizontal: 60px
