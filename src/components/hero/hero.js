import React from 'react';


import HeroSection from "../../img/hero/hero-section.webp";
import { Link } from 'react-router-dom';


const hero = () => {
    

    return (
        <section id="hero-container" className="hero-section hero-1 fix theme-bg"  >
           
           
           
           
           
            <div className="hero-container">
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-lg-7">
                        <div className="hero-content ">
                            <span className="wow  section-tags tags-light fadeInUp">Print & Ship to USA · Europe · Australia</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                India's Book Printing Partner for Publishers Worldwide
                              
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                               Three decades of printing excellence. Proudly manufactured in India. Delivered to your door in New York, London, Melbourne and beyond.

                            </p>
                            <div className=' btn-wrapper d-flex gap-3 gap-md-4 '>
 <Link to="/get-a-quote"  className="theme-btn wow fadeInUp" data-wow-delay=".9s">Get A Free Quote!</Link>


                                 
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 wow fadeInUp" data-wow-delay=".4s">
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