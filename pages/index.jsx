
import ParticlesBackground from "./components/ParticlesBackground";
import { motion } from "framer-motion";
import FramerText from "./components/FramerText";
import Head from "./components/Head";
import { navs } from "./src/utils/utils";
import ContentTyper from "./components/ContentTyper";
import { Context } from "./_app";
import { useContext } from "react";

export default function Home() {
const theme = useContext(Context)
  const hiText = [
    { type: "paragraph", text: "Hi," },
  ];

  const animateText = [
    { type: "paragraph", text: "My name is Asaf Marom (A.K.A Asi)" },
  ];
  


  return (
    <>
      <Head></Head>
      <div className="relative h-full ">
        <ParticlesBackground />
        <div className="relative z-10 motion-text grid flex-col gap-x-[10px] flex-wrap mx-4 h-full">
          <div>

            <div className="font-bold md:mt-40 mt-4 h-fit">

              <FramerText animateText={animateText} hiText={hiText} />

            </div>
            <div className={`max-w-[950px] flex flex-wrap ${theme.darkTheme ? "text-white" :"text-black"}  gap-x-0 md:mt-20 mt-10 h-fit railway`}>

              <ContentTyper />
              
            </div>
          </div>
          <div className=" railway text-[#d49090] w-full z-10 md:flex grid justify-center flex-wrap  h-fit ml-auto mb-4 mr-10 pb-10 pr-10 self-end font-extrabold gap-x-10 gap-y-4">
            {navs.map((nav, index) => {
              return (
                <motion.a
                  href={nav.to}
                  key={nav.to}
                  className={`nav-link italic border-b-2  ${theme.darkTheme ? "text-[#47ebde]" :"text-black"} hover:text-white transition-all border-white h-fit w-fit z-10 text-5xl`}
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", delay: 1.6 + Number(`0.${index}`), duration: 1 }}
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
