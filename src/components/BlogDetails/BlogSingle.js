import React from 'react';
import { Link } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar/BlogSidebar';



const ClickHandler = () => window.scrollTo(10, 0);

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year:  "numeric",
      month: "short",
      day:   "numeric",
    });
  } catch {
    return "";
  }
};

const BlogSingle = ({ blogItem, recentBlogs = [] }) => {
  return (
    <section className="news-section-3 section-padding section-bg-2">
      <div className="container">
        <div className="news-details-wrapper">
          <div className="row g-5 align-items-start">

            {/* ── Main Content ── */}
            <div className="col-12 col-lg-8">
              <div className="single-news-post">

                {/* Banner Image */}
                {blogItem?.bannerImage && (
                  <div className="details-image">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${blogItem.bannerImage}`}
                      alt={blogItem?.title ?? "blog banner"}
                    />
                  </div>
                )}

                <div className="details-content">

                  {/* Meta */}
                  <div className="post-meta">
                    <span>
                      <i className="fa-regular fa-user"></i>
                      {blogItem?.createdBy?.username ?? "Admin"}
                    </span>
                    <span>
                      <i className="fal fa-calendar-alt"></i>
                      {formatDate(blogItem?.createdAt)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    {blogItem?.title ?? "Untitled"}
                  </h3>

                  {/* Content */}
                  <div
  className="blog-body mt-3"
  dangerouslySetInnerHTML={{ __html: blogItem?.content || "" }}
></div>

                </div>
              </div>

              {/* Tags */}
              {Array.isArray(blogItem?.tags) && blogItem.tags.length > 0 && (
                <div className="row tag-share-wrap mt-4">
                  <div className="col-lg-8 col-12">
                    <div className="tagcloud">
                      <span>Tags:</span>
                      {blogItem.tags.map((tag, index) => (
                        <small  key={index}>{tag}</small>
                      ))}
                    </div>
                  </div>
                </div>
              )}

             

            </div>

            {/* ── Sidebar ── */}
            <div className="col-12 blog-sidebar col-lg-4 ">
              <BlogSidebar recentBlogs={recentBlogs} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;