import React, { useState, useRef, useEffect, useCallback } from 'react';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../config/http-client';

const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const toastBase = {
    background: '#1a1a1a',
    color: '#fff',
    fontFamily: 'var(--font-secondary)',
    fontSize: '13px',
    borderRadius: '8px',
    padding: '14px 18px',
    maxWidth: '460px',
};

export const toastError   = { style: { ...toastBase, border: '1px solid rgba(224,92,75,0.45)'  }, iconTheme: { primary: '#e05c4b', secondary: '#fff' }, duration: 6000 };
export const toastSuccess = { style: { ...toastBase, border: '1px solid rgba(49,162,255,0.35)' }, iconTheme: { primary: '#31a2ff', secondary: '#fff' }, duration: 5000 };
export const toastLoading = { style: toastBase };

const BOOK_CATEGORIES = [
    'Religious & Faith Based Books',
    'Novels & Trade Books',
    "Children's Books & Board Books",
    'K-12 & Educational Books',
    'Coffee Table Books & Art Books',
    'Comic Books & Graphic Novels',
    'Cookbooks & Self-Learning Books',
    'Training & Guide Books',
    'Journals & Diaries',
    'Other',
];

const BINDING_TYPES = [
    'Softcover / Perfect Bound',
    'Hardcover / Case Bound',
    'Saddle Stitch',
    'Wire-O',
    'Lay Flat',
    'Coil / Spiral Binding',
    'Comb Binding',
    'Board Book',
    'Other',
];

const LAMINATION_OPTIONS = [
    'None',
    'Gloss Film Lamination',
    'Matte Film Lamination',
    'Soft Touch Lamination',
    'Scuff-free Matte Lamination',
    'Flood Aqeous Varnish',
    'Flood Matte Varnish',
];

const optionalEnum = (values) =>
    z.enum(values).optional().or(z.literal('')).transform(v => v || undefined);

const optionalStr = (max = 500) =>
    z.string().trim().max(max).optional().or(z.literal('')).transform(v => v || undefined);

export const rfpSchema = z.object({
    fullName:      z.string().trim().min(2, 'Full name must be at least 2 characters').max(100),
    companyName:   z.string().trim().min(2, 'Company name must be at least 2 characters').max(150),
    email:         z.string().trim().toLowerCase().email('Enter a valid email address').max(254),
    phone:         z.string().trim().regex(/^\+?[\d\s\-().]{7,20}$/, 'Invalid phone number'),
    country:       z.string().trim().min(2, 'Country is required').max(100),
    stateProvince: z.string().trim().min(1, 'State / Province is required').max(100),
    city:          z.string().trim().min(1, 'City is required').max(100),
    zipCode:       z.string().trim().min(1, 'Zip / Postal code is required').max(20),

    bookTitle:    z.string().trim().min(1, 'Book title is required').max(300),
    bookCategory: optionalEnum(BOOK_CATEGORIES),
   trimSize: z
  .string()
  .trim()
  .min(1, 'Trim size is required')
  .max(50, 'Trim size is too long')
  .regex(
    /^\d+(\.\d+)?\s*[xX*×]\s*\d+(\.\d+)?(\s*(in|inch|inches))?$/,
    'Enter a valid trim size like "6 x 9" or "8.5 x 11"'
  ),
    orientation: z.enum(['Portrait', 'Landscape', 'Square'], {
        errorMap: () => ({ message: 'Orientation is required' }),
    }),
    proofType: z.enum(['Epsons', 'PDFs', 'Full Book Digitally Printed'], {
        errorMap: () => ({ message: 'Proof type is required' }),
    }),

    bindingType:       z.enum(BINDING_TYPES, { errorMap: () => ({ message: 'Binding type is required' }) }),
    bindingNotes:      optionalStr(500),
    coverStock:        z.string().trim().min(1, 'Cover stock is required').max(300),
    coverInk:          z.enum(['4/0 CMYK', '1/0 Black', '4/0 CMYK + Varnish', 'PMS', 'Custom'], {
        errorMap: () => ({ message: 'Cover ink is required' }),
    }),
    coverLamination:   z.enum(LAMINATION_OPTIONS, { errorMap: () => ({ message: 'Cover lamination is required' }) }),
    boardCalliper:     optionalStr(50),
    specialtyFinishes: optionalStr(1000),
    dustJacket:        z.enum(['No', 'Yes'], { errorMap: () => ({ message: 'Dust jacket selection is required' }) }),

    dustJacketStock:      optionalStr(200),
    dustJacketInk:        optionalEnum(['4/0 Process CMYK']),
    dustJacketLamination: optionalEnum(LAMINATION_OPTIONS),
    dustJacketFinishes:   optionalStr(500),
    endsheetStock:        optionalStr(200),
    endsheetPrinting:     optionalEnum(['Not Required', '1/1 Black', '4/4 Colour', 'Custom']),

    totalPages: z.string().trim()
        .min(1, 'Page count is required')
        .regex(/^\d+$/, 'Must be a number')
        .refine(v => Number(v) > 0, 'Must be greater than 0')
        .refine(v => Number(v) % 2 === 0, 'Page count must be an even number'),
    textPaperStock: z.string().trim().min(1, 'Text paper stock is required').max(300),
    textInk: z.enum(
        ['1/1 Black', '4/4 Process CMYK', '4/4 Process CMYK + Flood Varnish', '2/2 Process Colour'],
        { errorMap: () => ({ message: 'Text ink is required' }) }
    ),

    quantities: z.string().trim()
        .min(1, 'At least one quantity is required')
        .refine(val => {
            const items = val.split(',').map(q => q.trim());
            return items.length >= 1 && items.length <= 5 && items.every(q => /^\d+$/.test(q) && Number(q) > 0);
        }, 'Enter 1–5 valid quantities separated by commas (e.g. 1000, 2000, 5000)')
        .transform(val => val.split(',').map(q => Number(q.trim()))),

    packingMethod:   optionalEnum(['Individually Shrink-wrapped', 'Multi Shrink-wrapped', 'No Shrink-wrap']),
    shippingMethod:  z.enum(
        ['Door to Door (DDU)', 'Ex-Works (India Factory/Warehouse)', 'Customer Carrier'],
        { errorMap: () => ({ message: 'Shipping method is required' }) }
    ),
    deliveryAddress: z.string().trim().min(1, 'Delivery address is required').max(300),
    deliveryCity:    z.string().trim().min(1, 'Delivery city is required').max(150),
    deliveryCountry: z.string().trim().min(1, 'Delivery country is required').max(100),
    deliveryZip:     z.string().trim().min(1, 'Delivery zip code is required').max(20),

    specialInstructions: optionalStr(3000),
    howDidYouHear: optionalEnum(['Google Search', 'LinkedIn', 'Referral from publisher', 'Email Outreach', 'Other']),
}).superRefine((data, ctx) => {
    if (data.dustJacket === 'Yes') {
        if (!data.dustJacketStock)      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Dust jacket stock is required',      path: ['dustJacketStock']      });
        if (!data.dustJacketInk)        ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Dust jacket ink is required',        path: ['dustJacketInk']        });
        if (!data.dustJacketLamination) ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Dust jacket lamination is required', path: ['dustJacketLamination'] });
    }

    if (
        data.country.trim().toLowerCase() === 'india' &&
        data.zipCode &&
        !/^\d{6}$/.test(data.zipCode.trim())
    ) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Indian PIN code must be exactly 6 digits',
            path: ['zipCode'],
        });
    }
});

export const flattenZodErrors = (error) => {
    const map = {};
    for (const issue of error.issues) {
        const key = issue.path.join('.');
        if (!map[key]) map[key] = issue.message;
    }
    return map;
};

export const scrollToField = (name) => {
    const el = document.querySelector(`[name="${name}"]`) || document.getElementById(name);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus({ preventScroll: true }), 400);
};

const scrollToFirstDomError = (errorMap) => {
    const all = document.querySelectorAll('input[name], select[name], textarea[name]');
    for (const el of all) {
        if (errorMap[el.getAttribute('name')]) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => el.focus({ preventScroll: true }), 400);
            return;
        }
    }
};

export const useTurnstile = (siteKey) => {
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
                    theme:    'light',
                    size:     'normal',
                    language: 'auto',
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

export const Req = () => <span className="req" aria-hidden="true">*</span>;

export const FieldError = ({ message }) =>
    message ? <p className="f-field-error" role="alert">{message}</p> : null;

const INITIAL = {
    fullName: '', companyName: '', email: '', phone: '',
    country: '', stateProvince: '', city: '', zipCode: '',
    bookTitle: '', bookCategory: '', trimSize: '', orientation: '', proofType: '',
    bindingType: '', bindingNotes: '', coverStock: '', coverInk: '', coverLamination: '',
    boardCalliper: '', specialtyFinishes: '', dustJacket: '',
    dustJacketStock: '', dustJacketInk: '', dustJacketLamination: '', dustJacketFinishes: '',
    endsheetStock: '', endsheetPrinting: '',
    totalPages: '', textPaperStock: '', textInk: '',
    quantities: '',
    packingMethod: '', shippingMethod: '', deliveryAddress: '', deliveryCity: '', deliveryCountry: '', deliveryZip: '',
    specialInstructions: '', howDidYouHear: '',
};

const ContactForm = () => {
    const [formData, setFormData]         = useState(INITIAL);
    const [errors, setErrors]             = useState({});
    const [showModal, setShowModal]       = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate                        = useNavigate();

    const { containerRef, token: captchaToken, resetTurnstile } = useTurnstile(TURNSTILE_SITE_KEY);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => { const next = { ...prev }; delete next[name]; return next; });
        }
    };

    const scrollToBlog = () => {
        navigate('/');
        setTimeout(() => document.getElementById('blog-container')?.scrollIntoView({ behavior: 'smooth' }), 200);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = rfpSchema.safeParse(formData);

        if (!result.success) {
            const flat = flattenZodErrors(result.error);
            setErrors(flat);
            scrollToFirstDomError(flat);
            toast.error('Please fix the highlighted fields before submitting.', toastError);
            return;
        }

        if (!captchaToken) {
            toast.error('Please complete the security verification.', toastError);
            return;
        }

        const payload = {
            ...result.data,
            fileFormat: 'Customer Supplied Files must be trouble-free PDF Files',
            turnstileToken: captchaToken,
        };

        setIsSubmitting(true);
        const loadingId = toast.loading('Sending your enquiry…', toastLoading);

        try {
            await httpClient.post('/enquiries', payload);
            toast.success("Enquiry sent! We'll be in touch within 5 working days.", { ...toastSuccess, id: loadingId });
            setShowModal(true);
            setFormData(INITIAL);
            setErrors({});
            resetTurnstile();
        } catch (error) {
            toast.dismiss(loadingId);

            const fieldErrors = error?.response?.data?.fieldErrors;
            if (fieldErrors) {
                const serverErrors = Object.fromEntries(
                    Object.entries(fieldErrors).map(([field, msgs]) => [field, msgs?.[0]?.message || 'Invalid value'])
                );
                setErrors(serverErrors);
                scrollToFirstDomError(serverErrors);
                toast.error(Object.values(serverErrors)[0], toastError);
            } else {
                toast.error(
                    error?.response?.data?.message || error?.message || 'Something went wrong. Please try again.',
                    toastError
                );
            }
            resetTurnstile();
        } finally {
            setIsSubmitting(false);
        }
    };

    const f = (name) => ({
        name,
        value: formData[name],
        onChange: handleChange,
        className: errors[name] ? 'f-input-error' : '',
    });

    return (
        <>
            <Toaster position="top-right" containerStyle={{ zIndex: 99999, top: 24, right: 24 }} />

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

                <div className="f-section-title">1. Contact Information</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Full Name <Req /></label>
                        <input type="text" {...f('fullName')} placeholder="Your full name" />
                        <FieldError message={errors.fullName} />
                    </div>
                    <div className="f-group">
                        <label>Company / Publisher <Req /></label>
                        <input type="text" {...f('companyName')} placeholder="Publishing house or company name" />
                        <FieldError message={errors.companyName} />
                    </div>
                    <div className="f-group">
                        <label>Email Address <Req /></label>
                        <input type="email" {...f('email')} placeholder="you@company.com" />
                        <FieldError message={errors.email} />
                    </div>
                    <div className="f-group">
                        <label>Phone Number <Req /></label>
                        <input type="tel" {...f('phone')} placeholder="+1 555 000 0000" />
                        <FieldError message={errors.phone} />
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Country <Req /></label>
                        <input type="text" {...f('country')} placeholder="e.g. United States" />
                        <FieldError message={errors.country} />
                    </div>
                    <div className="f-group">
                        <label>State / Province <Req /></label>
                        <input type="text" {...f('stateProvince')} placeholder="e.g. New York" />
                        <FieldError message={errors.stateProvince} />
                    </div>
                    <div className="f-group">
                        <label>City <Req /></label>
                        <input type="text" {...f('city')} placeholder="e.g. Los Angeles" />
                        <FieldError message={errors.city} />
                    </div>
                    <div className="f-group">
                        <label>Zip / Postal Code <Req /></label>
                        <input type="text" {...f('zipCode')} placeholder="e.g. 90001" />
                        <FieldError message={errors.zipCode} />
                    </div>
                </div>

                <div className="f-section-title">2. The Basics</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Project / Book Title <Req /></label>
                        <input type="text" {...f('bookTitle')} placeholder="e.g. Post Oak" />
                        <FieldError message={errors.bookTitle} />
                    </div>
                    <div className="f-group">
                        <label>Book Category</label>
                        <select {...f('bookCategory')}>
                            <option value="">Select category…</option>
                            {BOOK_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div className="f-group">
                        <label>Width x Height (inches) <Req /></label>
                        <input type="text" {...f('trimSize')} placeholder="e.g. 6 x 9" />
                        <FieldError message={errors.trimSize} />
                    </div>
                    <div className="f-group">
                        <label>Orientation <Req /></label>
                        <select {...f('orientation')}>
                            <option value="">Select…</option>
                            <option value="Portrait">Portrait</option>
                            <option value="Landscape">Landscape</option>
                            <option value="Square">Square</option>
                        </select>
                        <FieldError message={errors.orientation} />
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Proofs - Text + Cover <Req /></label>
                        <select {...f('proofType')}>
                            <option value="">Select proof type…</option>
                            <option value="Epsons">Epsons</option>
                            <option value="PDFs">PDFs</option>
                            <option value="Full Book Digitally Printed">Full Book Digitally Printed</option>
                        </select>
                        <FieldError message={errors.proofType} />
                    </div>
                    <div className="f-group">
                        <label>File Format Details</label>
                        <p className="f-file-format-pill">Customer Supplied Files must be trouble-free PDF Files.</p>
                    </div>
                </div>

                <div className="f-section-title">3. Cover, Binding, Endsheets &amp; Finishing</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Binding Type <Req /></label>
                        <select {...f('bindingType')}>
                            <option value="">Select binding type…</option>
                            {BINDING_TYPES.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <FieldError message={errors.bindingType} />
                    </div>
                    <div className="f-group">
                        <label>Binding Special Notes</label>
                        <input type="text" {...f('bindingNotes')} placeholder="e.g. Square loose back, gilded edges, ribbon marker etc." />
                    </div>
                    <div className="f-group">
                        <label>Cover Stock / Material <Req /></label>
                        <input type="text" {...f('coverStock')} placeholder="e.g. 100lb matte or 12pt C1S Gloss Artcard" />
                        <FieldError message={errors.coverStock} />
                    </div>
                    <div className="f-group">
                        <label>Cover Ink <Req /></label>
                        <select {...f('coverInk')}>
                            <option value="">Select ink…</option>
                            <option value="4/0 CMYK">4/0 CMYK</option>
                            <option value="1/0 Black">1/0 Black</option>
                            <option value="4/0 CMYK + Varnish">4/0 CMYK + Varnish</option>
                            <option value="PMS">PMS</option>
                            <option value="Custom">Custom</option>
                        </select>
                        <FieldError message={errors.coverInk} />
                    </div>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Cover Lamination <Req /></label>
                        <select {...f('coverLamination')}>
                            <option value="">Select lamination…</option>
                            {LAMINATION_OPTIONS.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                        <FieldError message={errors.coverLamination} />
                    </div>
                    <div className="f-group">
                        <label>Hard Cover Board Calliper (mm)</label>
                        <input type="text" {...f('boardCalliper')} placeholder="e.g. 2.50 mm or 3.00 mm" />
                    </div>
                    <div className="f-group">
                        <label>Specialty Finishes on Cover</label>
                        <input type="text" {...f('specialtyFinishes')} placeholder="e.g. Gold foil + embossing, Spot UV etc." />
                    </div>
                    <div className="f-group">
                        <label>Dust Jacket? <Req /></label>
                        <select {...f('dustJacket')}>
                            <option value="">Select…</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <FieldError message={errors.dustJacket} />
                    </div>
                </div>

                {formData.dustJacket === 'Yes' && (
                    <div className="f-row f-row-4">
                        <div className="f-group">
                            <label>Dust Jacket Paper Stock <Req /></label>
                            <input type="text" {...f('dustJacketStock')} placeholder="e.g. 100lb matte or 120lb gloss" />
                            <FieldError message={errors.dustJacketStock} />
                        </div>
                        <div className="f-group">
                            <label>Dust Jacket Ink <Req /></label>
                            <select {...f('dustJacketInk')}>
                                <option value="">Select…</option>
                                <option value="4/0 Process CMYK">4/0 Process CMYK</option>
                            </select>
                            <FieldError message={errors.dustJacketInk} />
                        </div>
                        <div className="f-group">
                            <label>Dust Jacket Lamination <Req /></label>
                            <select {...f('dustJacketLamination')}>
                                <option value="">Select…</option>
                                {LAMINATION_OPTIONS.map(l => <option key={l} value={l}>{l}</option>)}
                            </select>
                            <FieldError message={errors.dustJacketLamination} />
                        </div>
                        <div className="f-group">
                            <label>Specialty Finishes on Dust Jacket</label>
                            <input type="text" {...f('dustJacketFinishes')} placeholder="e.g. Scuff-Resistant Matte Lam + Spot Gloss UV" />
                        </div>
                    </div>
                )}

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Endsheet Stock</label>
                        <input type="text" {...f('endsheetStock')} placeholder="e.g. 80lb woodfree or specialty paper" />
                    </div>
                    <div className="f-group">
                        <label>Endsheet Printing</label>
                        <select {...f('endsheetPrinting')}>
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

                <div className="f-section-title">4. Text &amp; Text Paper Specifications</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Text Page Count (even number) <Req /></label>
                        <input type="text" {...f('totalPages')} placeholder="e.g. 544" />
                        <FieldError message={errors.totalPages} />
                    </div>
                    <div className="f-group">
                        <label>Text Paper Stock <Req /></label>
                        <input type="text" {...f('textPaperStock')} placeholder="e.g. 80lb matte art or 50lb woodfree" />
                        <FieldError message={errors.textPaperStock} />
                    </div>
                    <div className="f-group">
                        <label>Text Ink <Req /></label>
                        <select {...f('textInk')}>
                            <option value="">Select ink…</option>
                            <option value="1/1 Black">1/1 Black</option>
                            <option value="4/4 Process CMYK">4/4 Process CMYK</option>
                            <option value="4/4 Process CMYK + Flood Varnish">4/4 Process CMYK + Flood Varnish</option>
                            <option value="2/2 Process Colour">2/2 Process Colour</option>
                        </select>
                        <FieldError message={errors.textInk} />
                    </div>
                    <div className="f-group" />
                </div>

                <div className="f-section-title">5. Quantities</div>

                <div className="f-group">
                    <label>Quantities <Req /></label>
                    <input type="text" {...f('quantities')} placeholder="e.g. 1000, 2000, 5000" />
                    <p className="f-field-hint">
                        Add up to 5 quantities for comparative pricing. We recommend an MOQ of 1000 copies per title.
                    </p>
                    <FieldError message={errors.quantities} />
                </div>

                <div className="f-section-title">6. Packing &amp; Shipping</div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>Packing Method</label>
                        <select {...f('packingMethod')}>
                            <option value="">Select…</option>
                            <option value="Individually Shrink-wrapped">Individually Shrink-wrapped</option>
                            <option value="Multi Shrink-wrapped">Multi Shrink-wrapped</option>
                            <option value="No Shrink-wrap">No Shrink-wrap</option>
                        </select>
                    </div>
                    <div className="f-group">
                        <label>Shipping Method <Req /></label>
                        <select {...f('shippingMethod')}>
                            <option value="">Select…</option>
                            <option value="Door to Door (DDU)">Door to Door (DDU)</option>
                            <option value="Ex-Works (India Factory/Warehouse)">Ex-Works (India Factory/Warehouse)</option>
                            <option value="Customer Carrier">Customer Carrier</option>
                        </select>
                        <FieldError message={errors.shippingMethod} />
                    </div>
                    <div className="f-group">
                        <label>Delivery Address <Req /></label>
                        <input type="text" {...f('deliveryAddress')} placeholder="e.g. 123 Books Lane, Receiving Warehouse" />
                        <FieldError message={errors.deliveryAddress} />
                    </div>
                    <div className="f-group">
                        <label>Delivery Country <Req /></label>
                        <input type="text" {...f('deliveryCountry')} placeholder="e.g. United States" />
                        <FieldError message={errors.deliveryCountry} />
                    </div>
                </div>

                <div className="f-row f-row-3">
                    <div className="f-group">
                        <label>Delivery City + State <Req /></label>
                        <input type="text" {...f('deliveryCity')} placeholder="e.g. New York, NY" />
                        <p className="f-field-hint">Needed for calculating DDU. Delivery is INCLUDED unless stated otherwise.</p>
                        <FieldError message={errors.deliveryCity} />
                    </div>
                    <div className="f-group">
                        <label>Delivery Zip / Postal Code <Req /></label>
                        <input type="text" {...f('deliveryZip')} placeholder="e.g. 10001" />
                        <FieldError message={errors.deliveryZip} />
                    </div>
                </div>

                <div className="f-section-title">7. Final Notes</div>

                <div className="f-group">
                    <label>Special Instructions or Finishes</label>
                    <textarea name="specialInstructions" rows={4}
                        value={formData.specialInstructions} onChange={handleChange}
                        placeholder="Include any special requirements, brand standards, reference numbers, or details that will help us quote accurately" />
                    <p className="f-field-hint">
                        For large files use{' '}
                        <a href="https://wetransfer.com" target="_blank" rel="noopener noreferrer">WeTransfer</a>
                        {' '}or{' '}
                        <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer">Google Drive</a>
                        {' '}and paste the link above.
                    </p>
                </div>

                <div className="f-row f-row-4">
                    <div className="f-group">
                        <label>How Did You Hear About Us?</label>
                        <select {...f('howDidYouHear')}>
                            <option value="">Select an option…</option>
                            <option value="Google Search">Google Search</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Referral from publisher">Referral from publisher</option>
                            <option value="Email Outreach">Email Outreach</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="f-captcha-wrap">
                    <div ref={containerRef} />
                    {!captchaToken && (
                        <p className="f-captcha-hint">Please complete the security check above before submitting.</p>
                    )}
                </div>

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