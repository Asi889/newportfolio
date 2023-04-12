/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useContext } from "react";
import { useRouter } from 'next/router'
import Hamburger from "./Hamburger";
import { Context } from "../pages/_app";

import DarkModeToggle from "./DarkModeToggle"


const NavBar = function ({ isOpen, handleHamburger }) {
  const [div, setDiv] = useState(false);
  const router = useRouter();
  const theme = useContext(Context)
  console.log(theme);
  console.log("theme");


  const checkk = () => {
    if (router.pathname === '/projects' && isOpen === true) {

      return "relative"
    }
    if (router.pathname === '/projects') return "fixed z-[999999999999999999]"
    if (router.pathname === '/gallery') return "lg:fixed relative z-[999999999999999999]"
  }

  return (
    <div className={`w-full lg:max-w-[100px] max-w-screen  bg-[#222] lg:h-screen h-[100px] nav-bar z-50  ${checkk()}`} >


      <div className="lg:grid flex z-50 lg:justify-center justify-between content-between items-center py-10 h-full">

        <a href="/" className="w-20 h-20 lg:mx-auto mx-4 z-50 order-1" >
          <img className="w-20 h-20" src="https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639907803/Asaf_up6v4r.png" alt=""></img>
        </a>

        <Hamburger isOpen={isOpen} handleHamburger={handleHamburger} />

        {/* <DarkModeToggle /> */}


        <a className="navbar-brand railway text-2xl text-white z-50 lg:order-3 order-2" href="/assets/asafmaromcv.pdf" download target="_blank" rel="noopener">Asaf Marom</a>

      </div>
    </div>
  )
};
export default NavBar