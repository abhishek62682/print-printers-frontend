import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import Ts1 from '../../img/relationship/ORS1.webp';
import Ts2 from '../../img/relationship/ORS4.webp';
import Ts3 from '../../img/relationship/ORS2.webp';
import Ts4 from '../../img/relationship/ORS3.webp';
import Ts5 from '../../img/relationship/ORS5.webp';
import Ts6 from '../../img/testimonial/line-shape.png';
import Ts7 from '../../img/testimonial/line-shape-2.png';



import { ArrowLeft, ArrowRight } from "lucide-react";
import httpClient from "../../config/http-client";

SwiperCore.use([Navigation, Autoplay]);

const TestimonialsSection = () => {
  const [testimonialList, setTestimonialList] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await httpClient("/testimonials/public");
        if (Array.isArray(data?.data)) setTestimonialList(data.data);
      } catch (err) {
        console.error("[Testimonials]", err);
      }
    };
    fetchTestimonials();
  }, []);

  // Hide section if no testimonials
  if (!Array.isArray(testimonialList) || testimonialList.length === 0) return null;

  return (
    <section id="testimonial-container" className="testimonial-section-2 section-padding pb-0">
      {/* Decorative Client Images */}
      <div className="client-1 client-generic"><img src={Ts1} alt="client" /></div>
      <div className="client-2 client-generic"><img src={Ts2} alt="client" /></div>
      <div className="client-3 client-generic"><img src={Ts3} alt="client" /></div>
      <div className="client-4 client-generic"><img src={Ts4} alt="client" /></div>
      <div className="client-5 client-generic"><img src={Ts5} alt="client" /></div>
      <div className="line-shape"><img src={Ts6} alt="line-shape" /></div>
      <div className="line-shape-2"><img src={Ts7} alt="line-shape" /></div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <span className="wow section-tags fadeInUp">Our Relationships</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">What Our Clients Say</h2>
          <p>About Print Printers</p>
        </div>

        {/* Swiper Carousel */}
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="swiper testimonial-slider-2">
             <Swiper
  spaceBetween={30}
  speed={800}
  loop={testimonialList.length > 1}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
  cssMode={false}
>
                {testimonialList.map((item) => (
                  <SwiperSlide key={item?._id}>
                    <div className="testimonial-box-items">
                      {/* Avatar */}
                      {item?.imageUrl ? (
                        <div
                          className="client-img bg-cover"
                          style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${item.imageUrl})` }}
                        />
                      ) : (
                        <div
                          className="client-img bg-cover d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "#e8eaf6" }}
                        >
                          <span style={{ fontSize: "24px", fontWeight: 700, color: "#3f51b5" }}>
                            {item?.name?.charAt(0)?.toUpperCase() ?? "?"}
                          </span>
                        </div>
                      )}

                      <p>{item?.content ?? ""}</p>

                      <div className="client-content">
                        <h4>{item?.name ?? ""}</h4>
                        {item?.designation && <span>{item.designation}</span>}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              {testimonialList.length > 1 && (
               <div className="array-button justify-content-center">
  <button className="array-prev" aria-label="Previous slide">
    <ArrowLeft />
  </button>
  <button className="array-next" aria-label="Next slide">
    <ArrowRight />
  </button>
</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;