import React from 'react';
import PageContact from '../../components/PageContact';
import { NextSeo } from 'next-seo';
import { seoMerge } from '../../src/services/next-seo-config';
function index(props) {
    
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Contact page `,
    });

    return (
        <>
            <NextSeo {...seo} />

            <PageContact />
        </>
    );
}

export default index;