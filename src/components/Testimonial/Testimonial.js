import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import Ts1 from '../../img/testimonial/client-2.png'
import Ts2 from '../../img/testimonial/client-3.png'
import Ts3 from '../../img/testimonial/client-4.png'
import Ts4 from '../../img/testimonial/client-5.png'
import Ts5 from '../../img/testimonial/client-6.png'
import Ts6 from '../../img/testimonial/line-shape.png'
import Ts7 from '../../img/testimonial/line-shape-2.png'
import Tclient1 from '../../img/testimonial/client-1.png'
import Tclient2 from '../../img/testimonial/client-2.png'
import Tclient3 from '../../img/testimonial/client-3.png'
import { ArrowBigDownDash, ArrowLeft, ArrowRight, ArrowUpNarrowWide, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

SwiperCore.use([Navigation, Autoplay]);
const TestimonialSectionS2 = () => {
    useEffect(() => {

    }, []);

    return (
        <section id="testimonial-section" className="testimonial-section-2 section-padding pb-0">
            <div className="client-1">
                <img src={Ts1} alt="img" />
            </div>
            <div className="client-2">
                <img src={Ts2} alt="img" />
            </div>
            <div className="client-3">
                <img src={Ts3} alt="img" />
            </div>
            <div className="client-4">
                <img src={Ts4} alt="img" />
            </div>
            <div className="client-5">
                <img src={Ts5} alt="img" />
            </div>
            <div className="line-shape">
                <img src={Ts6} alt="img" />
            </div>
            <div className="line-shape-2">
                <img src={Ts7} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow section-tags fadeInUp">Our Relationships</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        What Our Clients Say 
                    </h2>
                    <h3>About Print Printers</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="swiper testimonial-slider-2">
                            <Swiper
                                spaceBetween={30}
                                speed={2000}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".array-next",
                                    prevEl: ".array-prev",
                                }}
                            >
<SwiperSlide>
  <div className="testimonial-box-items">

    <div
      className="client-img bg-cover"
      style={{ backgroundImage: `url(${Tclient1})` }}
    ></div>

    <p>
      “Your professionalism and perfectionism has enabled us to have total confidence in the printed materials you produce for us.”
    </p>

    <div className="client-content">
      <h4>Darby Binder</h4>
      <span>
        Operations Manager · Rapid Guide LLC, USA · Client since 2002 · ~3.5M booklet copies printed
      </span>
    </div>

  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="testimonial-box-items">

    <div
      className="client-img bg-cover"
      style={{ backgroundImage: `url(${Tclient2})` }}
    ></div>

    <p>
      “Ash from Print Printers provided service beyond what was quoted. We are totally satisfied — and our customers say it has a quality feel.”
    </p>

    <div className="client-content">
      <h4>Chris Holton-Smith</h4>
      <span>
        The Teacup Project · Florida, USA · 1,000 lay-flat concealed Wire-O books · Completed during COVID-19 lockdown
      </span>
    </div>

  </div>
</SwiperSlide>

                              

                              
                            </Swiper>

                            <div className="array-button justify-content-center">
                                <button className="array-prev">
<ArrowLeft />
                                </button>
                                <button className="array-next">
                                  <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSectionS2;



