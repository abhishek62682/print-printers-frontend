import React from "react";
import WeHandleImage from "../../img/about/we-handle-everything.webp";

const features = [
  {
    title: "You Approve Before We Print",
    description:
      "Your physical proof arrives before a single production copy is made — see it, feel it, approve it.",
  },
  {
    title: "One Contact. Always Reachable.",
    description:
      "Your dedicated contact sends production updates at every milestone — you always know where your job is.",
  },
  {
    title: "Shipped to Your Warehouse. Not Just Your Port.",
    description:
      "Door-to-door delivery includes customs clearance, freight and final mile — no surprises at your end.",
  },
];

const PrintManagementSection = ({ hclass, eclass }) => {
  return (
    <section className={hclass}>
      <div className="container">
        <div className={eclass}>
          <div className="row g-4 align-items-center">
            {/* Image */}
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="about-feature-image">
                  <img
                    src={WeHandleImage}
                    alt="We handle everything"
                    className="wow img-custom-anim-top"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.1s"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <div className="about-feature-content">
                <div className="section-title">
                  <span className="wow section-tags fadeInUp">We Handle Everything</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Your Print. Managed{" "}
                    <span>
                      <div className="underline-theme"></div>From File to Front
                    </span>{" "}
                    Door.
                  </h2>
                </div>

                {/* Features List */}
                <div className="box-items-area mt-3 mt-md-0">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="box-item active wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintManagementSection;