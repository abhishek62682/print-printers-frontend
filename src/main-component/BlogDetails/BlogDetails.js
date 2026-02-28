import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            {/* <NavbarS2 hclass={'header-section-2 style-two'} /> */}
            <PageTitle pageTitle={'Digital printing Service'} pagesub={BlogDetails.title} />
            <BlogSingle />
            <CtaSectionS2 />
            {/* <FooterS3 /> */}
            <CursorMaus />
        </Fragment>
    )
};
export default BlogDetails;
