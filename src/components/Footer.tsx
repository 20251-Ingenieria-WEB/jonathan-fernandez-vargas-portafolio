export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10 rounded-t-xl shadow-inner">
      <p className="text-sm">&copy; {new Date().getFullYear()} Jonathan Fernandez | Universidad de Antioquia. Todos los derechos reservados.</p>
      <p className="text-xs mt-1">Desarrollado con Next.js, TailwindCSS y TypeScript</p>
    </footer>
  );
}
