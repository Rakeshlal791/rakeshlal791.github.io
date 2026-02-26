import BusinessVerticals from "./BusinessVerticals/BusinessVerticals";
import FabricationHighlights from "./FabricationHighlights/FabricationHighlights";
import EngineeringHighlights from "./EngineeringHighlights/EngineeringHighlights";
import ROB from "./ROB/ROB";
import PE from "./PE/PE";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <section className="hero">
        <div className="section-tight">
          <BusinessVerticals />
          <FabricationHighlights />
          <EngineeringHighlights />
          <ROB />
          <PE />
        </div>
      </section>
    </div>
  );
}