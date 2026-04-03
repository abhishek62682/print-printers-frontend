import React from 'react';

import Ps1 from '../../img/feature/line-shape.png'


const ProcessSection = () => {
    return (
        <section id="process-container" className="feature-section-3 section-padding pb-0 ">
            <div className="container custom-container-2">
                <div className="section-title text-center">
                    <span className='section-tags'>Our Process</span>
                    <h2>How It Works</h2>
                    <p className="section-subtitle">
From file approval to printing, packing, and delivery.
</p>
                    
                </div>
                <div className="fearure-wrapper-3">
                    <div className="line-shape">
                        <img src={Ps1} alt="img" />
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-icon">
                            {/* <img src={Ps2} alt="img" /> */}
                            📄

                        </div>
                        <div className="feature-content">
                            <span>Step 1</span>
                            <h3>
  Files Approved
  <br />
  & Proof Sent
</h3>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".4s">
                        <div className="feature-icon">
                            {/* <img src={Ps3} alt="img" /> */}
                            ✅

                        </div>
                        <div className="feature-content">
                            <span>Step 2</span>
                            <h3>
                                
                                Physical Proof
<br/>
                                    Approved
                            </h3>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                        <div className="feature-icon">
                            {/* <img src={Ps4} alt="img" /> */}
                            🖨️

                        </div>
                        <div className="feature-content">
                            <span>Step 3</span>
                            <h3>
                                
                                Printing &
<br/>
                                   Binding
                            </h3>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".7s">
                        <div className="feature-icon">
                            {/* <img src={Ps5} alt="img" /> */}
                            🔍
                        </div>
                        <div className="feature-content">
                            <span>Step 4</span>
                            <h3>
                                
                               Quality Check
<br/>
                                    & Packing
                            </h3>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".8s">
                        <div className="feature-icon">
                            {/* <img src={Ps6} alt="img" /> */}
                            🚢
                        </div>
                        <div className="feature-content">
                            <span>Step 5</span>
                            <h3>
                                
                                Shipped to
<br/>
                                    Your Door
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProcessSection;