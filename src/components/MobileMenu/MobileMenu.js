import React, { useState } from "react";
import "./style.css";

const menus = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Services", link: "#services" },
  { id: 4, title: "Process", link: "#process" },
  { id: 5, title: "Shipping & Sailing", link: "#shipping" },
  { id: 6, title: "Why Print Printers", link: "#why" },
  { id: 7, title: "Our Relationships", link: "#relationships" },
  { id: 8, title: "Blog", link: "#blog" },
  { id: 9, title: "Contact", link: "#contact" },
];

const MobileMenu = () => {
  const [menuActive, setMenuState] = useState(false);

  return (
    <div>
      {/* Mobile Sidebar */}
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(false)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                onClick={() => setMenuState(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Button */}
      <div
        className="showmenu mobail-menu"
        onClick={() => setMenuState(!menuActive)}
      >
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;