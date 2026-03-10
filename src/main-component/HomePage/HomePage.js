import React, { Fragment, useEffect } from "react";
import Hero from "../../components/hero/hero";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import About from "../../components/about/about";
import StoreSection from "../../components/StoreSection/StoreSection";
import ProductSection from "../../components/ProductSection/ProductSection";
import FunFact from "../../components/FunFact/FunFact";
import WorksSection from "../../components/WorksSection/WorksSection";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import CtaSection from "../../components/CtaSection/CtaSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import ShippingSailingSection from "../../components/ShipingSailingSection/ShipingSailingSection";
import WhyPrintPrintersSection from "../../components/WhyPrintPrintersSection/WhyPrintPrintersSection";
import LeaderSection from "../../components/LeaderSection/LeaderSection";
import MarqueeSectionS4 from "../../components/MarqueeSectionS4/MarqueeSectionS4";
const HomePage = () => {
  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollToSection");
    }
  }, []);

  return (
    <Fragment>
      <Hero />
      <FeatureSection />
      <MarqueeSectionS4 />
      <About />
      <LeaderSection
        hclass="blog-section section-padding  bg-cover"
        SubClass="blog-wrapper"
      />
      <StoreSection />
      <ProductSection />
      <FunFact hclass={"counter-section fix "} />
      <WorksSection
        hclass={"about-feature-section  fix section-padding pb-0 bg-cover"}
        eclass={"about-feature-wrapper"}
      />
      <ProcessSection />
      <Testimonial />
      <ShippingSailingSection />
      <WhyPrintPrintersSection />
      <BlogSection
        hclass="blog-section section-padding  bg-cover"
        SubClass="blog-wrapper"
      />
      <CtaSection />
    </Fragment>
  );
};
export default HomePage;
