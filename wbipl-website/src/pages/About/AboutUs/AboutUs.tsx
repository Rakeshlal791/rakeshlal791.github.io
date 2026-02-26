import "./AboutUs.css";

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
          <b>About Us</b>
          </h3>
          <h1>Elevating Connectivity: Walls & Bridges at the Forefront</h1>
          <p>
            Welcome to WBI, We are one of the leading fully integrated bridge construction 
            and heavy engineering companies in South India, with a Captive RDSO 
            (Research Design and Standards Organization of the Indian Railways) approved steel 
            bridge manufacturing facility.
          </p>
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
}