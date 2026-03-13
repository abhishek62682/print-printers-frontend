import React, { Fragment, useEffect } from 'react';

import Contactpage from '../../components/Contactpage/Contactpage';

import { useLocation } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle';

const ContactPage = () => {
    const { pathname } = useLocation();

    // Scroll to top whenever we enter the contact page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <Fragment>
                        <PageTitle pageTitle={"Contact Us"} pagesub={"Get in Touch"} />
            <Contactpage />
            
            {/* <CursorMaus /> */}
        </Fragment>
    )
};

export default ContactPage;