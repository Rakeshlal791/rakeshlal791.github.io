import "./Manufacturing.css";

export default function Manufacturing() {
  return (
    <section className="manufacturingSection">
      <div className="container manufacturing-info">
        <b>
          <h3
            style={{
              color: "#DCB900",
              textDecoration: "underline",
              textUnderlineOffset: "8px",
            }}
          >
            Manufacturing Unit In Hyderabad
          </h3>
        </b>

        <p>
          Factory is spread over an area of 8 acres With more than 75 Working Professionals and a wide range of machinery.
        </p>

        <div className="manufacturing-grid">
          <img src="/images/WBI-images-19-p-500.png" alt="Manufacturing Unit 1" />
          <img src="/images/WBI-images-22-p-500.png" alt="Manufacturing Unit 2" />
          <img src="/images/WBI-images-23-p-500.png" alt="Manufacturing Unit 3" />
          <img src="/images/WBI-images-24-p-500.png" alt="Manufacturing Unit 4" />
        </div>
      </div>
    </section>
  );
}