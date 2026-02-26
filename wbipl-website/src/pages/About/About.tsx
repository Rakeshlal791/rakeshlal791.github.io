import "./About.css";
import AboutUs from "./AboutUs/AboutUs"
import Mission from "./Mission/Mission"

export default function About() {
  return (
    <div>
      <section className="hero">
        <div className="section-tight">
          <AboutUs />
          <Mission />
        </div>
      </section>
    </div>
  );
}