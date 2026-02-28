import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'

import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
const BlogPage =() => {
    return(
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Blog Page'}/> 
            <BlogList/>
            <CtaSectionS2 />
            {/* <FooterS3 /> */}
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPage;

