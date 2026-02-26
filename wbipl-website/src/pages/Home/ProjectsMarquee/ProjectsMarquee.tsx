import Marquee from "react-fast-marquee";
import "./projectsMarquee.css";

type Project = { name: string; logoSrc: string };

const projects: Project[] = [
  { name: "Project 1", logoSrc: "/images/projects/ashoka.jpg" },
  { name: "Project 2", logoSrc: "/images/projects/gayatri-p-500.jpg" },
  { name: "Project 3", logoSrc: "/images/projects/gcl.png" },
  { name: "Project 4", logoSrc: "/images/projects/gvr.jpg" },
  { name: "Project 5", logoSrc: "/images/projects/kmc-p-500.png" },
  { name: "Project 6", logoSrc: "/images/projects/ksipl2.png" },
  { name: "Project 7", logoSrc: "/images/projects/navayuga-p-500.png" },
  { name: "Project 8", logoSrc: "/images/projects/nrc.jpg" },
  { name: "Project 9", logoSrc: "/images/projects/vishwa.png" },
];

export default function ProjectsMarquee() {
  return (
    <section className="pm" aria-label="Projects marquee">
      <Marquee
        speed={50}
        direction="left"
        gradient={true}
        autoFill
        gradientColor={"#ffffff"}   // match your background
        gradientWidth={50}                // width of fade area (px)
      >
        {projects.map((p) => (
          <div className="pm-item" key={p.name} title={p.name}>
            <img className="pm-logo" src={p.logoSrc} alt={p.name} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}