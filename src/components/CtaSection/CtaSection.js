import React from 'react';

import Ct1 from '../../img/cta-img.png';
import Ct3 from '../../img/t-shirt.png';
import CtBg from '../..//img/cta-bg.jpg';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section id="cta-section" className="cta-section section-padding pt-0">
            <div className="container">
                <div className="cta-wrapper bg-cover" style={{backgroundImage: `url(${CtBg})`} }>
                    <div className="cta-image">
                        <img src={Ct1} alt="img" />
                    </div>
                   
                    <div className="t-shirt-shape float-bob-x">
                        <img src={Ct3} alt="img" />
                    </div>
                    
                    <div className="section-title">
                        <h6 className="wow section-tags fadeInUp">Printing Service</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Ready to Print <br />
                                Something Great?
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} to="/about" className="theme-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">Get A Free Quote</Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;