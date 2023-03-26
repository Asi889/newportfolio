// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import InformationIcaon from '../images/InformationIcon';
import { useState } from 'react';
import OpenNav from '../OpenNav';
import Head from '../Head';
// import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
//   const { pathname } = useRouter();
const [isOpen, setIsOpen] = useState(false);
  
  const handleHamburger = () => {
    console.log("bbombboooooom");
    setIsOpen(!isOpen);
  }

  return (
    <section className="lg:flex grid">      
    <Head></Head>
        <NavBar isOpen={isOpen} handleHamburger={handleHamburger} /> 
        {isOpen && <OpenNav isOpen={isOpen} handleHamburger={handleHamburger} />}
        {!isOpen && <main className="w-full h-screen">{children}</main>}

      {/* <main className="w-full h-screen">{children}</main> */}
      {/* <InformationIcaon /> */}
    </section>
  );
};


export default Layout;
