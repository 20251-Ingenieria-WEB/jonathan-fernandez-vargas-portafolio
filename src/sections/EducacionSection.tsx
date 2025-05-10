import EducationCard from "../components/EducacionCard";

const educacion = [
  {
    institution: "Universidad Nacional de Colombia",
    period: "2020 - Actualidad",
    title: "Ingeniería de Sistemas",
    description: "Enfoque en desarrollo de software, estructuras de datos, bases de datos y sistemas distribuidos.",
  },
  {
    institution: "Platzi",
    period: "2022 - 2023",
    title: "Carrera de Frontend Developer",
    description: "Cursos prácticos de HTML, CSS, JavaScript, React, NextJS, y herramientas modernas del frontend.",
  },
];

export default function EducacionSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Educación</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educacion.map((item, idx) => (
          <EducationCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
