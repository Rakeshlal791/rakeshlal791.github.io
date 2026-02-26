import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlightsWrap">
      <section className="highlightsSection">
        <div className="container">
          <h2 className="highlightsTitle">Key Highlights</h2>

          <div className="highlightsGrid">
            <div className="highlightItem">
              <h3>Technical Excellence</h3>
              <p>
                We specialize in the design and execution of technically complex projects, either
                independently or in collaboration with major contractors and esteemed academic
                institutions like IIT Hyderabad.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Collaboration with Indian Railways</h3>
              <p>
                Walls &amp; Bridges takes immense pride in its association with Indian Railways,
                contributing premium products that enhance safety and reliability in rail journeys
                at every stage.
              </p>
            </div>

            <div className="highlightItem">
              <h3>End-to-End Solutions</h3>
              <p>
                With in-house manufacturing, installation, and delivery capabilities, we ensure
                complete control and seamless execution of projects from start to finish.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Strategic Partnerships</h3>
              <p>
                We have forged strategic tie-ups with leading suppliers of patented Geotech products
                and consumables, enabling us to offer unique and innovative solutions to our clients.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Experienced Leadership</h3>
              <p>
                Led by an agile promoter team with over 40 years of relevant experience, Walls &amp;
                Bridges is committed to delivering excellence in every endeavor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}