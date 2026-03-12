import { useEffect, useState } from "react";
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
import { ArrowLeft, ArrowRight } from "lucide-react";
import httpClient from "../../config/http-client";

SwiperCore.use([Navigation, Autoplay]);


const TestimonialSectionS2 = () => {
  const [testimonialList, setTestimonialList] = useState([]);

  const getTestimonialList = async () => {
    try {
      const { data } = await httpClient("/testimonials/public");
      if (Array.isArray(data?.data)) {
        setTestimonialList(data.data);
      }
    } catch (err) {
      console.error("[Testimonials]", err);
    }
  };

  useEffect(() => {
    getTestimonialList();
  }, []);

  // Hide section entirely when no active testimonials
  if (!Array.isArray(testimonialList) || testimonialList.length === 0) {
    return null;
  }

  return (
    <section id="testimonial-container" className="testimonial-section-2 section-padding pb-0">
      <div className="client-1"><img src={Ts1} alt="" /></div>
      <div className="client-2"><img src={Ts2} alt="" /></div>
      <div className="client-3"><img src={Ts3} alt="" /></div>
      <div className="client-4"><img src={Ts4} alt="" /></div>
      <div className="client-5"><img src={Ts5} alt="" /></div>
      <div className="line-shape"><img src={Ts6} alt="" /></div>
      <div className="line-shape-2"><img src={Ts7} alt="" /></div>

      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow section-tags fadeInUp">Our Relationships</h6>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            What Our Clients Say
          </h2>
          <p>About Print Printers</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="swiper testimonial-slider-2">
              <Swiper
                spaceBetween={30}
                speed={2000}
                loop={testimonialList.length > 1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
              >
                {testimonialList.map((item) => (
                  <SwiperSlide key={item?._id}>
                    <div className="testimonial-box-items">

                      {/* Avatar — show image if imageUrl exists, else fallback initials */}
                      {item?.imageUrl ? (
                        <div
                          className="client-img bg-cover"
                          style={{
                            backgroundImage: `url(${process.env.REACT_APP_API_URL}/${item?.imageUrl})`,
                          }}
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
                        {item?.designation && (
                          <span>{item.designation}</span>
                        )}
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {testimonialList.length > 1 && (
                <div className="array-button justify-content-center">
                  <button className="array-prev"><ArrowLeft /></button>
                  <button className="array-next"><ArrowRight /></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionS2;