import React from 'react';
import CountUp from 'react-countup';

const StatsShowcase = () => {
    return (
        <section className="feature-section fix">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <h3>
                                        <CountUp end={10} enableScrollSpy />M+
                                    </h3>
                                    <p>Books Printed and Delivered</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <h3>
                                        <CountUp end={100} enableScrollSpy />+
                                    </h3>
                                    <p>Publishers Served Worldwide</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <h3>0</h3>
                                    <p>Surprises That's Our Promise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsShowcase;