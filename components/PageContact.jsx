import React, { useContext } from 'react';
import ContactMap from "./ContactMap";
import ContactList from "./contact/ContactList";
import UseAnimatedText from './UseAnimatedText';
import ParticlesBackground from './ParticlesBackground';
import FramerText from './FramerText';
import { Context } from '../pages/_app';
function PageContact(props) {
    const theme = useContext(Context)

    const animateText = [
        { type: "paragraph", text: "Contact" },
    ];
    const bodyText= `I’d love to help you with your next project, website, or landing page - whatever you're looking for.  I'd be happy to work with you on a full-time or freelance basis. Get in touch!`
    return (
       
        <div className=' flex flex-col 2xl:flex-row overflow-y-auto  w-full h-full bg-[#333232] railway relative'>
            <ParticlesBackground />
            <div className={`w-full md:pl-10 pl-6 pr-6 md:pr-0 md:pt-4 pt-10 pt z-50  flex-1 ${theme.darkTheme ? "text-white" :"text-black"}`}>

                <div className='md:text-[40px] text-[30px] motion-text'>
                    <FramerText animateText={animateText} />
                </div>
                <div className='mt-6 md:mt-10 max-w-[650px]'><UseAnimatedText text={bodyText} /></div>
                <div className='flex flex-col ab:flex-row pt-6'>
                    <div className='md:pt-14 pt-4 flex-1'>
                        <ContactList />
                    </div>

                </div>
            </div>
                    <div className='w-full  grid items-center justify-center z-50 h-full flex-1 pt-14 md:pt-10 pr-4'>
                        <ContactMap />
                    </div>
        </div>
    );
}

export default PageContact;