import "./FabricationHighlights.css";

type Highlight = {
  value: string;
  label: string;
};

const HIGHLIGHTS: Highlight[] = [
  { value: "1000MT+", label: "Inventory" },
  { value: "10", label: "Acre Facility" },
  { value: "300+", label: "Labor force" },
];

export default function FabricationHighlights() {
  return (
    <section className="fhWrap">
      <div className="container">
        <div className="fhHeader">
          <h2 className="fhTitle">Steel Fabrication</h2>
          <p className="fhDesc">
            Our state-of-the-art facilities and skilled craftsmen enable us to deliver
            high-quality steel fabrication services tailored to your specific requirements.
            From structural steel to custom components, we provide precision engineering and
            meticulous craftsmanship to ensure the success of your projects.
          </p>
        </div>

        <div className="fhGrid" role="list">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.label}
              role="listitem"
              className={`fhCard ${idx === 1 ? "fhCardDark" : "fhCardLight"}`}
            >
              <h3 className="fhValue">{item.value}</h3>
              <p className="fhLabel">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}