import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
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
                 <Link
  to="/"
  className="header-logo"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img src="/logo.webp" alt="Print Printers Logo" />
</Link>
                </div>
              </div>

              <div className="mean__menu-wrapper desktop-menu">
                <div className="main-menu d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li><Link to="/#about-container">About</Link></li>
                      <li><Link to="/#service-container">Services</Link></li>
                      <li><Link to="/#process-container">Our Process</Link></li>
                      <li><Link to="/#testimonial-container">Our Relationships</Link></li>
                      <li><Link to="/#shipping-sailing-container">Shipping & Sailing</Link></li>
                      <li><Link to="/#why-print-printers-container">Why Print Printers</Link></li>
                      <li><Link to="/#blog-container">Blog</Link></li>
                      <li><Link to="/get-a-quote">Get a Quote</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

<div className="header-right mobileMenuWrap">
  <div className="header__hamburger">
    <MobileMenu />
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