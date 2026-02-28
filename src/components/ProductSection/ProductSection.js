import React, { useEffect, useState } from 'react';
import ProdactShape from '../../img/product/shape-1.png'
import { Link } from 'react-router-dom';

const ProductSection = ({ products, addToCartProduct }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeTab, setActiveTab] = useState('Tab2');
    const openTab = (TabName) => {
        setActiveTab(TabName);
    }
   

    return (
        <section className="product-section section-padding pt-0">
            <div className="shape-image">
                <img src={ProdactShape} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6>Digital printing Service</h6>
                    <h2>Explore Features Product</h2>
                </div>
                
                <div className="tab-content">
                    <div id="Tab1" >
                        <div className="row">
                            {products.length > 0 &&
                                products.slice(0, 8).map((product, pitem) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={pitem}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                              
                                               
                                            </div>
                                            <div className="product-content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="color-2 fa-solid fa-star"></i>
                                                </div>
                                                <h6><Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>{product.title}</Link></h6>
                                               
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    
                </div>
                <div className="shop-button text-center mt-5 " >
                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">View all Product</Link>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;