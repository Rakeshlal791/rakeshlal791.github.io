import "./PE.css";

type Highlight = {
  value: string;
  label: string;
};

const HIGHLIGHTS: Highlight[] = [
  { value: "99.9%", label: "On-Time Delivery" },
  { value: "1,00,000+", label: "Components Delivered" },
  { value: "0.001mm", label: "Tolerance Achieved" },
];

export default function FabricationHighlights() {
  return (
    <section className="peWrap">
      <div className="container">
        <div className="peHeader">
          <h2 className="peTitle">Steel Fabrication</h2>
          <p className="peDesc">
            Our state-of-the-art facilities and skilled craftsmen enable us to deliver
            high-quality steel fabrication services tailored to your specific requirements.
            From structural steel to custom components, we provide precision engineering and
            meticulous craftsmanship to ensure the success of your projects.
          </p>
        </div>

        <div className="peGrid" role="list">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.label}
              role="listitem"
              className={`peCard ${idx === 1 ? "peCardDark" : "peCardLight"}`}
            >
              <h3 className="peValue">{item.value}</h3>
              <p className="peLabel">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}