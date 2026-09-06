# AGENTS.md

Landing page SPA con SSR: Next.js 15 (App Router) + React 19 + Tailwind v4, **JSX plano (sin TypeScript, sin ESLint)**.

## Commandos

```bash
npm install     # instalar dependencias
npm run dev     # desarrollo local (localhost:3000)
npm run build   # build de producción (verificar antes de desplegar)
npm start       # servir build de producción
```

No hay tests, linter ni typecheck configurados. `npm run build` es la única verificación de calidad.

## Stack & convenciones verificadas

- **Iconos**: `@phosphor-icons/react`. En **Server Components importar desde `@phosphor-icons/react/ssr`** (la entrada por defecto rompe la recolección RSC: `createContext is not a function`). En client components vale la entrada normal.

- **Sin TypeScript**: los archivos son `.jsx` (no `.tsx`). No añadir TS, tipos no importados (`import type`, `LayoutProps<...>`), ni `next-env.d.ts`/`tsconfig.json` — fueron eliminados a propósito.
- **Server Components por defecto**; solo marcar `"use client"` en componentes con estado, efectos, handlers del navegador.
- **Client components pesados** (Leaflet, carruseles con video): importar con `next/dynamic` + `ssr: false`.
- **Tailwind v4**: design tokens en `app/globals.css` con `@theme` (`--color-primary`, `--color-primary-deep`, `--color-ink`, `--font-heading`, etc.). **No hay `tailwind.config.js`** — no crearlo. Tokens se usan como clases (`bg-primary`, `font-heading`). La paleta autoritativa (celeste/cian/blanco) vive en `design.md` — cambiar tokens Y ese documento.
- **Fuentes** (Inter + Oswald) vía Google Fonts `<link>` en `app/layout.jsx`, no con `next/font`. Su uso en clases: `font-heading` (Oswald, títulos) y `font-body` (Inter, cuerpo).
- **Path alias** `@/*` → raíz del proyecto via `jsconfig.json` (importar como `@/components/Header`).
- `<html lang="es">`, scroll suave + `scroll-padding-top: 80px` en `globals.css`.

## Estructura esperada

- `app/` — `layout.jsx` (server, fonts, metadata, HTML global), `page.jsx` (compone secciones), `globals.css`
- `components/` — un archivo por sección; `"use client"` solo donde haga falta
- `public/imgs/`, `public/hero/`, `public/areas/`, `public/favicon.svg`

## Documentación autoritativa

- `docs/ARQUITECTURA.md` — arquitectura completa, patrones, checklist (Server/Client, dynamic imports, responsive, accesibilidad, orden de secciones).
- `docs/CVE-2025-55182-NETLIFY.md` — **crítico para deploys**.

## Gotcha de deploy (NO ignorar)

Next.js está fijado a `^15.5.25`. **No downgradear por debajo de `15.5.7` (o `16.0.7`)** — Netlify bloquea el deploy por CVE-2025-55182 (RCE en React Server Functions). Antes de desplegar: `npm run build` sin errores y confirmar `package.json` tiene una versión parcheada.

> Actualmente instalado: `next@15.5.25`. `npm audit` reporta vulnerabilidades en el `postcss` transitivo de Next 15 — ignorar `npm audit fix --force` (forzaría un upgrade rompedor a Next 16; no es necesario para despliegues válidos).
