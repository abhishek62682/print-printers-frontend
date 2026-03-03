import React from 'react';

import Feature1 from '../../img/feature/tshirt.png'
import Feature2 from '../../img/feature/tshirt-2.png'
import Feature3 from '../../img/feature/return.png'

const FeatureSection = () => {
    return (
        <section className="feature-section fix  ">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                {/* <div className="icon">
                                    <img src={Feature1} alt="img" />
                                </div> */}
                                <div className="content">
                                    <h3>30+ </h3>
                                    <p>
                                        Years in the Printing Industry

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                {/* <div className="icon">
                                    <img src={Feature2} alt="img" />
                                </div> */}
                                <div className="content">
                                    <h3>6</h3>
                                    <p>
                                        Global Markets Served

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                {/* <div className="icon">
                                    <img src={Feature3} alt="img" />
                                </div> */}
                                <div className="content">
                                    <h3>0</h3>
                                    <p>
                                       Surprises — That's Our Promise
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;