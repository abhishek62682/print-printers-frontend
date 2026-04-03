import React from "react";

// Import all book images
import ReligiousBooks from "../../img/print-services/religious-and-faith-based-books.webp";
import TradeBooks from "../../img/print-services/trade-books-and-novels.webp";
import ChildrenBooks from "../../img/print-services/childrens-books-and-board-books.webp";
import K12Books from "../../img/print-services/k-12-books.webp";
import CoffeeTableBooks from "../../img/print-services/coffee-table-books.webp";
import ComicBooks from "../../img/print-services/comics-books.webp";
import Cookbooks from "../../img/print-services/cookbooks-and-self-learning.webp";
import TrainingGuides from "../../img/print-services/training-guides.webp";

const printServices = [
  { id: "1", title: "Religious & Faith-Based Books", image: ReligiousBooks },
  { id: "2", title: "Trade Books & Novels", image: TradeBooks },
  { id: "3", title: "Children's Books & Board Books", image: ChildrenBooks },
  { id: "4", title: "K-12 & Educational Books", image: K12Books },
  { id: "5", title: "Coffee Table Books & Art Books", image: CoffeeTableBooks },
  { id: "6", title: "Comic Books & Graphic Novels", image: ComicBooks },
  { id: "7", title: "Cookbooks & Self-Learning Books", image: Cookbooks },
  { id: "8", title: "Training Guides & Manuals", image: TrainingGuides },
];

const PrintServicesSection = () => {
  return (
    <section
      id="service-container"
      className="product-section section-padding"
      aria-labelledby="print-services-title"
    >
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <span className="section-tags">Our Services</span>
          <h2 id="print-services-title">What We Print</h2>
          <p>Every book format. Every binding style. Every destination.</p>
        </div>

        {/* Services Grid */}
        <div className="tab-content">
          <div id="Tab1">
            <div className="row align-items-stretch">
              {printServices.map((service) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={service.id}>
                  <div className="product-box-items">
                    <div className="product-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="product-content">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Binding & Finishing Info */}
        <div className="shop-button text-center mt-5">
          <b style={{ color: "var(--color-text-primary)" }}>We Bind:</b> Perfect Bound · Case Bound · Saddle Stitch · Wire-O · Lay Flat · Comb Bound · Smyth Sewn · Coil / Spiral Bound &nbsp;&nbsp;<br />
          <b style={{ color: "var(--color-text-primary)" }}>We Finish:</b> Soft Touch · Gloss · Matte · Spot UV · Foil Stamping · Embossing · Debossing · French Flaps · Gilded Edges · Printed Edges
        </div>
      </div>
    </section>
  );
};

export default PrintServicesSection;