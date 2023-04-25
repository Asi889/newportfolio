// import { useRouter } from 'next/router';
import NavBar from '../NavBar';
import { useState } from 'react';
import OpenNav from '../OpenNav';
import Head from '../Head';


const Layout = function ({ children }) {
  //   const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className="flex flex-col lg:flex-row h-screen w-full">
      <Head></Head>
      <NavBar isOpen={isOpen} handleHamburger={handleHamburger} />

      {isOpen && <div className='w-full h-full'> <OpenNav isOpen={isOpen} handleHamburger={handleHamburger} /> </div>}
      {!isOpen && <main className="w-full h-full">{children}</main>}
    </section>
  );
};


export default Layout;
