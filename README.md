# Liberalismo Comunal

Sitio web oficial de **Liberalismo Comunal**, una propuesta peruana de libertad desde abajo: libertad individual, comunidad, propiedad, mercado, descentralización y autogobierno local.

El proyecto editorial y cívico es desarrollado por **Pedro Jesús Guzmán Ramos**, ingeniero de Tecnologías de la Información y Sistemas, escritor ayacuchano e ideólogo de Liberalismo Comunal.

## Sitio en producción

- Sitio oficial: <https://liberalismocomunal.org>
- Página del autor: <https://liberalismocomunal.org/pedro-jesus-guzman-ramos/>
- Contacto: <mailto:hola@liberalismocomunal.org>
- Repositorio: <https://github.com/jesusguzman28/liberalismocomunal.org>

## Objetivos del sitio

- Presentar la doctrina y el manifiesto de Liberalismo Comunal.
- Difundir el libro *Libertad en los Andes*.
- Centralizar la identidad pública y el trabajo del autor.
- Publicar contenidos sobre liberalismo peruano, libertarismo, economía, descentralización y comunidad.
- Facilitar el contacto para entrevistas, debates, colaboraciones y participación ciudadana.

## Tecnología

- React 19
- Vite 8
- JavaScript moderno (ES Modules)
- CSS propio y diseño responsive
- Lucide React para iconografía
- GitHub Pages para alojamiento estático
- GitHub Actions para integración y despliegue continuo
- Google Analytics 4 para métricas de uso

## Desarrollo local

Requisitos: Node.js 22 o superior y npm.

```bash
npm ci
npm run dev
```

El servidor local estará disponible en `http://localhost:5173/`.

## Compilación de producción

```bash
npm run build
```

El resultado se genera en `dist/`. Esta carpeta contiene el sitio estático listo para ser servido por GitHub Pages u otro proveedor de hosting.

También puede probarse localmente con:

```bash
npm run preview
```

## Despliegue

El workflow ubicado en `.github/workflows/deploy-pages.yml` se ejecuta automáticamente cuando se hace push a `main`.

El proceso es:

1. Instalar las dependencias con `npm ci`.
2. Compilar el proyecto con `npm run build`.
3. Subir `dist/` como artefacto de GitHub Pages.
4. Publicar la versión resultante.

No se versiona `dist/` en el repositorio porque se genera automáticamente en cada despliegue. El código fuente completo sí se conserva en `src/`, `public/` y los archivos de configuración del proyecto.

## Estructura principal

```text
.
├── .github/workflows/     # Automatización de GitHub Pages
├── public/                # Imágenes, páginas estáticas, SEO y dominio
│   ├── analytics.js       # Eventos de Google Analytics
│   ├── CNAME              # Dominio personalizado
│   ├── 404.html           # Página de error personalizada
│   ├── robots.txt         # Directivas para buscadores
│   └── sitemap.xml        # Mapa XML del sitio
├── src/
│   ├── main.jsx           # Aplicación y rutas de contenido
│   └── styles.css         # Sistema visual responsive
├── index.html             # Metadatos SEO y punto de entrada
├── MANIFIESTO.md          # Documento doctrinal
├── package.json           # Scripts y dependencias
└── package-lock.json      # Versiones reproducibles
```

## SEO y analítica

El sitio incluye:

- Títulos y descripciones por página.
- URLs canónicas.
- Open Graph y Twitter Cards.
- Datos estructurados Schema.org para el proyecto, el autor y el libro.
- Sitemap y robots.txt.
- Página dedicada a Pedro Jesús Guzmán Ramos.
- Eventos de Analytics para navegación, contacto, compra del libro, redes sociales, fuentes externas y profundidad de lectura.

La analítica utiliza el identificador `G-Q20SJXYPDR`. No se envían nombres, correos ni campos personales a Google Analytics.

## Dominio y correo

El dominio configurado es `liberalismocomunal.org`. El contacto público del proyecto es `hola@liberalismocomunal.org`.

Los registros DNS del dominio deben conservar los registros MX del proveedor de correo. Para GitHub Pages se utilizan los registros indicados en la configuración del dominio del repositorio.

## Contenido y páginas

- `/` — Plataforma principal.
- `/proyecto/` — Presentación del proyecto.
- `/pedro-jesus-guzman-ramos/` — Página oficial del autor.
- `/liberalismo-peruano/` — Historia e ideas del liberalismo peruano.
- `/liberalismo-comunal/` — Doctrina del liberalismo comunal.
- `/libertarismo-peru/` — Libertarismo en el Perú.
- `/liberalismo-economico-peru/` — Mercado, propiedad y emprendimiento.
- `/descentralizacion-peru/` — Autogobierno y territorio.
- `/contacto/` — Información de contacto.
- `/privacidad/` — Política de privacidad.
- `/aviso-legal/` — Aviso legal.

## Mantenimiento recomendado

- Mantener actualizado Node.js y las dependencias.
- Ejecutar `npm run build` antes de cambios importantes.
- Revisar los enlaces externos periódicamente.
- Actualizar `public/sitemap.xml` al crear nuevas páginas.
- Publicar artículos y fuentes para fortalecer la autoridad editorial del proyecto.

## Licencia y uso

El contenido editorial, la identidad visual, las fotografías y las ilustraciones pertenecen a sus respectivos titulares. No se ha definido una licencia de software abierta para este repositorio.
