import PortfolioCard from "../components/PortafolioCard";

const proyectos = [
  {
    image: "/img/proyecto1.jpg",
    title: "Gestor de Tareas",
    shortDescription: "App para gestionar tareas con React y Firebase.",
    longDescription:
      "Este proyecto permite registrar tareas, marcarlas como completadas y almacenarlas en Firebase. Incluye autenticación con Google.",
    link: "https://github.com/usuario/todo-app",
  },
  {
    image: "/img/proyecto2.jpg",
    title: "Sistema de Cotizaciones",
    shortDescription: "Simulador de cotizaciones de transporte especial.",
    longDescription:
      "Calcula tarifas con base en tipo de vehículo, pasajeros y lugares de origen y destino. Implementado con Node.js y React.",
    link: "https://github.com/usuario/cotizador-transporte",
  },
  // Agrega más proyectos si deseas
];

export default function PortfolioSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Portafolio</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {proyectos.map((p, idx) => (
          <PortfolioCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
