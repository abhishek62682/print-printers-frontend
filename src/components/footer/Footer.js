import { Link } from "react-router-dom";


import Bgimg from "../../img/footer/footer-bg.jpg";
import {  Instagram } from "lucide-react";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const FooterS2 = () => {
  return (
    <footer
      className="footer-section style-2 bg-cover"
      style={{ backgroundImage: `url(${Bgimg})` }}
    >
      
      {/* <div className="star-shape float-bob-y">
        <img src={Shape2} alt="img" />
      </div> */}
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link  to="/">
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
                    <Link to="#">
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
                    </Link>

                    <Link to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.35-6.99L3.7 22H1l7.02-8.02L2 2h6.828l4.84 6.37L18.244 2zm-2.394 18h1.885L8.1 3.9H6.18L15.85 20z" />
                      </svg>
                    </Link>

                    <Link to="#">
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
                    </Link>

                    <Link to="#">
                      <Instagram size={24} />
                    </Link>
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
     <a href="mailto:print@printprinters.com">print@printprinters.com</a>
  </li>
  <li>
    <a href="tel:+919910087788">+91 99100 87788</a>
  </li>
  <li>
    <a href="tel:+12024700880">+1 202 470 0880</a>
  </li>
  <li>
     Monday – Saturday, 10:00 AM – 8:00 PM IST
  </li>
  <li>
     New Delhi, India
  </li>
</ul>


              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-2">

          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
  Copyright © 2026 Print Printers · A division of Citicap Channels Pvt. Ltd. · All Rights Reserved.
</p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link  to="/">
Privacy Policy
                </Link>
              </li>
             
              <li>
                <Link  to="/contact">
                  Terms of Use 
                </Link>
              </li>
              <li>
                <Link  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterS2;
