import Image from "next/image";

interface KnowledgeCardProps {
  icon: string; // Ruta local del ícono
  title: string;
  description: string;
}

export default function KnowledgeCard({ icon, title, description }: KnowledgeCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform">
      <Image src={icon} alt={title} width={50} height={50} className="mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
