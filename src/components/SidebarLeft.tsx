import Image from "next/image";
import { idiomas } from "../data/idiomas";
import { lenguajes } from "../data/lenguajes";
import { habilidades } from "../data/habilidades";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";

export default function SidebarLeft() {
  return (
    <aside className="w-72 h-screen fixed top-0 left-0 z-50 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg p-6 flex flex-col">
      <div className="overflow-y-auto flex-1 space-y-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pr-1">
        {/* Foto y nombre */}
        <div className="text-center">
          <Image
            src="/img/Icon.png"
            alt="Foto de perfil"
            width={100}
            height={100}
            className="rounded-full mx-auto border-2 border-gray-500 shadow-md"
          />
          <h1 className="text-xl font-bold mt-4">
            Jonathan David Fernandez Vargas
          </h1>
          <p className="text-sm text-gray-400">
            Estudiante de Ingeniería | Web - Software Developer
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">
            Contacto
          </h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaUser className="text-blue-400" />
              Edad: 24
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" />
              Bello, Colombia
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              +57 310 424 8655
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-300" />
              jonathanfdez62@gmail.com
            </li>
          </ul>
        </div>

        {/* Idiomas */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">
            Idiomas
          </h2>
          {idiomas.map((idioma) => (
            <div key={idioma.nombre} className="mb-2">
              <p className="text-sm">{idioma.nombre}</p>
              <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                <div
                  className="bg-blue-500 h-2 transition-all duration-300 ease-in-out"
                  style={{ width: `${idioma.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lenguajes */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">
            Lenguajes
          </h2>
          {lenguajes.map((leng) => (
            <div key={leng.nombre} className="mb-2">
              <p className="text-sm">{leng.nombre}</p>
              <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                <div
                  className="bg-green-500 h-2 transition-all duration-300 ease-in-out"
                  style={{ width: `${leng.porcentaje}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Habilidades */}
        <div>
          <h2 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-1">
            Habilidades
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {habilidades.map((hab, i) => (
              <li key={i} className="hover:text-white transition duration-200">
                {hab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
