import React, { useState } from "react";
import "./style.css";
import { Menu, X } from "lucide-react";

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
           <X />
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
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 40 40" fill="#0f0f0f">
                                        <path d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z" fill="#0f0f0f"></path>
                                    </svg>
      </div>
    </div>
  );
};

export default MobileMenu;