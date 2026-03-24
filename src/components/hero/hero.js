import React from 'react';


import HeroSection from "../../img/hero/hero-section.png";
import { Link } from 'react-router-dom';


const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="hero-section" className="hero-section hero-1 fix theme-bg"  >
           
           
           
           
           
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content ">
                            <span className="wow  section-tags tags-light fadeInUp">Print & Ship to USA · Europe · Australia</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                India's Book Printing Partner for Publishers Worldwide
                              
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                               Three decades of printing excellence. Proudly manufactured in India. <br />Delivered to your door in New York, London, Melbourne and beyond.

                            </p>
                            <div className=' btn-wrapper d-flex gap-4 '>
 <Link to="/contact" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Get A Free Quote!</Link>

                                 <Link to="#!" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Download Our Profile
</Link>

                                 
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-lg-5 p-0 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-thumb">
                            <img src={HeroSection} alt="hero-img" />
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;