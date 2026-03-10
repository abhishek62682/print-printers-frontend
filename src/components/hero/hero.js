import React from 'react';
import { Link } from 'react-router-dom';
import Shape1 from '../../img/hero/circle-2.png'
import Shape2 from '../../img/hero/vector.png'
import Shape3 from '../../img/hero/circle.png'
import Shape4 from '../../img/hero/arrow-up.png'

import hero2 from '../../img/hero/information.png'



const hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="hero-section" className="hero-section hero-1 fix theme-bg"  >
            <div className="circle-shape">
                <img src={Shape1} alt="img" />
            </div>
            <div className="vector-shape float-bob-x">
                <img src={Shape2} alt="img" />
            </div>
            <div className="circle-shape-2">
                <img src={Shape3} alt="img" />
            </div>
            <div className="arrow-shape float-bob-y">
                <img src={Shape4} alt="img" />
            </div>
           
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-7">
                        <div className="hero-content ">
                            <span className="wow  section-tags fadeInUp">Print & Ship to USA · UK · Australia</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                India's Book Printing Partner for Publishers Worldwide
                              
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                               Three decades of printing excellence. Proudly manufactured in India. <br />Delivered to your door in New York, London, Melbourne and beyond.

                            </p>
                            <div className=' btn-wrapper d-flex gap-4 '>
 <Link to="/shop" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Get A Free Quote!</Link>

                                 <Link to="/shop" onClick={ClickHandler} className="theme-btn wow fadeInUp" data-wow-delay=".9s">Download Our Profile
</Link>

                                 
                            </div>
                            
                           
                        </div>
                    </div>
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-thumb">
                            <img src="https://prinoz-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-1.d25dc91a.png&w=1920&q=75" alt="hero-img" />
                            <div className="information-shape float-bob-x">
                                <img src={hero2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;