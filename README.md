# Portafolio | Hoja de Vida Profesional - Jonathan David Fernandez Vargas

Este es un portafolio profesional moderno y responsivo creado con **NextJs** y **TailwindCSS**, que presenta tus conocimientos, formación académica y enlaces sociales con un diseño atractivo y funcional.

## 🚀 Características principales

- Secciones para conocimientos (`Conocimientos`), educación (`Educación`) y más.
- Estilos personalizados usando TailwindCSS.
- Diseño responsivo con un `Sidebar Right` fijo para enlaces sociales.
- Animaciones en íconos e imágenes al pasar el cursor.
- Sección central con límite visual para evitar que se sobreponga con el sidebar.

## 📁 Estructura del proyecto

```
src/
│
├── components/
│   ├── ConocimientoCard.jsx
│   ├── EducacionCard.jsx
│   ├── Footer.tsx
│   ├── PortafolioCard.tsx
│   ├── SidebarLeft.jsx
│   └── SidebarRight.jsx
│
├── sections/
│   ├── ConocimientosSection.jsx
│   ├── EducacionSection.jsx
│
├── data/
│   ├── ...
│
├── App/
└── page.tsx
```

## 📦 Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/20251-Ingenieria-WEB/jonathan-fernandez-vargas-portafolio.git
cd jonathan-fernandez-vargas-portafolio
```

2. Instala dependencias:

```bash
npm install
# o
yarn install
```

3. Ejecuta en modo desarrollo:

```bash
npm run dev
# o
yarn dev
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 🧰 Tecnologías utilizadas

- **NextJs** - Framework principal
- **Tailwind CSS** - Estilos rápidos y utilitarios
- **React Icons** - Íconos sociales SVG listos para usar

## 📚 Componentes personalizados

### SidebarRight.jsx

Barra lateral derecha fija con íconos animados

### Secciones `Conocimientos` y `Educación`

## ✨ Animaciones

- Hover animado en íconos (`hover:scale-110`, `hover:rotate-6`)
- Transiciones suaves usando Tailwind

## 📦 Paquetes usados

```
"react-icons": "^4.x",
"tailwindcss": "^3.x",
"vite": "^4.x"
```

## 📝 Personalización

- Puedes modificar el contenido de las secciones en los arrays `conocimientos` y `educacion`.
- Cambia los enlaces sociales en `SidebarRight.jsx`.

## ✅ Mejores prácticas aplicadas

- Reutilización de componentes
- Separación de lógica y presentación
- Accesibilidad con `rel="noopener noreferrer"` en links externos

## 🧾 Licencia

MIT License. Libre de usar y modificar.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
