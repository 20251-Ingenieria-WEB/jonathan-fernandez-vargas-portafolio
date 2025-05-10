import KnowledgeCard from "../components/ConocimientoCard";

const conocimientos = [
  {
    icon: "/icons/React.png",
    title: "React",
    description: "Framework de JavaScript para construir interfaces de usuario interactivas.",
  },
  {
    icon: "/icons/NextJS.png",
    title: "Next.js",
    description: "Framework de React con renderizado del lado del servidor y rutas automáticas.",
  },
  {
    icon: "/icons/Tailwind.png",
    title: "Tailwind CSS",
    description: "Framework de utilidades para construir interfaces modernas y responsivas.",
  },
  {
    icon: "/icons/TypeScript.png",
    title: "TypeScript",
    description: "Superset de JavaScript que permite tipado estático para una mayor robustez.",
  },
];

export default function ConocimientosSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Conocimientos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {conocimientos.map((item, idx) => (
          <KnowledgeCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
