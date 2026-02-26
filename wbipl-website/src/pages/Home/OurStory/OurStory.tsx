import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="establishmentSectionWrap">
      <div className="container heroGrid1">
        <div className="heroCard">
          <div className="heroCardInner">
            <img src="/images/image-1-p-800.png" alt="Establishment and Expertise" />
          </div>
        </div>
        <div className="establishmentText">
          <h3
            style={{
              color: "#DCB900",
              textDecoration: "underline",
              textUnderlineOffset: "8px",
            }}
          >
          <b>Our Story</b>
          </h3>
          <h1>About Walls & Bridges</h1>
          <p>
            A pioneering fully integrated bridge construction and 
            heavy engineering company based in South India.
          </p>

          <p>
            With a state-of-the-art Captive RDSO (Research Design 
            and Standards Organization of the Indian Railways) approved 
            Steel bridge manufacturing facility, we are at the forefront 
            of innovation and excellence in our field.
          </p>
        </div>
      </div>
    </section>
  );
}