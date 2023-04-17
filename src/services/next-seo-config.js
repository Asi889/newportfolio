const seoObj = {
    title: 'Asaf Marom',
    description: `Asaf Marom's Profile website `,
    openGraph: {
      type: 'website',
      locale: 'he_IL',
      site_name: `Asaf Marom's website`,
    },
  };
  export const seoMerge = (seo) => ({
    ...seoObj,
    title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
    description: `${seoObj.description} | ${seo.description ? seo.description : ''}`,
    openGraph: {
      title: `${seoObj.title} | ${seo.title ? seo.title : ''}`,
      description: `${seoObj.title}`,
    },
  });
  