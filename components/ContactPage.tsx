import React, { useContext } from "react";
import ContactMap from "./ContactMap";
import Map from "./Map";
import ContactList from "./contact/ContactList";
import UseAnimatedText from "./UseAnimatedText";
import ParticlesBackground from "./ParticlesBackground";
import FramerText from "./FramerText";
import { Context } from "../pages/_app";
function ContactPage(props) {
  const theme = useContext(Context);

  const animateText = [{ type: "paragraph", text: "Contact" }];
  const bodyText = `I’d love to help you with your next project, website, or landing page - whatever you're looking for. I'd be happy to work with you on a full-time or freelance basis. Get in touch!`;
  return (
    <div className=" flex flex-col lg:flex-row overflow-y-auto md:overflow-y-visible  w-full  h-full contact-wrapper  bg-[#333232] railway relative">
      {/* <div className='fixed'></div> */}
      <ParticlesBackground />
      <div
        className={`w-full md:pl-10 pl-6 pr-6 md:pr-0 md:pt-4 h-screen overflow-y-hidden shrink pt-10 pt z-50 ${
          theme.darkTheme ? "text-white" : "text-black"
        }`}
      >
        <div className="md:text-[40px] text-[30px] motion-text font-bold">
          <FramerText animateText={animateText} />
        </div>
        <div className="mt-2 lg:mt-10 max-w-[620px]">
          <UseAnimatedText text={bodyText} />
        </div>
        {/* <div className='flex flex-col ab:flex-row pt-6'> */}
        <div className="md:pt-14 pt-8  flex">
          <div className="flex-1 shrink w-full grid content-evenly">
            <ContactList />
          </div>
          <div className="w-full 111    grid lg:hidden items-center justify-center z-50 h-full flex-1 pt-0 lg:pt-10 pr-4">
            <Map />
            {/* <ContactMap /> */}
          </div>
          
        </div>

        <div className="text-white h-full z-50 lg:hidden block pt-6">
          <p className="project-text  ">Or by mail: Asafmarom89@gmail.com</p>
        </div>

        {/* </div> */}
      </div>
      <div className="w-full  222 lg:grid hidden items-center justify-center z-50 h-full shrink pt-14 md:pt-10 pr-4">
        <Map />
        {/* <ContactMap /> */}
      </div>
      
    </div>
  );
}

export default ContactPage;
