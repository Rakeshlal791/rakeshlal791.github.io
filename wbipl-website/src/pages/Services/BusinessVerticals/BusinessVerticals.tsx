import "./BusinessVerticals.css";

type Vertical = {
  title: string;
  icon: string;
};

const VERTICALS: Vertical[] = [
  { title: "Steel\nFabrication", icon: "/images/Group.png" },
  { title: "Geotechnical\nEngineering", icon: "/images/Group-33792.png" },
  { title: "Bridge\nConstruction", icon: "/images/Group-33791.png" },
  { title: "Precision\nEngineering", icon: "/images/PrecisionEngineering.svg" },
];

export default function BusinessVerticals() {
  return (
    <section className="bvWrap" aria-label="Business Verticals">
      <div className="container">
        <div className="bvShell">
          <h2 className="bvTitle">Business Verticals</h2>

          <div className="bvGrid">
            {VERTICALS.map((v) => (
              <div className="bvCard" key={v.title}>
                <h3 className="bvCardTitle">
                  {v.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>

                <div className="bvIconWrap" aria-hidden="true">
                  <img className="bvIcon" src={v.icon} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}