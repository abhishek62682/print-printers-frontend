import React from "react";

import ProofFirst from "../../img/why-print-printers/wpp-proof-first.webp";
import CommunicationUpdates from "../../img/why-print-printers/wpp-communication-updates.webp";
import Certifications from "../../img/why-print-printers/wpp-certifications.webp";

// Section 13: Why Print Printers
const WhyPrintPrintersSection = (props) => {
  const { hclass = "", SubClass = "", blogAllbtn = true } = props;

  // Static data for this section
  const reasons = [
    {
      id: "1",
      title: "Proof First. Press Second.",
      slug: "proof-first-press-second",
      screens: ProofFirst,
      description:
        "We ship a physical proof to you before a single production copy is made. Hold it. Approve it. Then we print.",
      tags: "Reason 1",
    },
    {
      id: "2",
      title: "Full Visibility. Start to Ship.",
      slug: "full-visibility-start-to-ship",
      screens: CommunicationUpdates,
      description:
        "Weekly press floor updates and proactive shipping notifications. Complete visibility, zero effort on your end.",
      tags: "Reason 2",
    },
    {
      id: "3",
      title: "Compliant. Certified. Proven.",
      slug: "compliant-certified-proven",
      screens: Certifications,
      description:
        "Certified, audited, and compliant. So your team can approve us fast and focus on the books.",
      tags: "Reason 3",
    },
  ];

  return (
    <section
      id="why-print-printers-container"
      className={`blog-section section-padding pb-0 bg-cover ${hclass}`}
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <h6 className="section-tags">Why Print Printers</h6>
          <h2>
            Because Offshore Printing
            <br />
            <span>
              <div className="underline-theme"></div>Shouldn't Feel Risky
            </span>
          </h2>
          <p>
            We built Print Printers to solve the real problems publishers face
            when sourcing from India.
          </p>
        </div>

        <div className={SubClass}>
          <div className="row justify-content-center">
            {reasons?.map((reason) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top"
                key={reason?.id}
              >
                <div className="blog-box-items">
                  <div className="blog-image">
                    <img src={reason?.screens} alt={reason?.title} />
                    <img src={reason?.screens} alt={reason?.title} />
                  </div>
                  <div className="blog-content">
                    <span>{reason?.tags}</span>
                    <h3>{reason?.title}</h3>
                    <p>{reason?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional "See All Reasons" Button */}
          {blogAllbtn && (
            <div
              className="news-button text-center mt-5 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <a
                className="theme-btn wow fadeInUp"
                data-wow-delay=".3s"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("about-container");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See All Reasons
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyPrintPrintersSection;