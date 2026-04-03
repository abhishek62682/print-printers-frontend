import React, { useState } from "react";
import "./style.css";
import { X } from "lucide-react";

const menus = [
  { id: 1, title: "Home", sectionId: "hero-container" },
  { id: 2, title: "About", sectionId: "about-container" },
  { id: 3, title: "Services", sectionId: "service-container" },
  { id: 4, title: "Process", sectionId: "process-container" },
  { id: 5, title: "Shipping & Sailing", sectionId: "shipping-sailing-container" },
  { id: 6, title: "Why Print Printers", sectionId: "why-print-printers-container" },
  { id: 7, title: "Our Relationships", sectionId: "testimonial-container" },
  { id: 8, title: "Blog", sectionId: "blog-container" },
  { id: 9, title: "Get a Quote", path: "/get-a-quote" },
];

const MobileMenu = () => {
  const [menuActive, setMenuState] = useState(false);

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(false)}>
            <X />
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item) => (
            <li key={item.id}>
              {item.sectionId ? (
                <a
                  href={`/#${item.sectionId}`}
                  onClick={() => setMenuState(false)}
                >
                  {item.title}
                </a>
              ) : (
                <a
                  href={item.path}
                  onClick={() => setMenuState(false)}
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="showmenu"
        onClick={() => setMenuState(!menuActive)}
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 40 40">
          <path d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default MobileMenu;