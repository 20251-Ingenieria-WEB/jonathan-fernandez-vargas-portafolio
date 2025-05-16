import SidebarLeft from "../components/SidebarLeft";
import PerfilSection from "../sections/PerfilSection";
import ConocimientosSection from "../sections/ConocimientosSection";
import EducacionSection from "../sections/EducacionSection";
import PortfolioSection from "../sections/PortafolioSection";
import SidebarRight from "../components/SidebarRight";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex">
      <SidebarLeft />
      <div className="ml-72 mr-16 p-6 w-full bg-gray-100 min-h-screen flex flex-col justify-between">
        <div>
          <PerfilSection />
          <ConocimientosSection />
          <EducacionSection />
          <PortfolioSection />
        </div>
        <Footer />
      </div>
      <SidebarRight />
    </main>
  );
}