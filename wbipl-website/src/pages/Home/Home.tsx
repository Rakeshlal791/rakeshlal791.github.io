import Establishment from "./Establishment/Establishment";
import GallerySlider2 from "./GallerySlider2/GallerySlider2";
import Highlights from "./Highlights/Highlights";
import Manufacturing from "./Manufacturing/Manufacturing";
import OurStory from "./OurStory/OurStory";
import ProjectsMarquee from "./ProjectsMarquee/ProjectsMarquee";
import Stats from "./Stats/Stats";
import Testament from "./Testament/Testament";
import "./home.css";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="section-tight">
          <GallerySlider2 />
          <ProjectsMarquee />
          <Manufacturing />
          <OurStory />
          <Stats />
          <Establishment />
          <Highlights />
          <Testament />
        </div>
      </section>
    </div>
  );
}