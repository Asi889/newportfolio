import React, { useContext } from 'react';
import ContactMap from "./ContactMap";
import ContactList from "./Contact/ContactList";
import UseAnimatedText from './UseAnimatedText';
import ParticlesBackground from './ParticlesBackground';
import FramerText from './FramerText';
import { Context } from '../_app';
function PageContact(props) {
    const theme = useContext(Context)

    const animateText = [
        { type: "paragraph", text: "Contact" },
    ];
    const bodyText= `I’d love to help you with your next project, website, or landing page - whatever you're looking for.  I'd be happy to work with you on a full-time or freelance basis. Get in touch!`
    return (
       
        <div className=' flex flex-col 2xl:flex-row  w-full h-screen bg-[#333232] railway relative'>
            <ParticlesBackground />
            <div className={`w-full  pl-10 pt-20 z-50 flex-1 ${theme.darkTheme ? "text-white" :"text-black"}`}>

                <div className='md:text-[40px] text-[30px] motion-text'>
                    <FramerText animateText={animateText} />
                </div>
                <div className='mt-6 md:mt-10 max-w-[600px]'><UseAnimatedText text={bodyText} /></div>
                <div className='flex flex-col md:flex-row pt-6'>
                    <div className=''>
                        <ContactList />
                    </div>

                    <div className='w-full grid items-center justify-center z-50 h-full flex-1'>
                        <ContactMap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContact;