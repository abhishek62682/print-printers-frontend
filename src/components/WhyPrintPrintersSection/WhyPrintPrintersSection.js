
import { ArrowRight } from "lucide-react";
import blogImg1 from "../../img/news/01.jpg";
import Ws5 from '../../img/line.png'
// Section 13: Why Print Printers
const WhyPrintPrintersSection = (props) => {
    const { hclass = "", SubClass = "", blogAllbtn = true } = props;

    // Static data for this section
    const reasons = [
        {
            id: '1',
            title: 'Proof First. Press Second.',
            slug: 'proof-first-press-second',
            screens: '../../img/new/01.jpg',
            description: 'We ship a physical proof to you before a single production copy is made. Hold it. Approve it. Then we print.',
            tags: "Reason 1"
        },
        {
            id: '2',
            title: 'Full Visibility. Start to Ship.',
            slug: 'full-visibility-start-to-ship',
            screens: '/path/to/blogImg2.png',
            description: 'Weekly press floor updates and proactive shipping notifications. Complete visibility, zero effort on your end.',
            tags: "Reason 2"
        },
        {
            id: '3',
            title: 'Compliant. Certified. Proven.',
            slug: 'compliant-certified-proven',
            screens: '/path/to/blogImg3.png',
            description: 'Certified, audited, and compliant. So your team can approve us fast and focus on the books.',
            tags: "Reason 3"
        }
    ];

    return (
        <section id="why-print-printers-container" className="blog-section section-padding pb-0 bg-cover">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="section-tags">Why Print Printers</h6>
                    <h2>
                        
                        Because Offshore Printing   <br />

                                                                <span><img src={Ws5} alt="img" />Shouldn't Feel Risky </span>
                    </h2>
                    <p>
                        We built Print Printers to solve the real problems publishers face when sourcing from India.
                    </p>
                </div>

                <div className={SubClass}>
                    <div className="row justify-content-center">
                        {reasons.map((reason) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 wow img-custom-anim-top" key={reason.id}>
                                <div className="blog-box-items">
                                    <div className="blog-image">
                                        <img src={blogImg1} alt={reason.title} />
                                        <img src={blogImg1} alt={reason.title} />
                                    </div>
                                    <div className="blog-content">
                                        <span>{reason.tags}</span>
                                        <h3>
                                           
                                                {reason.title}
                                           
                                        </h3>
                                        <p>{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                        <div className="news-button text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
                         <a
  
  className="theme-btn wow fadeInUp"
  data-wow-delay=".3s"
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("about-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  See All Reasons 
</a>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}

export default WhyPrintPrintersSection;