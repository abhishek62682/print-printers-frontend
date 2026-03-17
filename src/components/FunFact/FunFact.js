import React from 'react'
import CountUp from 'react-countup';
const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="counter-text text-center">
                    <h6 className="wow fadeInUp">Publishing houses trust us for a reason. <br /> Here are four of them.</h6>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="counter-items">
                            <div className="counter-title">
                                <h2><span><CountUp end={30} enableScrollSpy /></span>+</h2>
                            </div>
                            <p className="text-center">Years of Exporting Books</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="counter-items">
                            <div className="counter-title bg-2">
                                <h2><span><CountUp end={1000} enableScrollSpy /></span>+</h2>
                            </div>
                            <p className="text-center">Titles Printed</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="counter-items">
                            <div className="counter-title bg-3">
                                <h2><span>Free</span></h2>
                            </div>
                            <p className="text-center">Physical Proof on Every Job</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="counter-items">
                            <div className="counter-title bg-4">
                                <h2><span><CountUp end={100} enableScrollSpy /></span>%</h2>
                            </div>
                            <p className="text-center">Price Transparency — Quote to Invoice</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;