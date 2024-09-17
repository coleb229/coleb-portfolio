import HeroSection from "@/components/custom/HeroSection";
import ProjectShowcase from "@/components/custom/ProjectsSection";
import ContactSection from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <HeroSection />
      <ProjectShowcase />
      <ContactSection />
    </main>
  );
}
