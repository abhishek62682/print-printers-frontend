import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

import { useNavigate, useLocation } from "react-router-dom";

const Header = (props) => {
  const ClickHandler = () => window.scrollTo(10, 0);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={props.hclass}>
      <div id="header-sticky" className={isSticky ? "sticky" : "header-1"}>
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link onClick={ClickHandler} to="/" className="header-logo">
                    <img src="/logo.png" alt="Print Printers Logo" />
                  </Link>
                </div>
              </div>

              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="hero-section">
                          Home
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="about-container">
                          About
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="service-container">
                          Services
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="process-container">
                          Process
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="shipping-sailing-container">
                          Shipping & Sailing
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="why-print-printers-container">
                          Why Print Printers
                        </SmartScrollLink>
                      </li>
                      <li>
                        <SmartScrollLink toPage="/" sectionId="blog-container">
                          Blog
                        </SmartScrollLink>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-right d-xl-none">
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <MobileMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;






const SmartScrollLink = ({ toPage = "/", sectionId, children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== toPage) {
      // Save target section in sessionStorage and navigate
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate(toPage);
    } else {
      // Already on page → scroll smoothly
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={`${toPage}#${sectionId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};