import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';

import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ContactPage = () => {
    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <CtaSectionS2 />
            {/* <FooterS3 /> */}
            <CursorMaus />
        </Fragment>
    )
};
export default ContactPage;

