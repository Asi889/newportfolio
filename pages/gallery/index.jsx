/* eslint-disable @next/next/no-img-element */
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";
import FramerText from "../../components/FramerText";
import ParticlesBackground from "../../components/ParticlesBackground";
import React, { useContext } from 'react';
import { Context } from '../_app';
import Head from "next/head";

const Gallery = () => {
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Gallery page `,
    });
    const theme = useContext(Context)
            

    const animateText = [
        { type: "paragraph", text: "Gallery" },
      ];
    const galleryData = [
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487497/frisbee/18514037_1329021827212321_2594249899931336704_n_yttxfj.jpg' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487504/frisbee/20509421_105975686755800_3802126451688341504_n_d2x6iw.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487508/frisbee/20730053_624199714455331_8353606808266342400_n_aieqyr.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487499/frisbee/18578124_1882385202017258_7891478532059037696_n_bkmsjh.mp4' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/c_crop,h_1370,w_2048/v1616576685/%D7%97%D7%95%D7%A3_%D7%94%D7%AA%D7%95%D7%A4%D7%99%D7%9D_062-removebg_qrkktl.png' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639389589/trick5_1_ma9zkk.mp4' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487497/frisbee/20394191_332271740543057_7267363240705785856_n_f74i5x.jpg' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487501/frisbee/22708788_1394048737390883_480741620791115776_n_lft6im.jpg' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487512/frisbee/19000288_280389269037107_4951438495844401152_n_vznjl1.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487506/frisbee/20292029_757977457728145_4200437556896071680_n_oisnnl.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487510/frisbee/20669507_1780883105536208_518853167710994432_n_tlssqo.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487508/frisbee/20818476_298185227322235_2926608251845869568_n_pg5h4a.mp4' },
    ];
    
    return (
        <div id="main_container " className=" h-auto relative  railway lg:pl-[100px] pl-0 lg:mt-0  overflow-hidden pb-10">
            <Head></Head>
            <NextSeo {...seo} />
                {/* <div className="absolute w-full h-scrren"> */}
                    <ParticlesBackground />
                {/* </div> */}
            <div className="grid relative  max-w-[1550px] px-6 mx-auto z-50 ">
               
                <div className="grid mt-10 z-50 max-w-[1200px] justify-self-center text-[#f3efef]">
                    
                    <h1 className="lg:text-[40px] text-[30px]  text-[#47ebde] motion-text font-bold"><FramerText animateText={animateText} /></h1>
                    <h1 className={`lg:text-[22px] text-[20px] font-medium  mt-4 ${theme.darkTheme ? "text-[#e0d9d9]" : "text-black"}`}>{` A fun fact about me is that I'm a self-taught freestyle frisbee pro. On the weekend, you'll find me playing on the beach.`}</h1>
                    <p className={`gallery-sub-text lg:text-[22px] text-[20px] pt-4 ${theme.darkTheme ? "text-[#e0d9d9]" : "text-black"}`}>{`See more of my photos and videos on`} <a className="text-[#d35e5e] lg:text-[24px] text-[22px] font-bold" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">Instagram</a> or <a className="text-[#d35e5e] lg:text-[24px] text-[22px] font-bold" href="https://vm.tiktok.com/ZSefoN5AC/">TikTok</a></p>
                </div>
                <div className="img-wrapper flex flex-wrap gap-x-6 gap-y-6 mt-10 z-50 justify-center">
                    {galleryData.map((item,index) => {
                        if (item.type === "img") return <img key={index} className="video-img md:w-[400px] w-[200px] md:h-[400px] h-[200px]" src={item.source} alt="" />
                        if (item.type === "video") return (<video key={index} className="video-img md:w-[400px] w-[200px] md:h-[400px] h-[200px] object-cover" controls>
                            <source className="w-[450px] h-[450px] object-cover" src={item.source} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>)
                    })}
                </div>
            </div>


        </div>
    )
};
export default Gallery;