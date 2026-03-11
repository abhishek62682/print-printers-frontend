import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import Ws5 from '../../img/line.png'
import BlogBg from '../../img/news/bg.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const BlogSection = (props) => {
    const { blogAllbtn = true } = props
    return (
        <section id="blog-container" className={"" + props.hclass} style={{ backgroundImage: `url(${BlogBg})` }}>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-tags">Industry Insights</span >
                    <h2>
                        Get Update News & Blogs<br />
                        


                          <span><img src={Ws5} alt="img" />By Company </span>
                    </h2>
                </div>
                <div className={"" +props.SubClass}>
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" key={bl}>
                                <div className="blog-box-items">
                                    <div className="blog-image">
                                        <img src={blog.screens} alt="img" />
                                        <img src={blog.screens} alt="img" />
                                      
                                    </div>
                                    <div className="blog-content">
                                        <span>e-Learning</span>
                                        <h3>
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <ul className="blog-meta">
                                            <li>
                                                <i className="fa-regular fa-user"></i>
                                                Roger J. Spaulding
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default BlogSection;



