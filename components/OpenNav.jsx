import {  useContext, useState } from 'react';
import GithubIcon from './images/GithubIcon';
import InstagramIcon from './images/InstagramIcon';
import WhtieLinkedin from './images/WhtieLinkedin';
import Corsur from './Cursor';
import navs from '../src/services/utils'
import LinkedinIcon from './images/LinkedinIcon';
import { Context } from "../pages/_app";


const OpenNav = (props) => {
  const { isOpen, handleHamburger } = props;

  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const navLinks = navs();

  const theme = useContext(Context);

  return (
    <div className={` railway relative ${theme.darkTheme ? "bg-[#363030]" : "bg-[#757373]"} md:grid block text-white z-40 px-4 h-full   transition duration-[2s] ease-in-out ${isOpen ? ' w-full text-center  justify-center   justify-items-center' : "w-0"}`}>
      
      <div className="nav-links-wrapper self-end  mix-blend-difference pt-10 z-20 md:flex grid flex-wrap h-fit justify-center font-extrabold md:text-7xl text-4xl gap-x-10 md:gap-y-4 gap-y-8  transition-all duration-500 ease-in-out">
        {navLinks.map((nav) => {
          return (
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={nav.to} key={nav.to} className={`nav-link italic border-b-2  ${theme.darkTheme ? "text-[#fff] border-white" : "text-[#727072] border-[#727072]"}   h-fit z-50   `} onClick={handleHamburger}>{nav.name}</a>
          )
        })}
        {/* mix-blend-exclusion */}
      </div>
      <div className={`open-nav-link-wrapper ${theme.darkTheme ? "text-white" : "text-[#535252]"} z-50 flex flex-wrap md:gap-x-10 gap-x-6 md:pt-40 pt-24 justify-center mix-blend-difference ${isOpen ? "" : "hidden"}`}>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center  h-fit">
          <GithubIcon />
          <a id="" className="contact-link" href="https://github.com/Asi889">@Asi889</a>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center h-fit">
          <InstagramIcon />
          <a id="" className="contact-link" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">@freestyle_tlv</a>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center h-fit">
          {/* <WhtieLinkedin /> */}
          <LinkedinIcon />
          <div className="">
          <a id="" className="contact-link " href="https://www.linkedin.com/in/asaf-marom-0581a8136/">@Asaf_Marom</a>
          </div>
        </div>
      </div>

      <Corsur cursorVariant={cursorVariant} />

    </div>

  )
};

export default OpenNav;