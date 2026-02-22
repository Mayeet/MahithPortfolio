import Hero from "@/components/Hero";
import BackgroundAbout from "@/components/BackgroundAbout";
import WorkTimeline from "@/components/WorkTimeline";
import AcademicGrid from "@/components/AcademicGrid";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Gratitude from "@/components/Gratitude";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white pb-32">
      <Hero />
      <BackgroundAbout />
      <WorkTimeline />
      <AcademicGrid />
      <ProjectsCarousel />
      <Gratitude />
    </main>
  );
}
