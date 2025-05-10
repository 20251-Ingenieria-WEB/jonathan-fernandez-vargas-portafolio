import SidebarLeft from "../components/SidebarLeft";
import PerfilSection from "../sections/PerfilSection";
import ConocimientosSection from "../sections/ConocimientosSection";
import EducacionSection from "../sections/EducacionSection";
import PortfolioSection from "../sections/PortafolioSection";

export default function Home() {
  return (
    <main className="flex">
      <SidebarLeft />
      <div className="ml-72 p-6 w-full bg-gray-100 min-h-screen">
        <PerfilSection />
        <ConocimientosSection />
        <EducacionSection />
        <PortfolioSection />
      </div>
    </main>
  );
}