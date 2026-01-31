# SergioPavon.work

Sitio personal (CV + portafolio + blog de IA) construido con Astro. El contenido está en español, tiene tema claro/oscuro, es responsive y prioriza accesibilidad (WCAG 2.1 AA) y un tono técnico orientado a producción.

## Stack

- Astro (static output)
- Tailwind (vía CSS utilities en `site/src/styles/global.css`)
- JS mínimo (tema + motion inline en el layout)

## Requisitos

- Node.js + npm

## Comandos

Todos los comandos se ejecutan dentro de `site/`.

```bash
cd site
npm install
npm run dev
```

Build de producción:

```bash
cd site
npm run build
```

Previsualizar el build:

```bash
cd site
npm run preview
```

## Estructura del proyecto

El repo tiene archivos fuente en la raíz (ej. `cv_sergio_pavon.pdf`, `retrato.png`, etc.), pero el sitio vive en `site/`.

- `site/src/pages/`
  - `/` (home)
  - `blog/` (listado)
  - `blog/[slug].astro` (detalle de post)
  - `blog/tag/[tag].astro` (listado filtrado por tag, generado en build)
  - `proyectos/` (listado)
  - `proyectos/[slug].astro` (detalle de proyecto, formato Project Brief)
  - `cv/` (CV web)
  - `cv/texto` (CV en texto)

- `site/src/content/`
  - `blog/` (posts en Markdown)
  - `projects/` (proyectos en Markdown)

- `site/public/`
  - `CV.pdf` (descarga)
  - `Sergio-Maximiliano-Pavon-CV.txt` (descarga, UTF-8 con BOM)
  - `img/blog/` (imágenes de portada del blog)
  - `thumbs/` (assets de proyectos)

## Blog (contenido + imágenes)

### Convención de nombres

- Post: `site/src/content/blog/YYYYMMDD.md`
- Imagen de portada: `site/public/img/blog/YYYYMMDD.png`

El `cover` del frontmatter debe apuntar a la ruta pública:

```yaml
cover: "/img/blog/YYYYMMDD.png"
coverAlt: "Descripción breve de la ilustración"
```

### Tags

- Los tags se declaran en el frontmatter (array de strings).
- El listado `/blog` muestra:
  - Top tags por frecuencia (limitado)
  - Acordeón con el resto
- Los filtros son estáticos (compatibles con build):
  - Ruta: `/blog/tag/<tag-slug>/`

El `tag-slug` se genera normalizando y quitando acentos (ej. "produccion" para "producción").

## CV (PDF / TXT)

- Para actualizar el PDF público: reemplazar `site/public/CV.pdf`.
- El TXT de CV es UTF-8 con BOM para que se vean bien tildes y "ñ" en Windows: `site/public/Sergio-Maximiliano-Pavon-CV.txt`.

## Tema claro/oscuro

- Se guarda en `localStorage` con key `theme`.
- Toggle: ícono (luna/sol) con accesibilidad y sin depender de JS externo.

## Accesibilidad

- Focus visible global
- Botones con tamaños táctiles
- `prefers-reduced-motion` respetado (reveal solo si motion está permitido)

## Publicación

El build genera `site/dist/`. Publica el contenido de esa carpeta en tu hosting.

Ejemplo (local):

```bash
cd site
npm run build
npm run preview
```

## Notas

- Prompts/archivos auxiliares que no deben publicarse pueden vivir fuera de `site/public/` (por ejemplo `site/_private/`).