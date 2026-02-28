import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import About from '../../components/about/about';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import StoreSection from '../../components/StoreSection/StoreSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import FunFact from '../../components/FunFact/FunFact';
import WorksSection from '../../components/WorksSection/WorksSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';

import ServiceBg from '../../img/service/service-bg.jpg'


import api from "../../api";
import Ws6 from '../../img/feature/bg.png'

const HomePage = () => {

    const productsArray = api();

    

    const products = productsArray

    return (
        <Fragment>
            
            <Hero />
            
            <About />
            <MarqueeSection hclass={'marquee-section margin-top-8 mb-80'} />
            <ServiceSection hclass={'service-section bg-cover section-padding'} Bg={ServiceBg} />
            <StoreSection />
            <ProductSection
                
                products={products}
            />
           
            <FunFact hclass={'counter-section fix section-padding pt-0'} />
            <WorksSection hclass={'about-feature-section fix section-padding pt-0 bg-cover'} eclass={'about-feature-wrapper'} Ws6={Ws6} />
            <ProcessSection />
            
            <Testimonial />
            <BlogSection hclass="blog-section section-padding pt-0 bg-cover" SubClass="blog-wrapper" />
            <CtaSection />
            
            
        </Fragment>
    )
};
export default HomePage;