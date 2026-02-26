import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navbar-logo-left" role="banner">
      <div className="navbar-logo-left-container shadow-three">
        <div className="container-copy">
          <div className="navbar-wrapper" ref={menuRef}>
            {/* Brand */}
            <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
              <img
                src="/images/walls__bridges_india_private_limited_logo-1.png"
                loading="lazy"
                alt="Walls and Bridges India Pvt Ltd"
                className="image-9"
              />
              <h1 className="heading-9">
                Walls and Bridges
                <br />
                India Pvt Ltd
                <br />
              </h1>
            </NavLink>

            <div className="div-block-17">
              {/* Nav */}
              <nav
                className={`nav-menu-wrapper ${open ? "is-open" : ""}`}
                aria-label="Primary"
              >
                <ul className="nav-menu-two">
                  <li>
                    <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Products &amp; Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Projects
                    </NavLink>
                  </li>

                  {/* In your HTML, Team + Career are in the same <li>. Keeping it similar:
                  <li className="nav-group">
                    <NavLink to="/team" className="nav-link" onClick={() => setOpen(false)}>
                      Team
                    </NavLink>
                    <NavLink
                      to="/career"
                      className="nav-link"
                      onClick={() => setOpen(false)}
                    >
                      Career
                    </NavLink>
                  </li>*/}
                  <li>
                    <NavLink to="/team" className="nav-link">Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/career" className="nav-link">Career</NavLink>
                  </li>
                </ul>
              </nav>

              {/* Right-side badge/logo */}
              <img
                src="/images/RDSO.png"
                loading="lazy"
                width={183.5}
                alt="RDSO"
                className="image-8"
              />

              {/* Hamburger */}
              <button className="menu-button" type="button" onClick={() => setOpen(v => !v)}>
               <span className="w-icon-nav-menu">
                <span />
               </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional overlay for mobile */}
      {open && <div className="w-nav-overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}