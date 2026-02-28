import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Services from "../../api/Services";

import Shape from "../../img/service/shape.png";
import Shape2 from "../../img/line.png";

// install modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const ClickHandler = () => {
  window.scrollTo(0, 0);
};

const ServiceSection = ({ hclass }) => {
  return (
    <section className={"theme-bg " + hclass}>
      <div className="shape-image">
        <img src={Shape} alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h6 className="wow fadeInUp">More service us</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Create Stunning Print for
              <br />
              <span>
                Your Business <img src={Shape2} alt="img" />
              </span>
            </h2>
          </div>
          <Link
            onClick={ClickHandler}
            to="/service"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            See all Services
          </Link>
        </div>
      </div>

      <div className="service-wrapper">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
          pagination={{ clickable: true }}
          breakpoints={{
            575: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1199: { slidesPerView: 4 },
            1399: { slidesPerView: 5 },
          }}
        >
          {Services.slice(0, 6).map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card-items">
                <div className="service-cotent">
                  <h3>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-details/${service.slug}`}
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-image">
                  <img src={service.sImg} alt={service.title} />
                </div>
                <div className="service-btn">
                  <Link
                    onClick={ClickHandler}
                    to={`/service-details/${service.slug}`}
                    className="link-btn"
                  >
                    Read Out More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSection;