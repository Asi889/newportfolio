import Head from "../../components/Head";
import ParallaxTest from "../../components/ParallaxTest";
import MyParallax from "../../components/MyParallax";
import ParticlesBackground from "../../components/ParticlesBackground";
import FramerText from "../../components/FramerText";
import { useContext } from "react";
import { Context } from "../_app";
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";

const Projects = () => {
    const theme = useContext(Context)

    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Project's page `,
    });
    const animateText = [
        { type: "paragraph", text: "My projects" },
    ];
    return (
        <div id="" className="relative overflow-y-auto h-full">
            <Head></Head>
            <NextSeo {...seo} />

            <ParticlesBackground />

            <div className={`text-[#47ebde] pb-10 relative railway  pt-10  w-full  text-center z-[999999999999] lg:text-[40px] text-[30px]  font-bold motion-text`}>
            {/* <div className={`text-[#47ebde] relative lg:absolute text-6xl md:top-10 top-44  w-full ${theme.darkTheme ? "block" :"hidden"} text-center z-[9999] md:text-[40px] text-[30px] font-bold motion-text`}> */}
                <FramerText animateText={animateText} />
            </div>

            {/* <ParallaxTest /> */}
            <MyParallax />

            {/* <NextSeo {...seo} /> */}
            {/* <h1>Test About Page</h1> */}
        </div>
    )
};

export default Projects;