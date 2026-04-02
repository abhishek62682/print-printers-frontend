


import AboutOne from "../../img/about/about-us/about-one.webp";
import AboutTwo from "../../img/about/about-us/about-two.webp";
import AboutThree from "../../img/about/about-us/about-three.webp";

const about = () => {
    
    return (
        <section id="about-container" className="about-section  section-padding pb-0 ">
           
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                
                                
                                
                                <div className="about-image-1 wow fadeInUp">
                                    <img src={AboutOne} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src={AboutTwo} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <img src={AboutThree} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className=" section-tags wow fadeInUp">About Us</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Three Decades of Print. 

                                        <span> One Unwavering Promise.

                                            <div className='underline-theme'></div>

                                        </span>
                                    </h2>
                                </div>
                                

                                <div className='about-block-wrappper'>


                                    <p className='about-block'>
                                    Print Printers, a division of Citicap Channels Pvt. Ltd., was founded in New Delhi, India in 1992. What began as a specialist in book printing has grown into one of India's most trusted print export operations — serving publishers, corporations, and creative businesses across the United States, Canada, the United Kingdom, Australia, the Middle East, and South America.

                                </p>
<p className='about-block'>

                               We believe that offshore and overseas printing should never mean uncertainty. Many publishers have experienced the frustration of receiving books that don't match the approved proof, shipments that arrive late, or vendors who disappear when things go wrong. We built Print Printers to be the antidote of all of that.

                               


As a specialist print export company, we sit at the intersection of two worlds: the manufacturing depth of the finest printing equipment and the communication standards of international clients. We speak both languages — and that translation is where the value lies.


</p>



                                </div>
                               
                                <div className="about-author">
                                   <a href="#leader-section" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
      More About Us
    </a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;