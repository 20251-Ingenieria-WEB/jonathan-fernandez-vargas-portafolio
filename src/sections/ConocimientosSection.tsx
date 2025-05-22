import KnowledgeCard from "../components/ConocimientoCard";

const conocimientos = [
  {
    icon: "/icons/front.png",
    title: "Web Development",
    description:
      "Diseño y desarrollo de interfaces de usuario interactivas utilizando tecnologías como HTML, CSS, JavaScript y frameworks modernos como React o Vue.",
  },
  {
    icon: "/icons/back.png",
    title: "Software Development",
    description:
      "Diseño, implementación y mantenimiento de aplicaciones y sistemas de software, abarcando desde aplicaciones de escritorio hasta servicios web.",
  },
  {
    icon: "/icons/fullstack.png",
    title: "Full Stack Development",
    description:
      "Desarrollo completo tanto del frontend como del backend de una aplicación, integrando bases de datos, servidores, APIs e interfaces de usuario.",
  },
  {
    icon: "/icons/analyitics.png",
    title: "Data Analyst",
    description:
      "Análisis, interpretación y visualización de datos para apoyar la toma de decisiones estratégicas mediante herramientas como Excel, SQL, Python y Power BI.",
  },
  {
    icon: "/icons/global-network.png",
    title: "Networks & CyberOps",
    description:
      "Gestión y protección de redes de datos, incluyendo la implementación de medidas de ciberseguridad y monitoreo de posibles amenazas.",
  },
  {
    icon: "/icons/big-data.png",
    title: "Big Data",
    description:
      "Procesamiento y análisis de grandes volúmenes de datos utilizando tecnologías como Hadoop, Spark y bases de datos NoSQL para obtener información valiosa.",
  },
  {
    icon: "/icons/Scrum.png",
    title: "Scrum",
    description:
      "Marco de trabajo ágil para la gestión y desarrollo de proyectos, enfocado en la entrega iterativa y colaboración constante dentro de equipos multidisciplinarios.",
  },
  {
    icon: "/icons/devops.png",
    title: "DevOps",
    description:
      "Cultura y conjunto de prácticas que integran el desarrollo y las operaciones para acelerar la entrega de software mediante automatización, integración continua y despliegue continuo.",
  },
];

export default function ConocimientosSection() {
  return (
    <section className="mb-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Conocimientos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {conocimientos.map((item, idx) => (
            <KnowledgeCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

