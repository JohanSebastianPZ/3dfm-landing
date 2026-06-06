# PrintLab 3D — Landing Page

Sitio web de presentación para **PrintLab 3D**, servicio de impresión 3D profesional. Incluye visor 3D interactivo, galería de trabajos, tabla de precios y formulario de contacto.

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
- **Servicios** — descripción de los servicios ofrecidos
- **Galería** — trabajos realizados con filtros por categoría
- **Precios** — tabla de planes
- **Testimonios** — opiniones de clientes
- **Contacto** — formulario con envío vía Web3Forms

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JohanSebastianPZ/3dfm-landing.git
cd 3dfm-landing

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores
```

## Variables de entorno

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=   # Access key de web3forms.com
PUBLIC_SITE_URL=               # URL del sitio (ej. https://printlab3d.com)
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Producción

```bash
# Build
npm run build

# Preview local del build
npm run preview
```

El deploy a producción se hace automáticamente al hacer push a `main` via Vercel.
