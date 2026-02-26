import OurProj from "./OurProj/OurProj";
import "./Projects.css";
import ProjectsGrid from "./ProjGrid/ProjGrid";

export default function Services() {
  return (
    <div>
      <section className="hero">
        <div className="section-tight">
          <OurProj />
          <ProjectsGrid />
        </div>
      </section>
    </div>
  );
}