import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function SidebarRight() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-16 bg-white border-l border-gray-200 flex flex-col items-center justify-center space-y-6 shadow-md z-20">
      <a
        href="https://github.com/Jonathand77"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
      >
        <FaGithub className="text-gray-700 hover:text-black text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathan-david-fernandez-vargas-800b04279/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform duration-300 hover:scale-110 hover:-rotate-6"
      >
        <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
      </a>
      <a
        href="https://www.facebook.com/jonathan.david.663485/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
      >
        <FaFacebook className="text-blue-700 hover:text-blue-900 text-2xl" />
      </a>
      <a
        href="https://www.instagram.com/jonathandvid77/?igsh=eGp6N2F4dTZnMDlu#"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-transform duration-300 hover:scale-110 hover:-rotate-6"
      >
        <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
      </a>
    </aside>
  );
}
