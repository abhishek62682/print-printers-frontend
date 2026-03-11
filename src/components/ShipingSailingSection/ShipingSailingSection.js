import React from "react";

const destinations = [
  { flag: "🇺🇸", city: "New York",           country: "USA",       days: "27" },
  { flag: "🇺🇸", city: "Los Angeles",        country: "USA",       days: "36" },
  { flag: "🇬🇧", city: "United Kingdom",     country: "UK",        days: "25" },
  { flag: "🇦🇺", city: "Melbourne / Sydney", country: "Australia", days: "35" },
  { flag: "🇨🇦", city: "Toronto",            country: "Canada",    days: "35" },
];

const packaging = [
  {
    num: "01",
    title: "Shrink-Wrapped Bundles",
    desc: "Books are bundled in groups, shrink-wrapped individually to prevent movement and moisture damage during the ocean journey.",
  },
  {
    num: "02",
    title: "Double-Walled Export Cartons",
    desc: "Every carton is well labelled, double-walled and reinforced for ocean freight — built to survive handling at multiple ports without crushing.",
  },
  {
    num: "03",
    title: "Pallet-Stacked and Strapped",
    desc: "Cartons are stacked on pallets, stretch-wrapped and strapped for container loading — your shipment arrives exactly as it left our press.",
  },
];

const ShippingSailingSection = () => {
  return (
    <section id="shipping-sailing-container" className="shipping-section section-padding pb-0 ">
      <div className="container">

        {/* ── Section Title ── */}
        <div className="section-title text-center">
          <h6 className="wow section-tags fadeInUp">Getting Your Books to You</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Ocean Freight, Fully Managed.
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay=".4s"
            style={{
              fontFamily: "var(--font-secondary)",
              fontSize: "var(--font-size-body)",
              color: "var(--color-text-secondary)",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            All sailing times are port to port, from New Delhi once loaded on vessel.
            Door-to-door delivery is included on every order. We can also work on
            ex-works terms if preferred — just let us know at the time of quoting.
          </p>
        </div>

        {/* ── Destination Cards ── */}
        <div className="wow fadeInUp shipping-cards-grid" data-wow-delay=".45s">
          {destinations.map((d, i) => (
            <div key={i} className="ship-card">

              {/* TOP: flag + city + country */}
              <div className="ship-card-top">
                <span className="ship-flag">{d.flag}</span>
                <div className="ship-city">{d.city}</div>
                <div className="ship-country">{d.country}</div>
              </div>

              {/* BOTTOM: days */}
              <div className="ship-card-bottom">
                <div className="ship-days">{d.days}</div>
                <div className="ship-days-lbl">Days</div>
                <div className="ship-note">Port to port</div>
                <div className="ship-note">Once loaded on vessel</div>
              </div>

            </div>
          ))}
        </div>

        {/* ── Packaging Block ── */}
        <div
          className="wow fadeInUp"
          data-wow-delay=".5s"
          style={{ borderTop: "1px solid #e8e8e8", paddingTop: 52}}
        >
          <div className="section-title text-center" style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "32px",
                fontWeight: 700,
                color: "var(--color-dark)",
                margin: 0,
              }}
            >
              Export-Grade Packaging on Every Order
            </h3>
          </div>

          <div className="packaging-grid">
            {packaging.map((item, i) => (
              <div key={i} className="pkg-card">
                <span className="pkg-num">{item.num}</span>
                <h4 className="pkg-title">{item.title}</h4>
                <p className="pkg-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      
    </section>
  );
};

export default ShippingSailingSection;