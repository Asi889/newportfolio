// import { useRouter } from 'next/router';
import NavBar from '../NavBar';
import { createContext, useEffect, useState } from 'react';
import OpenNav from '../OpenNav';
import Head from '../Head';
import { useUnmountEffect } from 'framer-motion';
import { useContext } from "react";
import { Context } from "../../pages/_app";

const Layout = function ({ children }) {
  //   const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(Context)

  const themeToggle = context.toggleTheme
  const theme = context.darkTheme

  const handleHamburger = () => {
    // console.log("bbombboooooom");
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode")
    if (isDarkMode !== "true") {


      themeToggle()


      console.log(666);
      return

    }

    console.log(theme);
    console.log(9999);

    localStorage.setItem("darkMode", theme);



  }, []);

  return (
    <section className="flex flex-col lg:flex-row h-screen w-full">
      {/* <section className="lg:flex grid">       */}
      <Head></Head>
      <NavBar isOpen={isOpen} handleHamburger={handleHamburger} />

      {isOpen && <div className='w-full h-full'> <OpenNav isOpen={isOpen} handleHamburger={handleHamburger} /> </div>}
      {!isOpen && <main className="w-full h-full">{children}</main>}
    </section>
  );
};


export default Layout;
