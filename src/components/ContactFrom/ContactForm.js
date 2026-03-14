import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import toast, { Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../config/http-client';

// Today's date in YYYY-MM-DD — used as min on the delivery date picker
const TODAY = new Date().toISOString().split('T')[0];

// Shared toast style so all toasts look consistent with your site theme
const toastBase = {
    background: '#1a1a1a',
    color: '#fff',
    fontFamily: 'var(--font-secondary)',
    fontSize: '13px',
    borderRadius: '8px',
    padding: '14px 18px',
    maxWidth: '460px',
};
const toastError = {
    style: { ...toastBase, border: '1px solid rgba(224,92,75,0.45)' },
    iconTheme: { primary: '#e05c4b', secondary: '#fff' },
    duration: 6000,
};
const toastSuccess = {
    style: { ...toastBase, border: '1px solid rgba(49,162,255,0.35)' },
    iconTheme: { primary: '#31a2ff', secondary: '#fff' },
    duration: 5000,
};
const toastLoading = {
    style: toastBase,
};

// Bold red asterisk next to required field labels
const Req = () => <span className="req" aria-hidden="true">*</span>;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        productType: '',
        bindingType: '',
        approximateQuantity: '',
        requiredDeliveryDate: '',
        specialtyFinishing: '',
        message: '',
        howDidYouHear: '',
    });

    const [showModal, setShowModal]       = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [, forceUpdate]                 = useState(0);
    const simpleValidator                 = useRef(new SimpleReactValidator());

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const scrollToBlog = () => {
        navigate("/");
        setTimeout(() => {
            const section = document.getElementById("blog-container");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 200);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ── Client-side check ──
        if (!simpleValidator.current.allValid()) {
            simpleValidator.current.showMessages();
            forceUpdate(n => n + 1);
            toast.error('Please fill in all required fields before submitting.', toastError);
            return;
        }

        const payload = {
            fullName:             formData.name,
            companyName:          formData.companyName,
            email:                formData.email,
            phoneNumber:          formData.phone,
            country:              formData.country,
            productType:          formData.productType,
            bindingType:          formData.bindingType,
            approximateQuantity:  formData.approximateQuantity,
            requiredDeliveryDate: formData.requiredDeliveryDate || undefined,
            specialtyFinishing:   formData.specialtyFinishing,
            projectDescription:   formData.message || undefined,
            howDidYouHear:        formData.howDidYouHear || undefined,
        };

        setIsSubmitting(true);
        const loadingId = toast.loading('Sending your enquiry…', toastLoading);

        try {
            await httpClient.post('/enquiries', payload);

            // ── All good ──
            toast.success("Enquiry sent! We'll be in touch within 24 hours.", { ...toastSuccess, id: loadingId });
            setShowModal(true);

            setFormData({
                name: '', companyName: '', email: '', phone: '',
                country: '', productType: '', bindingType: '',
                approximateQuantity: '', requiredDeliveryDate: '',
                specialtyFinishing: '', message: '', howDidYouHear: '',
            });
            simpleValidator.current.hideMessages();

        } catch (error) {
            const msg = 
                error?.response?.data?.message || 
                error?.message || 
                'Something went wrong. Please try again.';
            toast.error(msg, { ...toastError, id: loadingId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Toaster
                position="top-right"
                containerStyle={{ zIndex: 99999, top: 24, right: 24 }}
            />

            {showModal && (
                <div className="cf-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="cf-modal" onClick={e => e.stopPropagation()}>
                        <button className="cf-modal-close" onClick={() => setShowModal(false)} aria-label="Close">
                           <X />
                        </button>
                        <div className="cf-modal-icon">
                           <img src="./namaste.png" alt="Thank you" />
                        </div>
                        <h4>Thank You!</h4>
                        <div className="cf-modal-divider"></div>
                        <p>
                            We've received your enquiry and will respond within <strong>48 hours</strong>.
                            In the meantime, you're welcome to download our full capability profile or
                            explore our blog for printing guides and industry insights.
                        </p>
                        <div className="cf-modal-actions">
                            <a href="#" className="btn-modal-primary">
                                <i className="fal fa-download" style={{marginRight: 6}}></i>
                                Download Capability Profile
                            </a>
                            <a onClick={scrollToBlog} href="#" className="btn-modal-secondary">
                                <i className="fal fa-book-open" style={{marginRight: 6}}></i>
                                Explore Our Blog
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Heading ── */}
           <div className="contact-title text-center">
                <h3>Share Your Printing Requirements </h3>
                <p>
                    Let us know your specifications and our team will recommend the best printing solution.
                </p>
            </div>

            {/* ── Form ── */}
            <form id="contact-form" className="form-wrap" onSubmit={handleSubmit} noValidate>

                {/* Row 1 */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Full Name <Req /></label>
                        <input type="text" name="name" placeholder="John Doe"
                            value={formData.name} onChange={handleChange} />
                        {simpleValidator.current.message('name', formData.name, 'required|alpha_space')}
                    </div>
                    <div className="f-group">
                        <label>Email Address <Req /></label>
                        <input type="email" name="email" placeholder="you@example.com"
                            value={formData.email} onChange={handleChange} />
                        {simpleValidator.current.message('email', formData.email, 'required|email')}
                    </div>
                    <div className="f-group">
                        <label>Phone Number <Req /></label>
                        <input type="tel" name="phone" placeholder="+1 555 000 0000"
                            value={formData.phone} onChange={handleChange} />
                        {simpleValidator.current.message('phone', formData.phone, 'required|phone')}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="f-row f-row-2">
                    <div className="f-group">
                        <label>Company / Publisher Name <Req /></label>
                        <input type="text" name="companyName" placeholder="Acme Publishing Ltd."
                            value={formData.companyName} onChange={handleChange} />
                        {simpleValidator.current.message('companyName', formData.companyName, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Country <Req /></label>
                        <input type="text" name="country" placeholder="e.g. United States"
                            value={formData.country} onChange={handleChange} />
                        {simpleValidator.current.message('country', formData.country, 'required')}
                    </div>
                </div>

                {/* Row 3 */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Product Type <Req /></label>
                        <select name="productType" value={formData.productType} onChange={handleChange}>
                            <option value="">Select product type…</option>
                            <option value="Books">Books</option>
                            <option value="Board Books">Board Books</option>
                            <option value="Journals/Diaries">Journals / Diaries</option>
                            <option value="Greeting Cards">Greeting Cards</option>
                            <option value="Packaging">Packaging</option>
                            <option value="Other">Other</option>
                        </select>
                        {simpleValidator.current.message('productType', formData.productType, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Binding Type <Req /></label>
                        <select name="bindingType" value={formData.bindingType} onChange={handleChange}>
                            <option value="">Select binding type…</option>
                            <option value="Paperback / Perfect Bound">Paperback / Perfect Bound</option>
                            <option value="Hardcase">Hardcase</option>
                            <option value="Board Book">Board Book</option>
                            <option value="Saddle Stitch">Saddle Stitch</option>
                            <option value="Spiral/Wiro">Spiral / Wiro</option>
                            <option value="Not Sure">Not Sure</option>
                        </select>
                        {simpleValidator.current.message('bindingType', formData.bindingType, 'required')}
                    </div>
                    <div className="f-group">
                        <label>How Did You Hear About Us?</label>
                        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
                            <option value="">Select an option…</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Referral / Word of Mouth">Referral / Word of Mouth</option>
                            <option value="Trade Show / Event">Trade Show / Event</option>
                            <option value="Industry Publication">Industry Publication</option>
                            <option value="Returning Customer">Returning Customer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Approximate Quantity <Req /></label>
                        <input type="text" name="approximateQuantity" placeholder="e.g. 500, 1000–2000"
                            value={formData.approximateQuantity} onChange={handleChange} />
                        {simpleValidator.current.message('approximateQuantity', formData.approximateQuantity, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Required Delivery Date</label>
                        <input
                            type="date"
                            name="requiredDeliveryDate"
                            min={TODAY}
                            value={formData.requiredDeliveryDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="f-group">
                        <label>Any Specialty Finishing? <Req /></label>
                        <input type="text" name="specialtyFinishing" placeholder="e.g. Foil, Spot UV, None"
                            value={formData.specialtyFinishing} onChange={handleChange} />
                        {simpleValidator.current.message('specialtyFinishing', formData.specialtyFinishing, 'required')}
                    </div>
                </div>

                {/* Message — optional */}
                <div className="f-group">
                    <label>Tell Us About Your Project</label>
                    <textarea name="message"
                        placeholder="Describe your project scope, specifications, or any questions…"
                        value={formData.message} onChange={handleChange}>
                    </textarea>
                </div>

                <button className="btn-enquiry" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : "Send My Enquiry"}
                </button>

                <p className="form-note">
                    We typically respond within 24 hours. For urgent matters, please call directly.
                </p>

            </form>
        </>
    );
};

export default ContactForm;