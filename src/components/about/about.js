import React from 'react';

/* image  */
import Abimg1 from '../../img/about/dot-1.png'
import Abimg2 from '../../img/about/dot-2.png'
import Abimg3 from '../../img/about/circle.png'
import Abimg4 from '../../img/about/cap.png'
import Abimg5 from '../../img/about/shape.png'
import Abimg6 from '../../img/about/01.jpg'
import Abimg7 from '../../img/about/02.jpg'
import Abimg8 from '../../img/about/03.jpg'
import Abimg9 from '../../img/line.png'
import Abimg10 from '../../img/icon/01.svg'
import Abimg11 from '../../img/about/author.png'
import Abimg12 from '../../img/about/line.png'
import Abimg13 from '../../img/icon/02.svg'
import { Link } from 'react-router-dom';

const about = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about-section  section-padding ">
            <div className="dot-shape">
                <img src={Abimg1} alt="img" />
            </div>
            <div className="dot-shape-2">
                <img src={Abimg2} alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape float-bob-y">
                                    <img src={Abimg3} alt="img" />
                                </div>
                                
                                <div className="shape-img">
                                    <img src={Abimg5} alt="img" />
                                </div>
                                <div className="about-image-1 wow fadeInUp">
                                    <img src={Abimg6} alt="img" />
                                </div>
                                <div className="about-image-2">
                                    <img src={Abimg7} alt="img" />
                                </div>
                                <div className="about-image-3">
                                    <img src={Abimg8} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className=" section-tags wow fadeInUp">About Us</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Three Decades of Print. 

                                        <span> One Unwavering Promise. <img src={Abimg9} alt="img" /></span>
                                    </h2>
                                </div>
                                {/* <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    A full administration printing background. Print shirts for yourself
                                    or your online business Beautiful, customizable template,
                                </p> */}

                                <div className='about-block-wrappper'>


                                    <p className='about-block'>
                                    Print Printers, a division of Citicap Channels Pvt. Ltd., was founded in New Delhi, India in 1992. What began as a specialist in book printing has grown into one of India's most trusted print export operations — serving publishers, corporations, and creative businesses across the United States, Canada, the United Kingdom, Australia, the Middle East, and South America.

                                </p>
<p className='about-block'>

                                We have never believed that offshore printing should mean uncertainty. Too many publishers have experienced the frustration of receiving books that don't match the approved proof, shipments that arrive weeks late, or vendors who disappear when things go wrong. We built Print Printers to be the antidote to all of that. 

                               <p>

                               </p>


Our reputation was earned — and continues to be earned — by delivering a no-surprise, hassle-free customer experience that creates long-term, sustainable relationships. When you work with us, you don't just get a printer. You get a dedicated print partner who is invested in your success.


</p>

<p className='about-block'>

    As a specialist print management and export company, we sit at the intersection of two worlds: the deep manufacturing expertise of India's finest print factories, and the communication standards, business practices, and expectations of our international clients. We speak both languages fluently — and that translation is where the real value lies.

</p>

                                </div>
                                {/* <div className="row g-4">
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon-box-items active">
                                            <div className="icon-items">
                                                <div className="icon">
                                                    <img src={Abimg10} alt="img" />
                                                </div>
                                                <h6>Smooth Automation</h6>
                                            </div>
                                            <span>
                                                No matter how much you know
                                                about a part icular medical
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon-box-items">
                                            <div className="icon-items">
                                                <div className="icon bg-2">
                                                    <img src={Abimg13} alt="" />
                                                </div>
                                                <h6>Custom Branding Tools</h6>
                                            </div>
                                            <span>
                                                No matter how much you know
                                                about a part icular medical
                                            </span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="about-author">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".3s">more about us</Link>
                                    <div className="author-image wow fadeInUp" data-wow-delay=".5s">
                                        <img src={Abimg11} alt="img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <img src={Abimg12} alt="img" /></span>
                                            </div>
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

export default about;