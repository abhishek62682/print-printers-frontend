import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const styles = `
  .form-wrap {
    width: 100%;
    font-family: var(--font-secondary);
    margin-top:40px;
  }
  .f-row {
    display: grid;
    gap: 16px;
  }
  .f-row-2 { grid-template-columns: 1fr 1fr; }
  .f-row-3 { grid-template-columns: 1fr 1fr 1fr; }
  .f-group {
    margin-bottom: 20px;
  }
  .f-group label {
    display: block;
    font-family: var(--font-primary);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin-bottom: 8px;
    font-weight: 600;
  }
  .f-group input,
  .f-group textarea,
  .f-group select {
    width: 100%;
    border: 1px solid var(--color-light);
    background: var(--color-white);
    color: var(--color-text-primary);
    padding: 14px 16px;
    font-family: var(--font-secondary);
    font-size: var(--font-size-label);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: vertical;
    appearance: none;
    -webkit-appearance: none;
    border-radius: var(--radius-sm);
    box-sizing: border-box;
  }
  .f-group input::placeholder,
  .f-group textarea::placeholder {
    color: var(--color-light);
  }
  .f-group input:focus,
  .f-group textarea:focus,
  .f-group select:focus {
    border-color: var(--color-blue);
    box-shadow: 0 0 0 3px rgba(49, 162, 255, 0.1);
  }
  .f-group textarea {
    min-height: 110px;
  }
  .f-group select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23D2D2D2' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
    color: var(--color-text-primary);
  }
  .f-group .srv-validation-message {
    color: #e05c4b;
    font-size: 11px;
    font-family: var(--font-secondary);
    margin-top: 4px;
    display: block;
  }
  .btn-enquiry {
  
    width: 100%;
    background: var(--color-dark);
    color: var(--color-white);
    border: none;
    padding: 18px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s, box-shadow 0.2s;
    font-family: var(--font-secondary);
    border-radius: var(--radius-sm);
  }
  
  .form-note {
    font-size: 14px;
    font-family: var(--font-secondary);
    color: #aaa;
    margin-top: 16px;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
  }

  /* ── Modal Overlay ── */
  .cf-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 24px;
    animation: cf-fade-in 0.25s ease;
  }
  @keyframes cf-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .cf-modal {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    padding: 48px 40px 40px;
    max-width: 520px;
    width: 100%;
    position: relative;
    text-align: center;
    animation: cf-slide-up 0.3s ease;
    box-shadow: 0 24px 64px rgba(0,0,0,0.15);
  }
  @keyframes cf-slide-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .cf-modal-close {
    position: absolute;
    top: 16px;
    right: 20px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--color-text-secondary);
    line-height: 1;
    padding: 4px;
    transition: color 0.2s;
  }
  .cf-modal-close:hover {
    color: var(--color-text-primary);
  }
  .cf-modal-icon {
    width: 64px;
    height: 64px;
    background: rgba(49, 162, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
  }
  .cf-modal-icon i {
    font-size: 28px;
    color: var(--color-blue);
  }
  .cf-modal h4 {
    font-family: var(--font-primary);
    font-size: var(--font-size-heading-sm);
    color: var(--color-text-primary);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .cf-modal p {
    font-family: var(--font-secondary);
    font-size: var(--font-size-label);
    color: var(--color-text-secondary);
    line-height: 1.75;
    margin-bottom: 28px;
  }
  .cf-modal-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .cf-modal-actions a {
    font-family: var(--font-primary);
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 13px 24px;
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    display: inline-block;
  }
  .cf-modal-actions .btn-modal-primary {
    background: var(--color-dark);
    color: var(--color-white);
  }
  .cf-modal-actions .btn-modal-primary:hover {
    background: var(--color-blue);
    box-shadow: 0 4px 16px rgba(49, 162, 255, 0.3);
  }
  .cf-modal-actions .btn-modal-secondary {
    border: 1px solid var(--color-light);
    color: var(--color-text-secondary);
    background: transparent;
  }
  .cf-modal-actions .btn-modal-secondary:hover {
    border-color: var(--color-blue);
    color: var(--color-blue);
  }
  .cf-modal-divider {
    width: 40px;
    height: 2px;
    background: var(--color-blue);
    margin: 0 auto 20px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .f-row-3 { grid-template-columns: 1fr 1fr; }
    .cf-modal { padding: 36px 24px 28px; }
  }
  @media (max-width: 600px) {
    .f-row-2, .f-row-3 { grid-template-columns: 1fr; }
    .cf-modal-actions { flex-direction: column; }
    .cf-modal-actions a { text-align: center; }
  }
`;

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

    const [showModal, setShowModal] = useState(false);
    const [, forceUpdate] = useState(0);
    const simpleValidator = useRef(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (simpleValidator.current.allValid()) {
            console.log('Form Submitted:', formData);
            setShowModal(true);
        } else {
            simpleValidator.current.showMessages();
            forceUpdate(n => n + 1);
        }
    };

    const closeModal = () => setShowModal(false);

    return (
        <>
            <style>{styles}</style>

            {/* ── Success Modal ── */}
            {showModal && (
                <div className="cf-modal-overlay" onClick={closeModal}>
                    <div className="cf-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="cf-modal-close" onClick={closeModal} aria-label="Close">
                            <i className="fal fa-times"></i>
                        </button>
                        <div className="cf-modal-icon">
                            <i className="fal fa-check"></i>
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
                            <a href="#" className="btn-modal-secondary">
                                <i className="fal fa-book-open" style={{marginRight: 6}}></i>
                                Explore Our Blog
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Form Heading ── */}
            <div className="contact-title text-center">
                <h3 className="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                    Your email address will not be published. Required fields are marked *
                </p>
            </div>

            {/* ── Form ── */}
            <form id="contact-form" className="form-wrap" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Full Name + Email + Phone */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('name', formData.name, 'required|alpha_space')}
                    </div>
                    <div className="f-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('email', formData.email, 'required|email')}
                    </div>
                    <div className="f-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+1 555 000 0000"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('phone', formData.phone, 'required|phone')}
                    </div>
                </div>

                {/* Row 2: Company + Country */}
                <div className="f-row f-row-2">
                    <div className="f-group">
                        <label>Company / Publisher Name</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Acme Publishing Ltd."
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('companyName', formData.companyName, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Country</label>
                        <input
                            type="text"
                            name="country"
                            placeholder="e.g. United States"
                            value={formData.country}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('country', formData.country, 'required')}
                    </div>
                </div>

                {/* Row 3: Product Type + Binding Type + How did you hear */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Product Type</label>
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
                        <label>Binding Type</label>
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

                {/* Row 4: Quantity + Delivery Date + Specialty Finishing */}
                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Approximate Quantity</label>
                        <input
                            type="text"
                            name="approximateQuantity"
                            placeholder="e.g. 500, 1000–2000"
                            value={formData.approximateQuantity}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('approximateQuantity', formData.approximateQuantity, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Required Delivery Date</label>
                        <input
                            type="date"
                            name="requiredDeliveryDate"
                            value={formData.requiredDeliveryDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="f-group">
                        <label>Any Specialty Finishing?</label>
                        <input
                            type="text"
                            name="specialtyFinishing"
                            placeholder="e.g. Foil, Spot UV, None"
                            value={formData.specialtyFinishing}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('specialtyFinishing', formData.specialtyFinishing, 'required')}
                    </div>
                </div>

                {/* Message */}
                <div className="f-group">
                    <label>Tell Us About Your Project</label>
                    <textarea
                        name="message"
                        placeholder="Describe your project scope, specifications, or any questions…"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {simpleValidator.current.message('message', formData.message, 'required|min:10|max:500')}
                </div>

                {/* Submit */}
                <button className="btn-enquiry" type="submit">
                    Send My Enquiry — We'll Respond Within 24 Hours →
                </button>

                <p className="form-note">
                    We typically respond within 24 hours. For urgent matters, please call directly.
                </p>

            </form>
        </>
    );
};

export default ContactForm;