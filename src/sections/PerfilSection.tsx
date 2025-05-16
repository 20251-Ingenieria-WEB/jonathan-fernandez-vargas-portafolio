"use client";
import Image from "next/image";
import { useState } from "react";

export default function PerfilSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white rounded-xl p-6 shadow-md mb-8">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Foto de perfil */}
        <Image
          src="/img/Perfil.jpeg"
          alt="Foto de perfil"
          width={120}
          height={120}
          className="rounded-full border-4 border-gray-300"
        />

        {/* Nombre y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Jonathan David Fernandez Vargas
          </h2>
          <p className="text-gray-600 mt-2">
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

          {/* Botón que muestra el modal */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Más sobre mí
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
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
