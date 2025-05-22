import PortfolioCard from "../components/PortafolioCard";

const proyectos = [
  {
    image: "/img/LogoJonathan.png",
    title: "Portafolio",
    shortDescription: "Mi portafolio personal",
    longDescription:
      "This is my space on GitHub Pages where I share my projects, research, and contributions to the open source world.",
    link: "https://jonathand77.github.io/mi-portafolio/",
  },
  {
    image: "/img/MovieTime.png",
    title: "Movie Time",
    shortDescription: "Sistema con las peliculas actuales del momento",
    longDescription:
      "This project consisted of creating this movie page as a web development practice project, where advanced HTML, CSS, JavaScript, and React techniques are applied with Bootstrap to create a functional and visually stunning platform.",
    link: "https://cotizador-servicios-transporte-cootraespeciales.vercel.app/",
  },
  {
    image: "/img/logo-cootraespeciales.svg",
    title: "Cootraespeciales | Cotizador de Viajes",
    shortDescription: "Sistema de cotizador de viajes",
    longDescription:
      "Web-based transportation quoting system in collaboration with the Colombian bus company COOTRAESPECIALES. Designed to simplify and automate transport cost estimation.",
    link: "https://cotizador-servicios-transporte-cootraespeciales.vercel.app/",
  },
  {
    image: "/img/LogoWWE-Database.png",
    title: "WWE Database",
    shortDescription: "Estado actual de la empresa WWE",
    longDescription:
      "Página informativa sobre WWE creada como práctica de desarrollo web con React y Bootstrap.",
    link: "https://jonathand77.github.io/mi-portafolio/",
  },
  {
    image: "/img/LogoTorneoFC.png",
    title: "Torneo FC",
    shortDescription: "Sistema de creación de torneos para fútbol.",
    longDescription:
      "Plataforma para generar torneos de fútbol, desarrollada con React, HTML, CSS y JavaScript.",
    link: "https://cotizador-servicios-transporte-cootraespeciales.vercel.app/",
  },
];

export default function PortfolioSection() {
  return (
    <section className="mb-10 max-w-[calc(100%-300px)] mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Portafolio</h2>
      <div
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {proyectos.map((p, idx) => (
          <div key={idx} className="snap-start shrink-0 w-80">
            <PortfolioCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
