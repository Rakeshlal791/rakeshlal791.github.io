import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Row */}
        <div className="footer-top">

          {/* Logo (use same image path as Header) */}
          <div className="footer-logo">
            <img
                src="/images/walls__bridges_india_private_limited_logo-1.png"
                loading="lazy"
                alt="Walls and Bridges India Pvt Ltd"
                className="image-9"
            />
          </div>

          {/* Subscribe */}
          <div className="footer-subscribe-wrapper">
            <p className="footer-subscribe-title">
              Subscribe to our newsletter
            </p>

            <div className="footer-subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">

          <p className="footer-copy">
            © 2024 Walls and Bridges India Pvt. Ltd. (All rights reserved.)
          </p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/walls-&-bridges-india-private-limited/" target="_blank" rel="noreferrer">
              <img
                src="/images/linkedin.png"
                loading="lazy"
                alt="Walls and Bridges India Pvt Ltd"
                className="image-9"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/images/facebook.jpeg"
                loading="lazy"
                alt="Walls and Bridges India Pvt Ltd"
                className="image-9"
              />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img
                src="/images/x.png"
                loading="lazy"
                alt="Walls and Bridges India Pvt Ltd"
                className="image-9"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Built By Section */}
      <div className="footer-builtby">
        <span>Built by </span>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noreferrer"
          className="builtby-link"
        >
          © 2025 MindHurricane IT Services
        </a>
      </div>
    </footer>
  );
}