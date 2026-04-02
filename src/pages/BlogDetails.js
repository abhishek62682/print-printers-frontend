import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import PageTitle from '../components/pagetitle/PageTitle';
import BlogSingle from '../components/BlogDetails/BlogSingle';
import CtaSection from '../components/CtaSection';
import httpClient from '../config/http-client';

const BlogDetails = () => {
    const { slug } = useParams();

    const [blogItem, setBlogItem]     = useState(null);
    const [recentBlog, setRecentBlog] = useState(null);
    const [loading, setLoading]       = useState(true);

    async function fetchBlogBySlug() {
        try {
            setLoading(true);
            const { data } = await httpClient.get(`/blogs/public/${slug}`);
            setBlogItem(data?.data ?? null);
            setRecentBlog(data?.recentBlogs ?? null);
        } catch (err) {
            toast.error(err?.response?.data?.message ?? "Failed to fetch blog.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (slug) fetchBlogBySlug();
    }, [slug]);

    if (loading) return <p className="text-center py-5">Loading...</p>;
    if (!blogItem) return <p className="text-center py-5">Blog not found.</p>;

    return (
        <Fragment>
            <Toaster position="top-right" />

            <Helmet>
                <title>{blogItem?.seo?.metaTitle || blogItem?.title || "Blog"}</title>
                <meta name="description" content={blogItem?.seo?.metaDescription || ""} />
                {blogItem?.seo?.metaKeywords?.length > 0 && (
                    <meta name="keywords" content={blogItem.seo.metaKeywords.join(", ")} />
                )}
                {blogItem?.seo?.canonicalUrl && (
                    <link rel="canonical" href={blogItem.seo.canonicalUrl} />
                )}
            </Helmet>

            <PageTitle pageTitle={"Blog"} pagesub={blogItem?.title} />
            <BlogSingle blogItem={blogItem} recentBlogs={recentBlog ?? []} />
            <CtaSection />
        </Fragment>
    );
};

export default BlogDetails;