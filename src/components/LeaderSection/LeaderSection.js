import React from "react";


import AshishBansalProfile from "../../img/leaders/ashish-bansal.webp";
import AjayPanditProfile from "../../img/leaders/ajay-pandit.webp";
import ApoorvBansalProfile from "../../img/leaders/apoorv-bansal.webp";


const leaders = [
  {
    name: "Ashish Bansal",
    role: "Founder & Head of Business",
    image: AshishBansalProfile,
    description:
      "30 years building Print Printers on one principle: that clients thousands of miles away deserve the same accountability as those next door.",
  },
  {
    name: "Apoorv Bansal",
    role: "Head of Client Relations",
    image: ApoorvBansalProfile,
    description:
      "Your primary contact ensuring every update, proof response, and shipping notification reaches you promptly and clearly.",
  },
  {
    name: "Ajay Pandit",
    role: "Head of Production & QC",
    image: AjayPanditProfile,
    description:
      "Guardian of quality at every stage, from pre-press colour management to the final packing inspection before your shipment leaves.",
  },
];

const LeaderSection = ({ hclass = "", SubClass = "" }) => {
  return (
    <section id="leader-section" className={hclass}>
      <div className="container">
        <div className="section-title flex-center text-center">
          <span className="section-tags">Our Leaders</span>
          <h2>The People Behind Your Print</h2>
        </div>

        <div className={SubClass}>
          <div className="row">
            {leaders?.map((leader, index) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top"
                key={index}
              >
                <div className="blog-box-items">
                  <div className="blog-image-placeholder">
                    <img src={leader?.image} alt={leader?.name} />
                  </div>
                  <div className="team-content">
                    <span>{leader?.role}</span>
                    <h3>{leader?.name}</h3>
                    <p>{leader?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderSection;