import React from 'react';

import Ws1 from '../../img/about/product-shape.png'
import Ws2 from '../../img/about/04.jpg'
import Ws3 from '../../img/about/05.jpg'
import Ws5 from '../../img/line.png'


const WorksSection = (props) => {
    return (
        <section className={"" +props.hclass} >
            
            <div className="container">
                <div className={"" +props.eclass}>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-feature-image">
                                    <img src={Ws2} alt="img"  className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s" />
                                        <div className="about-feature-image reveal image-anime">
                                        <img src={Ws3} alt="img" />
                                        </div>
                                      
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-feature-content">
                                <div className="section-title">
                                    <span className="wow section-tags fadeInUp">We Handle Everything</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Your Print. Managed 
                                        <span><img src={Ws5} alt="img" />From File to Front </span> Door.
                                    </h2>
                                </div>
                                <div className="box-items-area mt-3 mt-md-0">
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>You Approve Before We Print</h5>
                                        <p>
                                            Your physical proof arrives before a single production copy is made — see it, feel it, approve it..
                                        </p>
                                    </div>
                                    <div className="box-item active wow fadeInUp" data-wow-delay=".3s">
                                        <h5>One Contact. Always Reachable.</h5>
                                        <p>
                                            Your dedicated contact sends production updates at every milestone — you always know where your job is.
                                        </p>
                                    </div>
                                    <div className="box-item wow fadeInUp" data-wow-delay=".3s">
                                        <h5>Shipped to Your Warehouse. Not Just Your Port.</h5>
                                        <p>
                                            Door-to-door delivery includes customs clearance, freight and final mile — no surprises at your end.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorksSection;