import React from 'react';
import CountUp from 'react-countup';

const StatsShowcase = () => {
    return (
        <section className="feature-section fix" aria-labelledby="stats-showcase-title">
            <div className="container">
                <div className="feature-wrapper">
                    <h2 id="stats-showcase-title" className="visually-hidden">
                        Print Printers Statistics
                    </h2>

                    <div className="row justify-content-center g-4">
                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <div className="stat-number">
                                        <CountUp end={10} enableScrollSpy />M+
                                    </div>
                                    <p>Books Printed and Delivered</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <div className="stat-number">
                                        <CountUp end={100} enableScrollSpy />+
                                    </div>
                                    <p>Publishers Served Worldwide</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-4 wow fadeInUp" data-wow-delay=".7s">
                            <div className="feature-box-items">
                                <div className="content">
                                    <div className="stat-number">0</div>
                                    <p>Surprises That&apos;s Our Promise</p>
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