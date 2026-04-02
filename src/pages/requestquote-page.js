import React, { Fragment, useEffect } from "react";

import ContactForm from "../components/ContactFrom/ContactForm";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/pagetitle/PageTitle";

const RequestAQuote = () => {
  const { pathname } = useLocation();

  // Scroll to top whenever we enter the contact page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Fragment>
      <PageTitle pageTitle="Quote" pagesub="Get a Quote" />
      <div>
        <section className="contact-section   section-bg-2">
          <div className="container">
            <div className="contact-area">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>


    </Fragment>
  );
};

export default RequestAQuote;
