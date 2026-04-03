import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import { ArrowLeft, ArrowRight, ImageOff, UserRound } from "lucide-react";

import httpClient from "../../config/http-client";

SwiperCore.use([Navigation, Autoplay, Pagination]);

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

  if (!Array.isArray(blogList) || blogList.length === 0)
    return <div className="section-padding pb-0"></div>;

  const showNavigation = blogList.length > 3;

  return (
    <>
      <style>{`
        /* ── Pagination dots ── */
        .blog-slider .swiper-pagination {
          position: relative;
         
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          bottom: unset;
        }

        .blog-slider .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ccc;
          opacity: 1;
          margin: 0 !important;
          transition: width 0.35s cubic-bezier(.4,0,.2,1),
                      border-radius 0.35s cubic-bezier(.4,0,.2,1),
                      background 0.35s ease;
        }

        .blog-slider .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: var(--color-dark, #f97316);
        }

        /* ── Card hover ── */
        .blog-box-items {
          transition: transform 0.28s cubic-bezier(.4,0,.2,1),
                      
        }

        .blog-box-items:hover {
          transform: translateY(-5px);
         
        }
      `}</style>

      <section
        id="blog-container"
        className={`${hclass} testimonial-section-2`}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="section-tags">Industry Insights</span>
            <h2>
              Get Update News & Blogs <br />
              <span>
                <div className="underline-theme underline-sm"></div> By Company
              </span>
            </h2>
          </div>

          <div className={SubClass}>
            <div className="swiper blog-slider">
              <Swiper
                spaceBetween={24}
                speed={600}
                loop={showNavigation}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".blog-pagination",
                  clickable: true,
                }}
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
                    <Link
                      to={`/blogs/${blog?.slug}`}
                      className="blog-box-items"
                      style={{ display: "block", textDecoration: "none", color: "inherit" }}
                    >
                      <div className="blog-image">
                        {blog?.coverImage ? (
                          <>
                            <img
                              src={`${process.env.REACT_APP_API_URL}/${blog.coverImage}`}
                              alt={blog?.coverImageAlt || ""}
                              className="blog-effect-image"
                            />
                            <img
                              src={`${process.env.REACT_APP_API_URL}/${blog.coverImage}`}
                              alt={blog?.coverImageAlt || ""}
                              className="blog-effect-image"
                            />
                          </>
                        ) : (
                          <div className="blog-cover-placeholder blog-cover-height">
                            <ImageOff size={28} strokeWidth={1.8} />
                            <span>No Cover Image</span>
                          </div>
                        )}
                      </div>

                      <div className="blog-content">
                        {Array.isArray(blog?.tags) && blog.tags.length > 0 && (
                          <div className="d-flex gap-2 flex-wrap">
                            {blog.tags.map((tag, index) => (
                              <span className="rounded-pill" key={index}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h3 style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}>
                          {blog?.title ?? "Untitled"}
                        </h3>

                        <ul className="blog-meta">
                          <li className="d-flex gap-2 align-items-center">
                            <UserRound strokeWidth="1.5" />
                            {blog?.authorName || blog?.createdBy?.username || "Admin"}
                          </li>
                          <li>
                            <i className="fa-regular fa-calendar"></i>
                            {formatDate(blog?.createdAt)}
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
                {showNavigation && (
                  <button className="array-prev">
                    <ArrowLeft size={16} />
                  </button>
                )}

                <div className="blog-pagination swiper-pagination" />

                {showNavigation && (
                  <button className="array-next">
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;