import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Bgimg from "../../img/footer/footer-bg.jpg";
import { Instagram } from "lucide-react";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const FooterS2 = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="footer-section style-2 bg-cover"
        style={{ backgroundColor: `var(--color-dark)` }}
      >
        <div className="container">
          <div className="footer-widgets-wrapper style-2">
            <div className="row">
              <div
                className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/">
                      <img
                        src="/logo.png"
                        style={{ width: "200px" }}
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p className="text-white">
                      India's trusted book printing export partner since 1992.
                      Hassle-free, no-surprise delivery to publishers worldwide.
                    </p>
                    <div className="social-icon d-flex align-items-center gap-3">
                      <a
                        href="https://facebook.com/citicapchannels"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>

                      <a
                        href="https://instagram.com/citicapchannels"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={24} />
                      </a>

                      <a
                        href="https://linkedin.com/company/citicapchannels"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Usefull Links</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link onClick={ClickHandler} to="">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="">
                        What We Print
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="">
                        Our Process
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="">
                        Shipping & Sailing
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="">
                        Get A Quote
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 ps-lg-4 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link onClick={ClickHandler} to="/why-us">
                        Why Print Printers
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/relationships">
                        Our Relationships
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/faqs">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/capability-profile.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Capability Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Get In Touch</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <a href="mailto:print@printprinters.com">
                        print@printprinters.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919910087788">+91 99100 87788</a>
                    </li>
                    <li>
                      <a href="tel:+12024700880">+1 202 470 0880</a>
                    </li>
                    <li>Monday – Saturday, 10:00 AM – 8:00 PM IST</li>
                    <li>New Delhi, India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom style-2">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p className="wow fadeInLeft" data-wow-delay=".3s">
                Copyright © 2026 Print Printers · A division of Citicap
                Channels Pvt. Ltd. · All Rights Reserved.
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

     <div className="floating-wrapper">


       {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Go to top"
          className="bottomtotop-fixed-btn"
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="/logo.jpeg"
            alt="Go to top"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>
      )}

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/919910087788"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="whatsapp-fixed-btn"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
     </div>

     
      
    </>
  );
};

export default FooterS2;