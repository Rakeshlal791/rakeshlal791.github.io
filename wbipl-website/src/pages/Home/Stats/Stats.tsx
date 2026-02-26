import "./Stats.css";

export default function Stats() {
  return (
    <section className="statsSectionWrap">
      <section className="statsSection">
        <div className="container statsGrid">
          <div className="statCard statLight">
            <img src="/images/Group-33791.png" alt="Manufacturing Unit 1" />
            <h2>50+</h2>
            <p>
              Bridges <br /> Constructed
            </p>
          </div>

          <div className="statCard statDark">
            <img src="/images/Group.png" alt="Manufacturing Unit 1" />
            <h2>50,000MT</h2>
            <p>
              Steel <br /> Fabricated
            </p>
          </div>

          <div className="statCard statLight">
            <img src="/images/Group-33792.png" alt="Manufacturing Unit 1" />
            <h2>120+ Km</h2>
            <p>
              Slopes <br /> Protected
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}