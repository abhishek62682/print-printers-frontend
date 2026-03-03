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
        <section className={"" + props.hclass} >
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
                                    <div className="blog-content">
                                        
                                        <h3>
                                            Ashish Bansal — Founder & Head of Business:

                                        </h3>
                                        <span>With over three decades of experience in print and paper, Ashish built Print Printers from the ground up on a single principle: that clients thousands of miles away deserve the same level of accountability and care as those next door. He remains the driving force behind every client relationship and commercial decision.
</span>
                                        
                                    </div>
                                </div>
                            </div>

                                                        <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" >
                                <div className="blog-box-items">
                                    <div className="blog-image-placeholder">
                                        <img src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                       
                                    </div>
                                    <div className="blog-content">
                                        
                                        <h3>
                                         Apoorv Bansal — Head of Client Communications:

                                        </h3>
                                        <span>Apoorv is the voice you'll hear most often — the person ensuring that every update, every proof response, and every shipping notification reaches you promptly and clearly. He believes that communication is not a support function; it is the product.

</span>
                                        
                                    </div>
                                </div>
                            </div>

                                                        <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" >
                                <div className="blog-box-items">
                                    <div className="blog-image-placeholder">
                                        <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                                       
                                    </div>
                                    <div className="blog-content">
                                        
                                        <h3>
                                           Ajay Pandit — Head of Production & QC:


                                        </h3>
                                        <span>Ajay is the guardian of quality at every stage of the manufacturing process. From pre-press colour management to final binding inspection, his team ensures that what leaves our partner factories matches — or exceeds — what was approved at proof stage.

</span>
                                        
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



