
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import FramerText from "../components/FramerText";
import Head from "../components/Head";
import navs from "../src/services/utils";
import ContentTyper from "../components/ContentTyper";
import { Context } from "./_app";
import { useContext } from "react";
import { NextSeo } from "next-seo";
import { seoMerge } from "../src/services/next-seo-config";

export default function Home() {
  const navLinks = navs()
  const theme = useContext(Context)
  const hiText = [
    { type: "paragraph", text: "Hi," },
  ];

  const animateText = [
    { type: "paragraph", text: "My name is Asaf Marom ( A.K.A Asi )" },
  ];
  const seo = seoMerge({
    title: "Asaf Marom",
    description: `Asaf Marom's Profile website - home page `,
  });



  return (
    <>
      <Head></Head>
      <NextSeo {...seo} />

      <div className="relative h-full ">
        <ParticlesBackground />
        <div className="relative z-10 motion-text flex flex-col  gap-x-[10px] mx-4 h-full">
          <div>

            <div className="font-bold md:mt-10  mt-4  h-fit">

              <FramerText animateText={animateText} hiText={hiText} />

            </div>
            <div className={`max-w-[950px] md:h-[180px] h-[150px] flex flex-wrap ${theme.darkTheme ? "text-white" : "text-black"}  gap-x-0   h-fit railway`}>

              <ContentTyper />

            </div>
          </div>
          <div className=" railway text-[#d49090] self-start w-full z-10 md:flex grid justify-center flex-wrap  md:h-full items-center items- h-auto ml-auto mb-4 mr-10 pb-10 pr-10  font-extrabold gap-x-10 gap-y-[1rem] mt-10">
            {navLinks.map((nav, index) => {
              return (
                <motion.a
                  href={nav.to}
                  key={nav.to}
                  className={`italic border-b-2  ${theme.darkTheme ? "text-[#47ebde]" : "text-black"} hover:text-white transition-all border-white h-fit w-fit z-10 md:text-2xl text-lg`}
                  initial={{ y: '-200vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", delay: 0.5 + Number(`0.${index}`), duration: 3.5 }}
                >
                  {nav.name}
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
