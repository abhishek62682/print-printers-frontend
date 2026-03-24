import React, { Fragment, useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import StatsShowcase from "../components/StatsShowcase";
import MarqueeSection from "../components/MarqueeSection";
import About from "../components/AboutSection";
import ValuePillarsSection from "../components/ValuePillarsSection";

import PrintServicesSection from "../components/PrintServicesSection";
import FunFactsSection from "../components/FunFactsSection";

import PrintManagementSection from "../components/PrintManagementSection";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import BlogSection from "../components/BlogSection/BlogSection";

import ShippingSailingSection from "../components/ShipingSailingSection";
import WhyPrintPrintersSection from "../components/WhyPrintPrintersSection";
import LeaderSection from "../components/LeaderSection/LeaderSection";

import httpClient from "../config/http-client";
const HomePage = () => {
  const [blogList, setBlogList] = useState([]);

  async function FectchBlogList() {
    const { data } = await httpClient("/blogs/public");

    setBlogList(data?.data);
  }

  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      sessionStorage.removeItem("scrollToSection");
    }

    FectchBlogList();
  }, []);

  return (
    <Fragment>
      <Hero />
      <StatsShowcase />
      <MarqueeSection />
      <About />
      <LeaderSection
        hclass="blog-section section-padding  bg-cover"
        SubClass="blog-wrapper"
      />
      <ValuePillarsSection />

      <PrintServicesSection />

      <FunFactsSection hclass={"counter-section fix "} />

      <PrintManagementSection
        hclass={"about-feature-section  fix section-padding pb-0 bg-cover"}
        eclass={"about-feature-wrapper"}
      />
      <ProcessSection />

      <TestimonialsSection />
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
