import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import ContactForm from "../components/ContactFrom/ContactForm";
import PageTitle from "../components/pagetitle/PageTitle";

const RequestAQuote = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Fragment>
      <Helmet>
        <title>Get a Quote | Print Printers</title>
        <meta
          name="description"
          content="Request a custom quote from Print Printers for printing, packaging, shipping and business printing solutions."
        />
        <link rel="canonical" href="https://printprinters.com/get-a-quote" />
      </Helmet>

      <PageTitle pageTitle="Quote" pagesub="Get a Quote" />

      <div>
        <section className="contact-section section-bg-2">
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