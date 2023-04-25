import React from 'react';
import PageContact from '../../components/PageContact';
import ContactPage from '../../components/ContactPage';
import { NextSeo } from 'next-seo';
import { seoMerge } from '../../src/services/next-seo-config';
function index(props) {
    
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Contact page `,
    });

    return (
        <div className="w-full h-full ">
        {/* <div className="w-full h-auto lg:h-full "> */}
        {/* // <> */}
            <NextSeo {...seo} />

            {/* <PageContact /> */}
            <ContactPage />
            {/* </> */}
            </div>
    );
}

export default index;