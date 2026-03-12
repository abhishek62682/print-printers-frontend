
import { Link } from 'react-router-dom';


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

const BlogSidebar = ({ recentBlogs = [] }) => {
  return (
    <div className="main-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h5>Recent Post</h5>
        </div>

        <div className="recent-post-area">
          {recentBlogs?.length > 0 ? (
            recentBlogs.map((blog) => (
              <div className="recent-items" key={blog?._id}>
                <div className="recent-thumb">
                  <img
                    src={blog?.coverImage ? `${process.env.REACT_APP_API_URL}/${blog.coverImage}` : "/placeholder-blog.png"}
                    alt={blog?.title ?? "blog"}
                  />
                </div>
                <div className="recent-content">
                  <ul>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>
                      {formatDate(blog?.createdAt)}
                    </li>
                  </ul>
                  <h6>
                    <Link onClick={ClickHandler} to={`/blog-single/${blog?.slug ?? ""}`}>
                      {blog?.title ?? "Untitled"}
                    </Link>
                  </h6>
                </div>
              </div>
            ))
          ) : (
            <p>No recent posts.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default BlogSidebar;