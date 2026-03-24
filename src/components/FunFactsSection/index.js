import React from "react";
import CountUp from "react-countup";

const funFacts = [
  {
    id: 1,
    value: 30,
    suffix: "+",
    title: "Years of Exporting Books",
    delay: ".2s",
    bgClass: ""
  },
  {
    id: 2,
    value: 1000,
    suffix: "+",
    title: "Titles Printed",
    delay: ".4s",
    bgClass: "bg-2"
  },
  {
    id: 3,
    value: "Free",
    suffix: "",
    title: "Physical Proof on Every Job",
    delay: ".6s",
    bgClass: "bg-3"
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    title: "Price Transparency — Quote to Invoice",
    delay: ".8s",
    bgClass: "bg-4"
  }
];

const FunFactsSection = ({ hclass }) => {
  return (
    <section className={hclass}>
      <div className="container">
        {/* Section Heading */}
        <div className="counter-text text-center">
          <h6 className="wow fadeInUp">
            Publishing houses trust us for a reason. <br /> Here are four of them.
          </h6>
        </div>

        {/* Counters */}
        <div className="row">
          {funFacts.map((fact) => (
            <div
              key={fact.id}
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={fact.delay}
            >
              <div className="counter-items">
                <div className={`counter-title ${fact.bgClass}`}>
                  <h2>
                    <span>
                      {typeof fact.value === "number" ? (
                        <CountUp end={fact.value} enableScrollSpy />
                      ) : (
                        fact.value
                      )}
                    </span>
                    {fact.suffix}
                  </h2>
                </div>
                <p className="text-center">{fact.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;