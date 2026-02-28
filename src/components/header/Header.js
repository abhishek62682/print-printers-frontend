import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MobileMenu from "../MobileMenu/MobileMenu";

const Header = (props) => {
 

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

 

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                    <img
                      src="/logo.png"
                      
                      alt="Print Printers Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>

                      <li>
                        <a href="#about">About</a>
                      </li>

                      <li>
                        <a href="#services">Services</a>
                      </li>

                      <li>
                        <a href="#process">Process</a>
                      </li>

                      <li>
                        <a href="#shipping">Shipping & Sailing</a>
                      </li>

                      <li>
                        <a href="#why">Why Print Printers</a>
                      </li>

                      <li>
                        <a href="#relationships">Our Relationships</a>
                      </li>

                      <li>
                        <a href="#blog">Blog</a>
                      </li>

                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="header-right  d-xl-none  ">
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
