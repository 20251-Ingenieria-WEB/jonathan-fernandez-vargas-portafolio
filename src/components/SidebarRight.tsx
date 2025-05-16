import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SidebarRight() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-16 bg-white border-l border-gray-200 flex flex-col items-center justify-center space-y-6 shadow-md z-20">
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-700 hover:text-black text-2xl" />
      </a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
      </a>
      <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-sky-500 hover:text-sky-700 text-2xl" />
      </a>
    </aside>
  );
}
