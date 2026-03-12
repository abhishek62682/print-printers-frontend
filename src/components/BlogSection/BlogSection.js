import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import Ws5 from "../../img/line.png";
import BlogBg from "../../img/news/bg.png";
import httpClient from "../../config/http-client";

SwiperCore.use([Navigation, Autoplay]);

const ClickHandler = () => window.scrollTo(10, 0);



const formatDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const BlogSection = ({ hclass = "", SubClass = "" }) => {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogList = async () => {
    try {
      const { data } = await httpClient("/blogs/public");
      if (Array.isArray(data?.data)) {
        setBlogList(data.data);
      }
    } catch (err) {
      console.error("[Blogs]", err);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  // Hide section entirely when no blogs
  if (!Array.isArray(blogList) || blogList.length === 0) return null;

  const showNavigation = blogList.length > 3;

  return (
    <section
      id="blog-container"
      className={`${hclass} testimonial-section-2`}
      style={{ backgroundImage: `url(${BlogBg})` }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="section-tags">Industry Insights</span>
          <h2>
            Get Update News & Blogs <br />
            <span>
              <img src={Ws5} alt="" /> By Company
            </span>
          </h2>
        </div>

        <div className={SubClass}>
          <div className="swiper blog-slider">
            <Swiper
              spaceBetween={30}
              speed={2000}
              loop={showNavigation}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              navigation={
                showNavigation
                  ? { nextEl: ".array-next", prevEl: ".array-prev" }
                  : false
              }
              breakpoints={{
                0:    { slidesPerView: 1 },
                768:  { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {blogList.map((blog) => (
                <SwiperSlide key={blog?._id}>
                  <div className="blog-box-items">
                    <div className="blog-image">
                      <img
                        src={
                          blog?.coverImage
                            ? `${process.env.REACT_APP_API_URL}/${blog.coverImage}`
                            : "/placeholder-blog.png"
                        }
                        alt={blog?.title ?? "blog image"}
                      />
                      <img
                        src={
                          blog?.coverImage
                            ? `${process.env.REACT_APP_API_URL}/${blog.coverImage}`
                            : "/placeholder-blog.png"
                        }
                        alt={blog?.title ?? "blog image"}
                      />
                    </div>

                    <div className="blog-content">
                      {Array.isArray(blog?.tags) && blog.tags.length > 0 && (
                        <div className="d-flex gap-2">
                          {blog.tags.map((tag, index) => (
                            <span className="rounded-pill" key={index}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3>
                        <Link
                          onClick={ClickHandler}
                          to={`/blog-single/${blog?.slug ?? ""}`}
                        >
                          {blog?.title ?? "Untitled"}
                        </Link>
                      </h3>

                      <ul className="blog-meta">
                        <li className="d-flex gap-2 align-items-center">
                          <UserRound strokeWidth="1.5" />
                          {blog?.createdBy?.username ?? "Admin"}
                        </li>
                        <li>
                          <i className="fa-regular fa-calendar"></i>
                          {formatDate(blog?.createdAt)}
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {showNavigation && (
              <div className="array-button justify-content-center">
                <button className="array-prev">
                  <ArrowLeft />
                </button>
                <button className="array-next">
                  <ArrowRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;