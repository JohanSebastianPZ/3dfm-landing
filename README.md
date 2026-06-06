# 3DFM — 3D Factory Maker

Sitio web oficial de **3D Factory Maker**, empresa colombiana de fabricación avanzada que combina ingeniería, automatización y manufactura para transformar conceptos en soluciones reales.

🌐 [www.3dfactorymaker.com](https://www.3dfactorymaker.com)

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build) |
| UI interactiva | [React 19](https://react.dev) |
| Visor 3D | [Three.js](https://threejs.org) + [React Three Fiber](https://r3f.docs.pmnd.rs) + [Drei](https://github.com/pmndrs/drei) |
| Animaciones | [Framer Motion](https://www.framer.motion.com) |
| Estilos | [Tailwind CSS 4](https://tailwindcss.com) |
| Emails | [Web3Forms](https://web3forms.com) |
| Deploy | [Vercel](https://vercel.com) |
| Lenguaje | TypeScript |

## Secciones

- **Hero** — presentación principal con animaciones
- **Clientes** — barra de logos
- **Servicios** — División Industrial y División Customs
- **Galería** — trabajos realizados con filtros por categoría
- **Precios** — tabla de planes
- **Testimonios** — opiniones de clientes
- **Contacto** — formulario con envío vía Web3Forms

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
git clone https://github.com/JohanSebastianPZ/3dfm-landing.git
cd 3dfm-landing
npm install
cp .env.example .env
# Editar .env con los valores correspondientes
```

## Variables de entorno

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=   # Access key de web3forms.com
PUBLIC_SITE_URL=               # URL del sitio (ej. https://www.3dfactorymaker.com)
```

## Comandos

```bash
npm run dev       # Servidor de desarrollo en localhost:4321
npm run build     # Build de producción
npm run preview   # Preview local del build
npm run lint      # Linter
```

El deploy a producción se hace automáticamente al hacer push a `main` via Vercel.

## Contacto

Para consultas sobre el sitio: [info@3dfactorymaker.com](mailto:info@3dfactorymaker.com)
