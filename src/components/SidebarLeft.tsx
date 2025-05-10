// src/components/SidebarLeft.tsx
import Image from "next/image";
import { idiomas } from "../data/idiomas";
import { lenguajes } from "../data/lenguajes";
import { habilidades } from "../data/habilidades";

export default function SidebarLeft() {
  return (
    <aside className="w-72 min-h-screen bg-gray-900 text-white p-6 fixed left-0 top-0 overflow-y-auto">
      {/* Foto y nombre */}
      <div className="text-center mb-6">
        <Image
          src="/img/Icon.png"
          alt="Foto de perfil"
          width={100}
          height={100}
          className="rounded-full mx-auto"
        />
        <h1 className="text-xl font-bold mt-4">Jonathan David Fernandez Vargas</h1>
        <p className="text-sm text-gray-400">Estudiante de Ingeniería | Web - Software developer</p>
      </div>

      {/* Contacto */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Contacto</h2>
        <p>📍 Edad: 24</p>
        <p>📍 Residencia: Bello, Colombia</p>
        <p>📞 +57 310 424 8655</p>
        <p>✉️ jonathanfdez62@gmail.com.com</p>
      </div>

      {/* Idiomas */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Idiomas</h2>
        {idiomas.map((idioma) => (
          <div key={idioma.nombre} className="mb-2">
            <p>{idioma.nombre}</p>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${idioma.porcentaje}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lenguajes de programación */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Lenguajes</h2>
        {lenguajes.map((leng) => (
          <div key={leng.nombre} className="mb-2">
            <p>{leng.nombre}</p>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${leng.porcentaje}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Habilidades extra */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Habilidades</h2>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {habilidades.map((hab, index) => (
            <li key={index}>{hab}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
