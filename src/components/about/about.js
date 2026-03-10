
/* image  */
import Abimg1 from '../../img/about/dot-1.png'
import Abimg2 from '../../img/about/dot-2.png'
import Abimg3 from '../../img/about/circle.png'

import Abimg5 from '../../img/about/shape.png'
import Abimg6 from '../../img/about/01.jpg'
import Abimg7 from '../../img/about/02.jpg'
import Abimg8 from '../../img/about/03.jpg'
import Abimg9 from '../../img/line.png'

import Abimg11 from '../../img/about/author.png'
import Abimg12 from '../../img/about/line.png'
import { Link } from 'react-router-dom';

const about = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section id="about-container" className="about-section  section-padding pb-0 ">
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
                                

                                <div className='about-block-wrappper'>


                                    <p className='about-block'>
                                    Print Printers, a division of Citicap Channels Pvt. Ltd., was founded in New Delhi, India in 1992. What began as a specialist in book printing has grown into one of India's most trusted print export operations — serving publishers, corporations, and creative businesses across the United States, Canada, the United Kingdom, Australia, the Middle East, and South America.

                                </p>
<p className='about-block'>

                               We believe that offshore and overseas printing should never mean uncertainty. Many publishers have experienced the frustration of receiving books that don't match the approved proof, shipments that arrive late, or vendors who disappear when things go wrong. We built Print Printers to be the antidote of all of that.

                               <p>

                               </p>


As a specialist print export company, we sit at the intersection of two worlds: the manufacturing depth of the finest printing equipment and the communication standards of international clients. We speak both languages — and that translation is where the value lies.


</p>



                                </div>
                               
                                <div className="about-author">
                                   <a href="#leader-section" class="theme-btn wow fadeInUp" data-wow-delay=".3s">
      More About Us
    </a>
                                    <div className="author-image wow fadeInUp" data-wow-delay=".5s">
                                        <img src={Abimg11} alt="img" />
                                            <div className="content">
                                            <span>100+ Satisfied Global Clients <img src={Abimg12} alt="img" /></span>
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