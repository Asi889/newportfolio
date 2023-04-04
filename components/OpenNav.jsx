import {  useState } from 'react';
import GithubIcon from './images/GithubIcon';
import InstagramIcon from './images/InstagramIcon';
import WhtieLinkedin from './images/WhtieLinkedin';
import Corsur from './Cursor';
import navs from '../src/services/utils'

const OpenNav = (props) => {
  const { isOpen, handleHamburger } = props;

  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const navLinks = navs()

  return (
    <div className={`open-nav11 railway bg-[#363030]  text-white z-40 px-4 h-screen justify-center relative transition-all duration-[1s] ease-in-out  ${isOpen ? 'lg:w-screen w-full text-center grid justify-center content-evenly  justify-items-center' : "w-0"}`}>
      
      <div className="nav-links-wrapper mix-blend-difference  z-20 md:flex grid flex-wrap h-fit justify-center font-extrabold md:text-7xl text-5xl gap-x-10 md:gap-y-4 gap-y-12  transition-all duration-[2s] ease-in-out">
        {navLinks.map((nav) => {
          return (
            <a onMouseEnter={textEnter} onMouseLeave={textLeave} href={nav.to} key={nav.to} className="nav-link italic border-b-2 text-[#fff]  border-white h-fit z-50   " onClick={handleHamburger}>{nav.name}</a>
          )
        })}
        {/* mix-blend-exclusion */}
      </div>
      <div className={`open-nav-link-wrapper z-50 flex flex-wrap md:gap-x-10 gap-x-6  h-full content-evenly ${isOpen ? "" : "hidden"}`}>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center mix-blend-difference">
          <GithubIcon />
          <a id="" className="contact-link" href="https://github.com/Asi889">@Asi889</a>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center">
          <InstagramIcon />
          <a id="" className="contact-link" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">@freestyle_tlv</a>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="grid justify-center gap-y-4 justify-items-center ">
          <WhtieLinkedin />
          <div className="mix-blend-difference">
          <a id="" className="contact-link " href="https://www.linkedin.com/in/asaf-marom-0581a8136/">@Asaf_Marom</a>
          </div>
        </div>
      </div>

      <Corsur cursorVariant={cursorVariant} />

    </div>

  )
};

export default OpenNav;