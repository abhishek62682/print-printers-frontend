import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";

import BlogBg from '../../img/news/bg.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const LeaderSection = (props) => {
    const { blogAllbtn = true } = props
    return (
        <section id="leader-section" className={"" + props.hclass} >
            <div className="container">
                <div className="section-title flex-center text-center">
                    <span className="section-tags">Our Leaders</span>
                    <h2>
                        The People Behind Your Print

                    </h2>
                </div>
                <div className={"" +props.SubClass}>
                    <div className="row">
                        
                            <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" >
                                <div className="blog-box-items">
                                    <div className="blog-image-placeholder">
                                        <img src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />


                                         
                                        
                                    </div>
                                    <div className="team-content">
                                        <span>Founder & Head of Business</span>
                                        
                                        <h3>
                                            Ashish Bansal 

                                        </h3>
                                       <p>30 years building Print Printers on one principle: that clients thousands of miles away deserve the same accountability as those next door.
</p>
                                        
                                    </div>
                                </div>
                            </div>

                                                        <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" >
                                <div className="blog-box-items">
                                    <div className="blog-image-placeholder">
                                        <img src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                        
                                    </div>
                                    <div className="team-content">
                                        <span>Head of Client Relations</span>
                                        
                                        <h3>
                                         Apoorv Bansal 

                                        </h3>

                                        <p>Your primary contact — ensuring every update, proof response, and shipping notification reaches you promptly and clearly.

</p>
                                       
                                        
                                    </div>
                                </div>
                            </div>

                                                        <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" >
                                <div className="blog-box-items">
                                    <div className="blog-image-placeholder">
                                        <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                        
                                       
                                    </div>
                                    <div className="team-content">
                                        <span>Head of Production & QC</span>
                                        
                                        <h3>
                                           Ajay Pandit


                                        </h3>

                                        <p>Guardian of quality at every stage, from pre-press colour management to the final packing inspection before your shipment leaves.

</p>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default LeaderSection;



