"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PerfilSection() {
  const [showModal, setShowModal] = useState(false);
  const fullName = "Jonathan David Fernandez Vargas";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;
      if (index > fullName.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white rounded-xl p-6 shadow-xl mb-8 animate-fade-in transition-all duration-700 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Foto de perfil grande y animada */}
        <div className="relative group transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <Image
            src="/img/Perfil.jpeg"
            alt="Foto de perfil"
            width={220}
            height={220}
            className="rounded-full border-4 border-indigo-300 shadow-2xl"
          />
          <div className="absolute bottom-2 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md animate-bounce">
            ¡Hola!
          </div>
        </div>

        {/* Nombre y descripción */}
        <div className="flex-1">
          <h2 className="text-4xl font-mono font-bold text-indigo-600 whitespace-nowrap overflow-hidden border-r-2 border-indigo-600 pr-1 animate-typing">
            {typedName}
          </h2>
          <p className="text-gray-700 mt-4 text-justify leading-relaxed">
            Soy una persona apasionada por el aprendizaje continuo y la
            resolución creativa de problemas. Mi experiencia abarca diversos
            campos, desde la programación y la investigación hasta la atención
            al cliente y la consultoría. Me destaco por mi habilidad para
            comunicarme de manera clara y efectiva, así como por mi capacidad
            para adaptarme rápidamente a nuevos entornos y desafíos. Disfruto
            trabajando en equipo, colaborando para alcanzar objetivos comunes y
            aportando ideas innovadoras. Mi enfoque proactivo y mi dedicación me
            han permitido desarrollar habilidades sólidas en múltiples áreas,
            como lo son el desarrollo web y desarrollo de software, siempre
            buscando superar expectativas y generar un impacto positivo en
            cualquier proyecto en el que participe.
          </p>

          {/* Botón mejorado */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 px-5 py-2 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm"
          >
            Más sobre mí
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">¡Hola!</h3>
            <p className="text-gray-600">
              Soy un apasionado por la tecnología y el desarrollo de interfaces
              interactivas. Me encanta trabajar en equipo y siempre estoy en
              busca de aprender nuevas herramientas para mejorar mis
              habilidades.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
