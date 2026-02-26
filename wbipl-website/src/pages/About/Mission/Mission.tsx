import "./Mission.css";

export default function Highlights() {
  return (
    <section className="highlightsWrap">
      <section className="highlightsSection">
        <div className="container">
          {/*<h2 className="highlightsTitle">Key Highlights</h2>*/}

          <div className="highlightsGrid">
            <div className="highlightItem">
              <h3>Our Story</h3>
              <p>
                Established in 2009 in Hyderabad, we have specialized in the manufacturing, 
                construction, and installation of steel structures, bridges, geotechnical 
                engineering projects, and track items such as turnout systems and fastening systems. 
                Our journey is marked by a relentless pursuit of excellence in engineering and innovation.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Our Expertise</h3>
              <p>
                We pride ourselves on our ability to design and execute technically complex projects, 
                either independently or in collaboration with major contractors, experts, 
                or prestigious academic institutions like IIT Hyderabad. 
                Our focus on cutting-edge technology and precision engineering has allowed us to undertake 
                and complete projects that set new industry benchmarks.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Commitment to Quality</h3>
              <p>
                Our association with Indian Railways is a testament to our commitment to producing premium 
                products that enhance the safety and efficiency of rail journeys at every stage. 
                We ensure complete control over our projects through end-to-end in-house manufacturing, installation, 
                and delivery processes.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Strategic Partnerships</h3>
              <p>
                We have strategic tie-ups with leading patented geotechnical product and consumable suppliers, 
                enabling us to offer unique and innovative solutions to our clients. 
                This network of collaborations ensures that we remain at the forefront of engineering advancements 
                and deliver unmatched value.
              </p>
            </div>

            <div className="highlightItem">
              <h3>Our Leadership</h3>
              <p>
                Our promoter team, with more than 40 years of relevant experience, 
                brings a wealth of knowledge and agility to our operations. 
                Their expertise and visionary leadership have been instrumental in driving our growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}