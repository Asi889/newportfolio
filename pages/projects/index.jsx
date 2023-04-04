import Head from "../../components/Head";
import ParallaxTest from "../../components/ParallaxTest";
import ParticlesBackground from "../../components/ParticlesBackground";
import FramerText from "../../components/FramerText";
import { useContext } from "react";
import { Context } from "../_app";
// import { seoMerge } from "../../src/services/next-seo-config";
// import { NextSeo } from "next-seo";

const Projects = () => {
    const theme = useContext(Context)

    // const seo = seoMerge({
    //     title: "Asaf Marom",
    //     description: `Asaf Marom's Profile website - Project's page `,
    // });
    const animateText = [
        { type: "paragraph", text: "My projects" },
    ];
    return (
        <div id="" className="relative">
            <Head></Head>

            <ParticlesBackground />

            <div className={`text-[#47ebde] relative lg:absolute text-6xl md:top-10 top-44  w-full ${theme.darkTheme ? "block" :"hidden"} text-center z-[9999] md:text-[40px] text-[30px] font-bold motion-text`}>
                <FramerText animateText={animateText} />
            </div>

            <ParallaxTest />

            {/* <NextSeo {...seo} /> */}
            {/* <h1>Test About Page</h1> */}
        </div>
    )
};

export default Projects;