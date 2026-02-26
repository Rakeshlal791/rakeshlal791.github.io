import "./OurProj.css";

export default function OurStory() {
  return (
    <section className="ourProjSectionWrap">
      <div className="container heroGrid1">
        <div className="heroCard">
          <div className="heroCardInner">
            <img src="/images/WBI-images-14-p-500.png" alt="ourProj and Expertise" />
          </div>
        </div>
        <div className="ourProjText">
          <h3
            style={{
              color: "#DCB900",
              textDecoration: "underline",
              textUnderlineOffset: "8px",
            }}
          >
          <b>Our Projects</b>
          </h3>
          <h1>Unveiling Our Portfolio</h1>
          <p>
            Explore Our Projects! Here, you'll discover the array of 
            endeavors we've pursued in Steel Fabrication, Bridge Construction, 
            and Geo-Tech Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}