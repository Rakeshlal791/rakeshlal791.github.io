import "./EngineeringHighlights.css";

type Highlight = {
  value: string;
  label: string;
};

const HIGHLIGHTS: Highlight[] = [
  { value: "10+", label: "Locations handled simultaneously" },
  { value: "100+", label: "Stabilized Slopes, Zero failures" },
];

export default function EngineeringHighlights() {
  return (
    <section className="ehWrap">
      <div className="container">
        <div className="ehHeader">
          <h2 className="ehTitle">Geo-Tech Engineering</h2>
          <p className="ehDesc">
            Our geotechnical engineering division specializes in assessing soil and 
            rock conditions to provide innovative solutions for foundation design, 
            slope stability analysis, and ground improvement. With advanced technology 
            and in-depth expertise, we deliver comprehensive geotechnical services to support 
            the successful execution of civil engineering projects.
          </p>
        </div>

        <div className="ehGrid" role="list">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.label}
              role="listitem"
              className={`ehCard ${idx === 1 ? "ehCardDark" : "ehCardLight"}`}
            >
              <h3 className="ehValue">{item.value}</h3>
              <p className="ehLabel">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}