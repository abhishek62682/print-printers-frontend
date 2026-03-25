import React, { useState, useRef, useEffect, useCallback } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import toast, { Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../config/http-client';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// ─── Replace with your Cloudflare Turnstile SITE KEY ─────────────────────────
const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

// ─── Shared toast styles ──────────────────────────────────────────────────────
const toastBase = {
    background: '#1a1a1a',
    color: '#fff',
    fontFamily: 'var(--font-secondary)',
    fontSize: '13px',
    borderRadius: '8px',
    padding: '14px 18px',
    maxWidth: '460px',
};
const toastError   = { style: { ...toastBase, border: '1px solid rgba(224,92,75,0.45)'  }, iconTheme: { primary: '#e05c4b', secondary: '#fff' }, duration: 6000 };
const toastSuccess = { style: { ...toastBase, border: '1px solid rgba(49,162,255,0.35)' }, iconTheme: { primary: '#31a2ff', secondary: '#fff' }, duration: 5000 };
const toastLoading = { style: toastBase };

// ─── Required asterisk ────────────────────────────────────────────────────────
const Req = () => <span className="req" aria-hidden="true">*</span>;

// ─── Cloudflare Turnstile hook ────────────────────────────────────────────────
const useTurnstile = (siteKey) => {
    const containerRef = useRef(null);
    const widgetIdRef  = useRef(null);
    const [token, setToken] = useState(null);

    const resetTurnstile = useCallback(() => {
        if (window.turnstile && widgetIdRef.current !== null) {
            window.turnstile.reset(widgetIdRef.current);
        }
        setToken(null);
    }, []);

    useEffect(() => {
        const renderWidget = () => {
            if (containerRef.current && widgetIdRef.current === null) {
                widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey:            siteKey,
                    callback:           (t) => setToken(t),
                    'expired-callback': () => setToken(null),
                    'error-callback':   () => setToken(null),
                    theme:              'light',
                    size:               'normal',
                    language:           'auto',
                });
            }
        };

        if (window.turnstile) {
            renderWidget();
        } else {
            window.__onTurnstileLoad__ = renderWidget;
            if (!document.querySelector('#turnstile-script')) {
                const script  = document.createElement('script');
                script.id     = 'turnstile-script';
                script.src    = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__onTurnstileLoad__&render=explicit';
                script.async  = true;
                script.defer  = true;
                document.head.appendChild(script);
            }
        }

        return () => {
            if (window.turnstile && widgetIdRef.current !== null) {
                window.turnstile.remove(widgetIdRef.current);
                widgetIdRef.current = null;
            }
            delete window.__onTurnstileLoad__;
        };
    }, [siteKey]);

    return { containerRef, token, resetTurnstile };
};

// ─── INITIAL FORM STATE ───────────────────────────────────────────────────────
const INITIAL = {
    // Section 1 — Contact Information
    fullName:       '',
    companyName:    '',
    email:          '',
    phone:          '',
    country:        '',
    stateProvince:  '',
    city:           '',
    zipCode:        '',

    // Section 2 — The Basics (Book & Project Information)
    bookTitle:      '',
    bookCategory:   '',
    trimSize:       '',
    orientation:    '',
    proofType:      '',
    // fileFormat removed — now static display only

    // Section 3 — Cover, Binding, Endsheets & Finishing
    bindingType:        '',
    bindingNotes:       '',
    coverStock:         '',
    coverInk:           '',
    coverLamination:    '',
    boardCalliper:      '',
    specialtyFinishes:  '',
    dustJacket:         '',
    dustJacketStock:    '',
    dustJacketInk:      '',
    dustJacketLamination: '',
    dustJacketFinishes: '',
    endsheetStock:      '',
    endsheetPrinting:   '',

    // Section 4 — Text & Text Paper Specifications
    totalPages:       '',
    textPaperStock:   '',
    textInk:          '',

    // Section 5 — Quantities
    quantities: '',

    // Section 6 — Packing & Shipping
    packingMethod:    '',
    shippingMethod:   '',
    deliveryAddress:  '',
    deliveryCity:     '',
    deliveryCountry:  '',
    deliveryZip:      '',

    // Section 7 — Final Notes
    specialInstructions: '',
    howDidYouHear:       '',
};


// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ContactForm = () => {
    const [formData, setFormData]         = useState(INITIAL);
    const [showModal, setShowModal]       = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [, forceUpdate]                 = useState(0);
    const simpleValidator                 = useRef(new SimpleReactValidator());
    const navigate                        = useNavigate();

    const { containerRef, token: captchaToken, resetTurnstile } = useTurnstile(TURNSTILE_SITE_KEY);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const scrollToBlog = () => {
        navigate('/');
        setTimeout(() => {
            document.getElementById('blog-container')?.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!simpleValidator.current.allValid()) {
            simpleValidator.current.showMessages();
            forceUpdate(n => n + 1);
            toast.error('Please fill in all required fields before submitting.', toastError);
            return;
        }

        if (!captchaToken) {
            toast.error('Please complete the security verification.', toastError);
            return;
        }

        const payload = {
            // Contact Information
            fullName:       formData.fullName,
            companyName:    formData.companyName,
            email:          formData.email,
            phone:          formData.phone,
            country:        formData.country,
            stateProvince:  formData.stateProvince,
            city:           formData.city,
            zipCode:        formData.zipCode,

            // The Basics
            bookTitle:      formData.bookTitle,
            bookCategory:   formData.bookCategory   || undefined,
            trimSize:       formData.trimSize,
            orientation:    formData.orientation    || undefined,
            proofType:      formData.proofType      || undefined,
            fileFormat:     'Customer Supplied Files must be trouble-free PDF Files', // static value

            // Cover, Binding, Endsheets & Finishing
            bindingType:        formData.bindingType         || undefined,
            bindingNotes:       formData.bindingNotes        || undefined,
            coverStock:         formData.coverStock          || undefined,
            coverInk:           formData.coverInk            || undefined,
            coverLamination:    formData.coverLamination     || undefined,
            boardCalliper:      formData.boardCalliper       || undefined,
            specialtyFinishes:  formData.specialtyFinishes   || undefined,
            dustJacket:         formData.dustJacket          || undefined,
            dustJacketStock:    formData.dustJacketStock     || undefined,
            dustJacketInk:      formData.dustJacketInk       || undefined,
            dustJacketLamination: formData.dustJacketLamination || undefined,
            dustJacketFinishes: formData.dustJacketFinishes  || undefined,
            endsheetStock:      formData.endsheetStock       || undefined,
            endsheetPrinting:   formData.endsheetPrinting    || undefined,

            // Text & Text Paper Specifications
            totalPages:       formData.totalPages     || undefined,
            textPaperStock:   formData.textPaperStock || undefined,
            textInk:          formData.textInk        || undefined,

            // Quantities — split comma-separated string into array
            quantities: formData.quantities
                .split(',')
                .map(q => q.trim())
                .filter(Boolean),

            // Packing & Shipping
            packingMethod:    formData.packingMethod   || undefined,
            shippingMethod:   formData.shippingMethod  || undefined,
            deliveryAddress:  formData.deliveryAddress || undefined,
            deliveryCity:     formData.deliveryCity    || undefined,
            deliveryCountry:  formData.deliveryCountry || undefined,
            deliveryZip:      formData.deliveryZip     || undefined,

            // Final Notes
            specialInstructions: formData.specialInstructions || undefined,
            howDidYouHear:       formData.howDidYouHear       || undefined,

            // Turnstile token
            turnstileToken: captchaToken,
        };

        setIsSubmitting(true);
        const loadingId = toast.loading('Sending your enquiry…', toastLoading);

        try {
            await httpClient.post('/enquiries', payload);
            toast.success("Enquiry sent! We'll be in touch within 5 working days.", { ...toastSuccess, id: loadingId });
            setShowModal(true);
            setFormData(INITIAL);
            simpleValidator.current.hideMessages();
            resetTurnstile();
        } catch (error) {
            const msg =
                error?.response?.data?.message ||
                error?.message ||
                'Something went wrong. Please try again.';
            toast.error(msg, { ...toastError, id: loadingId });
            resetTurnstile();
        } finally {
            setIsSubmitting(false);
        }
    };

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <>
            <Toaster position="top-right" containerStyle={{ zIndex: 99999, top: 24, right: 24 }} />

            {/* ── Success Modal ── */}
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
                        <div className="cf-modal-divider" />
                        <p>
                            We've received your enquiry and will respond within <strong>5 working days</strong>.
                            A free physical proof will be shipped to your door before production begins.
                            In the meantime, feel free to explore our blog for printing guides and insights.
                        </p>
                        <div className="cf-modal-actions">
                            <a href="#" className="btn-modal-primary">
                                <i className="fal fa-download" style={{ marginRight: 6 }} />
                                Download Capability Profile
                            </a>
                            <a onClick={scrollToBlog} href="#" className="btn-modal-secondary">
                                <i className="fal fa-book-open" style={{ marginRight: 6 }} />
                                Explore Our Blog
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <form id="contact-form" className="form-wrap" onSubmit={handleSubmit} noValidate>

                {/* ── Intro ── */}
                <div className="f-form-intro">
                    <p>
                        Thank you for considering <strong>Print Printers</strong>. Please complete this
                        form as thoroughly as possible to receive an accurate quote. Fields marked with
                        an asterisk (<span className="req">*</span>) are required. We will respond
                        within <strong>5 working days</strong>. For multi-title quotes, please email
                        the RFP and details to{' '}
                        <a href="mailto:print@printprinters.com">print@printprinters.com</a>{' '}
                        in your convenient format.
                    </p>
                    <p className="f-form-intro-proof">
                        ✈&nbsp; A free physical proof is shipped air freight to your door before production begins on every order.
                    </p>
                </div>

                {/* ════════════════════════════════════════
                    SECTION 1 — Contact Information
                ════════════════════════════════════════ */}
                <div className="f-section-title">1. Contact Information</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Full Name <Req /></label>
                        <input type="text" name="fullName" placeholder="Your full name"
                            value={formData.fullName} onChange={handleChange} />
                        {simpleValidator.current.message('fullName', formData.fullName, 'required|alpha_space')}
                    </div>
                    <div className="f-group">
                        <label>Company / Publisher <Req /></label>
                        <input type="text" name="companyName" placeholder="Publishing house or company name"
                            value={formData.companyName} onChange={handleChange} />
                        {simpleValidator.current.message('companyName', formData.companyName, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Email Address <Req /></label>
                        <input type="email" name="email" placeholder="you@company.com"
                            value={formData.email} onChange={handleChange} />
                        {simpleValidator.current.message('email', formData.email, 'required|email')}
                    </div>
                    <div className="f-group">
                        <label>Phone Number <Req /></label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+1 555 000 0000"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {/*
                            Accepts all of the following formats:
                              +1 555 000 0000        (E.164 with spaces)
                              +1-555-000-0000        (E.164 with dashes)
                              +44 20 7946 0958       (UK with spaces)
                              +91 98765 43210        (India)
                              (555) 000-0000         (US local without country code)
                              5550000000             (digits only, 7–15 chars)
                              +1 (555) 000-0000      (parenthesised area code)
                        */}
                        {simpleValidator.current.message('phone', formData.phone, [
                            'required',
                            {
                                regex: /^\+?[\d\s\-().]{7,20}$/
                            }
                        ])}
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Country <Req /></label>
                        <input type="text" name="country" placeholder="e.g. United States"
                            value={formData.country} onChange={handleChange} />
                        {simpleValidator.current.message('country', formData.country, 'required')}
                    </div>
                    <div className="f-group">
                        <label>State / Province <Req /></label>
                        <input type="text" name="stateProvince" placeholder="e.g. New York"
                            value={formData.stateProvince} onChange={handleChange} />
                        {simpleValidator.current.message('stateProvince', formData.stateProvince, 'required')}
                    </div>
                    <div className="f-group">
                        <label>City <Req /></label>
                        <input type="text" name="city" placeholder="e.g. Los Angeles"
                            value={formData.city} onChange={handleChange} />
                        {simpleValidator.current.message('city', formData.city, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Zip / Postal Code <Req /></label>
                        <input type="text" name="zipCode" placeholder="e.g. 90001"
                            value={formData.zipCode} onChange={handleChange} />
                        {simpleValidator.current.message('zipCode', formData.zipCode, 'required')}
                    </div>
                </div>

                {/* ════════════════════════════════════════
                    SECTION 2 — The Basics (Book & Project)
                ════════════════════════════════════════ */}
                <div className="f-section-title">2. The Basics</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Project / Book Title <Req /></label>
                        <input type="text" name="bookTitle" placeholder="e.g. Post Oak"
                            value={formData.bookTitle} onChange={handleChange} />
                        {simpleValidator.current.message('bookTitle', formData.bookTitle, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Book Category (Choose One)</label>
                        <select name="bookCategory" value={formData.bookCategory} onChange={handleChange}>
                            <option value="">Select category…</option>
                            <option value="Religious & Faith Based Books">Religious &amp; Faith Based Books</option>
                            <option value="Novels & Trade Books">Novels &amp; Trade Books</option>
                            <option value="Children's Books & Board Books">Children's Books &amp; Board Books</option>
                            <option value="K-12 & Educational Books">K-12 &amp; Educational Books</option>
                            <option value="Coffee Table Books & Art Books">Coffee Table Books &amp; Art Books</option>
                            <option value="Comic Books & Graphic Novels">Comic Books &amp; Graphic Novels</option>
                            <option value="Cookbooks & Self-Learning Books">Cookbooks &amp; Self-Learning Books</option>
                            <option value="Training & Guide Books">Training &amp; Guide Books</option>
                            <option value="Journals & Diaries">Journals &amp; Diaries</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="f-group">
                        <label>Width x Height (inches) <Req /></label>
                        <input type="text" name="trimSize" placeholder="e.g. 6 x 9"
                            value={formData.trimSize} onChange={handleChange} />
                        {simpleValidator.current.message('trimSize', formData.trimSize, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Orientation (Choose One) <Req /></label>
                        <select name="orientation" value={formData.orientation} onChange={handleChange}>
                            <option value="">Select…</option>
                            <option value="Portrait">Portrait</option>
                            <option value="Landscape">Landscape</option>
                            <option value="Square">Square</option>
                        </select>
                        {simpleValidator.current.message('orientation', formData.orientation, 'required')}
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Proofs - Text + Cover <Req /></label>
                        <select name="proofType" value={formData.proofType} onChange={handleChange}>
                            <option value="">Select proof type…</option>
                            <option value="Epsons">Epsons</option>
                            <option value="PDFs">PDFs</option>
                            <option value="Full Book Digitally Printed">Full Book Digitally Printed</option>
                        </select>
                        {simpleValidator.current.message('proofType', formData.proofType, 'required')}
                    </div>

                    <div className="f-group">
                        <label>File Format Details</label>
                        <p className="f-file-format-pill">
                           
                            Customer Supplied Files must be trouble-free PDF Files.
                        </p>
                       
                    </div>

                    <div className="f-group" />
                    <div className="f-group" />
                </div>

                {/* ════════════════════════════════════════
                    SECTION 3 — Cover, Binding, Endsheets & Finishing
                ════════════════════════════════════════ */}
                <div className="f-section-title">3. Cover, Binding, Endsheets &amp; Finishing</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Binding Type <Req /></label>
                        <select name="bindingType" value={formData.bindingType} onChange={handleChange}>
                            <option value="">Select binding type…</option>
                            <option value="Softcover / Perfect Bound">Softcover / Perfect Bound</option>
                            <option value="Hardcover / Case Bound">Hardcover / Case Bound</option>
                            <option value="Saddle Stitch">Saddle Stitch</option>
                            <option value="Wire-O">Wire-O</option>
                            <option value="Lay Flat">Lay Flat</option>
                            <option value="Coil / Spiral Binding">Coil / Spiral Binding</option>
                            <option value="Comb Binding">Comb Binding</option>
                            <option value="Board Book">Board Book</option>
                            <option value="Other">Other</option>
                        </select>
                        {simpleValidator.current.message('bindingType', formData.bindingType, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Binding Special Notes</label>
                        <input type="text" name="bindingNotes"
                            placeholder="e.g. Square loose back, gilded edges, ribbon marker etc."
                            value={formData.bindingNotes} onChange={handleChange} />
                    </div>
                    <div className="f-group">
                        <label>Cover Stock / Material <Req /></label>
                        <input type="text" name="coverStock"
                            placeholder="e.g. 100lb matte or 12pt C1S Gloss Artcard Paper or Faux-leather / Ecofiber Rainbow / Cloth etc."
                            value={formData.coverStock} onChange={handleChange} />
                        {simpleValidator.current.message('coverStock', formData.coverStock, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Cover Ink <Req /></label>
                        <select name="coverInk" value={formData.coverInk} onChange={handleChange}>
                            <option value="">Select ink…</option>
                            <option value="4/0 CMYK">4/0 CMYK</option>
                            <option value="1/0 Black">1/0 Black</option>
                            <option value="4/0 CMYK + Varnish">4/0 CMYK + Varnish</option>
                            <option value="PMS">PMS</option>
                            <option value="Custom">Custom</option>
                        </select>
                        {simpleValidator.current.message('coverInk', formData.coverInk, 'required')}
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Cover Lamination <Req /></label>
                        <select name="coverLamination" value={formData.coverLamination} onChange={handleChange}>
                            <option value="">Select lamination…</option>
                            <option value="None">None</option>
                            <option value="Gloss Film Lamination">Gloss Film Lamination</option>
                            <option value="Matte Film Lamination">Matte Film Lamination</option>
                            <option value="Soft Touch Lamination">Soft Touch Lamination</option>
                            <option value="Scuff-free Matte Lamination">Scuff-free Matte Lamination</option>
                            <option value="Flood Aqeous Varnish">Flood Aqeous Varnish</option>
                            <option value="Flood Matte Varnish">Flood Matte Varnish</option>
                        </select>
                        {simpleValidator.current.message('coverLamination', formData.coverLamination, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Hard Cover Board Calliper (mm)</label>
                        <input type="text" name="boardCalliper" placeholder="eg. 2.50 mm or 3.00 mm"
                            value={formData.boardCalliper} onChange={handleChange} />
                    </div>
                    <div className="f-group">
                        <label>Specialty Finishes on Cover</label>
                        <input type="text" name="specialtyFinishes"
                            placeholder="Eg. One hit flat gold foil front lid & spine + embossing on front cover, printed, painted or gilded edges, Spot UV etc."
                            value={formData.specialtyFinishes} onChange={handleChange} />
                    </div>
                    <div className="f-group">
                        <label>Dust Jacket? <Req /></label>
                        <select name="dustJacket" value={formData.dustJacket} onChange={handleChange}>
                            <option value="">Select…</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        {simpleValidator.current.message('dustJacket', formData.dustJacket, 'required')}
                    </div>
                </div>

                {/* Dust Jacket Conditional Fields */}
                {formData.dustJacket === 'Yes' && (
                    <>
                        <div className="f-row f-row-4">
                            <div className="f-group">
                                <label>Dust Jacket Paper Stock</label>
                                <input type="text" name="dustJacketStock" placeholder="e.g. 100lb matte or 120lb gloss"
                                    value={formData.dustJacketStock} onChange={handleChange} />
                            </div>
                            <div className="f-group">
                                <label>Dust Jacket Ink</label>
                                <select name="dustJacketInk" value={formData.dustJacketInk} onChange={handleChange}>
                                    <option value="">Select…</option>
                                    <option value="4/0 Process CMYK">4/0 Process CMYK</option>
                                </select>
                            </div>
                            <div className="f-group">
                                <label>Dust Jacket Lamination</label>
                                <select name="dustJacketLamination" value={formData.dustJacketLamination} onChange={handleChange}>
                                    <option value="">Select…</option>
                                    <option value="None">None</option>
                                    <option value="Gloss Film Lamination">Gloss Film Lamination</option>
                                    <option value="Matte Film Lamination">Matte Film Lamination</option>
                                    <option value="Soft Touch Lamination">Soft Touch Lamination</option>
                                    <option value="Scuff-free Matte Lamination">Scuff-free Matte Lamination</option>
                                    <option value="Flood Aqeous Varnish">Flood Aqeous Varnish</option>
                                    <option value="Flood Matte Varnish">Flood Matte Varnish</option>
                                </select>
                            </div>
                            <div className="f-group">
                                <label>Specialty Finishes on Dust Jacket</label>
                                <input type="text" name="dustJacketFinishes"
                                    placeholder="e.g. Scuff-Resistant Matte Lam + Spot Gloss UV, or N/A"
                                    value={formData.dustJacketFinishes} onChange={handleChange} />
                            </div>
                        </div>
                    </>
                )}

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Endsheet Stock</label>
                        <input type="text" name="endsheetStock"
                            placeholder="e.g. 80lb woodfree or 100lb woodfree or specialty paper."
                            value={formData.endsheetStock} onChange={handleChange} />
                    </div>
                    <div className="f-group">
                        <label>Endsheet Printing</label>
                        <select name="endsheetPrinting" value={formData.endsheetPrinting} onChange={handleChange}>
                            <option value="">Select…</option>
                            <option value="Not Required">Not Required</option>
                            <option value="1/1 Black">1/1 Black</option>
                            <option value="4/4 Colour">4/4 Colour</option>
                            <option value="Custom">Custom (Specify in Notes)</option>
                        </select>
                    </div>
                    <div className="f-group" />
                    <div className="f-group" />
                </div>

                {/* ════════════════════════════════════════
                    SECTION 4 — Text & Text Paper Specifications
                ════════════════════════════════════════ */}
                <div className="f-section-title">4. Text &amp; Text Paper Specifications</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Text Page Count (even number) <Req /></label>
                        <input type="text" name="totalPages" placeholder="e.g. 544 text pages"
                            value={formData.totalPages} onChange={handleChange} />
                        {simpleValidator.current.message('totalPages', formData.totalPages, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Text Paper Stock <Req /></label>
                        <input type="text" name="textPaperStock"
                            placeholder="e.g. 80lb matte art or 50lb woodfree or 100lb gloss or specialty paper."
                            value={formData.textPaperStock} onChange={handleChange} />
                        {simpleValidator.current.message('textPaperStock', formData.textPaperStock, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Text Ink <Req /></label>
                        <select name="textInk" value={formData.textInk} onChange={handleChange}>
                            <option value="">Select ink…</option>
                            <option value="1/1 Black">1/1 Black</option>
                            <option value="4/4 Process CMYK">4/4 Process CMYK</option>
                            <option value="4/4 Process CMYK + Flood Varnish">4/4 Process CMYK + Flood Varnish</option>
                            <option value="2/2 Process Colour">2/2 Process Colour</option>
                        </select>
                        {simpleValidator.current.message('textInk', formData.textInk, 'required')}
                    </div>
                    <div className="f-group" />
                </div>

                {/* ════════════════════════════════════════
                    SECTION 5 — Quantities
                ════════════════════════════════════════ */}
                <div className="f-section-title">5. Quantities</div>

                <div className="f-group">
                    <label>Quantities <Req /></label>
                    <input
                        type="text"
                        name="quantities"
                        placeholder="e.g. 1000, 2000, 5000 or more"
                        value={formData.quantities}
                        onChange={handleChange}
                    />
                    <p className="f-field-hint">
                        Add up to 5 quantities for comparative pricing. Quantities should be multiples of your signature count where possible.<br />
                        We recommend an MOQ of 1000 hardbound or softbound copies per title. For comparative quotes, please submit multiple quantities (comma separated).
                    </p>
                    {simpleValidator.current.message('quantities', formData.quantities, 'required')}
                </div>

                {/* ════════════════════════════════════════
                    SECTION 6 — Packing & Shipping
                ════════════════════════════════════════ */}
                <div className="f-section-title">6. Packing &amp; Shipping</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Packing Method</label>
                        <select name="packingMethod" value={formData.packingMethod} onChange={handleChange}>
                            <option value="">Select…</option>
                            <option value="Individually Shrink-wrapped">Individually Shrink-wrapped</option>
                            <option value="Multi Shrink-wrapped">Multi Shrink-wrapped</option>
                            <option value="No Shrink-wrap">No Shrink-wrap</option>
                        </select>
                    </div>
                    <div className="f-group">
                        <label>Shipping Method <Req /></label>
                        <select name="shippingMethod" value={formData.shippingMethod} onChange={handleChange}>
                            <option value="">Select…</option>
                            <option value="Door to Door (DDU)">Door to Door (DDU)</option>
                            <option value="Ex-Works (India Factory/Warehouse)">Ex-Works (India Factory/Warehouse)</option>
                            <option value="Customer Carrier">Customer Carrier</option>
                        </select>
                        {simpleValidator.current.message('shippingMethod', formData.shippingMethod, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Delivery Address <Req /></label>
                        <input type="text" name="deliveryAddress" placeholder="e.g. 123, Books Lane, Receiving Warehouse"
                            value={formData.deliveryAddress} onChange={handleChange} />
                        {simpleValidator.current.message('deliveryAddress', formData.deliveryAddress, 'required')}
                    </div>
                    <div className="f-group">
                        <label>Delivery Country <Req /></label>
                        <input type="text" name="deliveryCountry" placeholder="e.g. United States"
                            value={formData.deliveryCountry} onChange={handleChange} />
                        {simpleValidator.current.message('deliveryCountry', formData.deliveryCountry, 'required')}
                    </div>
                </div>

                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Delivery City + State <Req /></label>
                        <input
                            type="text"
                            name="deliveryCity"
                            placeholder="e.g. New York, NY"
                            value={formData.deliveryCity}
                            onChange={handleChange}
                        />
                        <p className="f-field-hint">
                            Need for calculating DDP (Delivered Duty Unpaid).
                            Delivery is INCLUDED unless stated otherwise.*
                        </p>
                        {simpleValidator.current.message('deliveryCity', formData.deliveryCity, 'required')}
                    </div>

                    <div className="f-group">
                        <label>Delivery Zip / Postal Code <Req /></label>
                        <input
                            type="text"
                            name="deliveryZip"
                            placeholder="e.g. 10001"
                            value={formData.deliveryZip}
                            onChange={handleChange}
                        />
                        {simpleValidator.current.message('deliveryZip', formData.deliveryZip, 'required')}
                    </div>
                </div>

                {/* ════════════════════════════════════════
                    SECTION 7 — Final Notes
                ════════════════════════════════════════ */}
                <div className="f-section-title">7. Final Notes</div>

                <div className="f-group">
                    <label>Special Instructions or Finishes</label>
                    <textarea
                        name="specialInstructions"
                        rows={4}
                        placeholder="Include any special requirements, brand standards, reference numbers, or details that will help us quote accurately"
                        value={formData.specialInstructions}
                        onChange={handleChange}
                    />
                    <p className="f-field-hint">
                        For large files, please use{' '}
                        <a href="https://wetransfer.com" target="_blank" rel="noopener noreferrer">WeTransfer</a>
                        {' '}or{' '}
                        <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a>
                        {' '}and share the link in the notes field above.
                    </p>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>How Did You Hear About Us?</label>
                        <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
                            <option value="">Select an option…</option>
                            <option value="Google Search">Google Search</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Referral from publisher">Referral from publisher</option>
                            <option value="Email Outreach">Email Outreach</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="f-group" />
                    <div className="f-group" />
                    <div className="f-group" />
                </div>

                {/* ── Cloudflare Turnstile ── */}
                <div className="f-captcha-wrap">
                    <div ref={containerRef} />
                    {!captchaToken && (
                        <p className="f-captcha-hint">
                            Please complete the security check above before submitting.
                        </p>
                    )}
                </div>

                {/* ── Submit ── */}
                <button
                    className="btn-enquiry"
                    type="submit"
                    disabled={isSubmitting}
                    title={!captchaToken ? 'Please complete the security check first' : ''}
                >
                    {isSubmitting ? 'Sending…' : 'Send My Enquiry'}
                </button>

                <p className="form-note">
                    ✓ Response within 5 working days &nbsp;&nbsp; ✓ Free physical proof on every order &nbsp;&nbsp; ✓ Door-to-door or ex-works delivery available
                </p>

            </form>
        </>
    );
};

export default ContactForm;