
import ProdactShape from '../../img/product/shape-1.png';
import ProductPlaceholderImg from "../../img/product/02.jpg"

const ServicesPrintSection = () => {

    
   
    const products = [
        { id: '1', title: 'We Print Religious & Faith Based Books', proImg: '/img/product/product-1.png' },
        { id: '2', title: 'We Print Novels & Trade Books', proImg: '/img/product/product-2.png' },
        { id: '3', title: "We Print Children's Books & Board Books", proImg: '/img/product/product-3.png' },
        { id: '4', title: 'We Print K-12 & Educational Books', proImg: '/img/product/product-4.png' },
        { id: '5', title: 'We Print Coffee Table Books & Art Books', proImg: '/img/product/product-5.png' },
        { id: '6', title: 'We Print Comic Books & Graphic Novels', proImg: '/img/product/product-6.png' },
        { id: '7', title: 'We Print Cookbooks, Self-Learning Books', proImg: '/img/product/product-7.png' },
        { id: '8', title: 'We Print Training & Guide Books', proImg: '/img/product/product-8.png' },
    ];

    return (
        <section id="service-container" className="product-section section-padding ">
            <div className="shape-image">
                <img src={ProdactShape} alt="img" />
            </div>

            <div className="container">
                <div className="section-title text-center">
                    <span className='section-tags'>Our Services</span>
                    <h2>What We Print</h2>
                    <p>Every book format. Every binding style. Every destination.</p>
                </div>

                <div className="tab-content">
                    <div id="Tab1">
                        <div className="row align-items-stretch">
                            {products.map((product) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                                    <div className="product-box-items">
                                        <div className="product-image">
                                            <img src={ProductPlaceholderImg} alt={product.title} />
                                        </div>
                                        <div className="product-content">
                                            <h6>{product.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="shop-button text-center mt-5">
                    <b style={{ color: 'var(--color-text-primary)' }}>We Bind:</b> Perfect Bound · Case Bound · Saddle Stitch · Wire-O · Lay Flat · Comb Bound · Smyth Sewn · Coil / Spiral Bound &nbsp;&nbsp;  < br />
                    <b style={{ color: 'var(--color-text-primary)' }}>We Finish:</b> Soft Touch · Gloss · Matte · Spot UV · Foil Stamping · Embossing · Debossing · French Flaps · Gilded Edges · Printed Edges
                </div>
            </div>
        </section>
    );
};

export default ServicesPrintSection;