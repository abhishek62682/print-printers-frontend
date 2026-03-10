import React, { Fragment, useEffect } from 'react';

import Contactpage from '../../components/Contactpage/Contactpage';

import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const { pathname } = useLocation();

    // Scroll to top whenever we enter the contact page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <Fragment>
            
            <Contactpage />
            
            {/* <CursorMaus /> */}
        </Fragment>
    )
};

export default ContactPage;