/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useContext } from 'react';
import { Parallax } from "react-parallax";
import  projectData  from '../src/services/projectData';
import { useRouter } from 'next/router'
import FramerText from './FramerText';
import { Context } from '../pages/_app';


function ParallaxTest(props) {
    const theme = useContext(Context)
    const projects = projectData();
    const computerImg = 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639300873/computer-70206b16dbda0c66d36cddd149fe703e_vqxyre.png'
    const router = useRouter();
    const animateText = [
        { type: "paragraph", text: "My projects" },
    ];

    return (
        <div className='relative pt-[100px] lg:pt-0 999 railway px-10 lg:px-0'>

            {projects ? projects.map((project, index) => {
                return (
                    <div className={`lg:flex grid z-50 lg:pl-[100px] pl-[0px] lg:pt-[0px] pt-[50px]  ${router.pathname === "/projects"}`} key={index}>
                        <Parallax className={`lg:h-screen h-full w-full  z-50 lg:grid  bbc `} bgImage={project.imgeSource} strength={500}>

                            <div className="projec-img-wrapper z-50 relative flex max-h-[500px] max-w-[90%] mx-auto items-center ">
                                <img className="items-center  relative  w-full h-full z-50" alt="" src={computerImg}></img>
                                <img className="project-img absolute  top-[12px] w-full  object-cover max-h-[400px] rounded-lg" alt="" src={project.imgeSource}></img>
                            </div>

                        </Parallax>
                       
                        

                        <div className="projec-img-wrapper ttt z-50 relative  lg:hidden flex  max-h-[500px] max-w-[200px] md:max-w-full  mx-auto items-center">
                            <img className="items-center  relative  w-full h-full z-50" alt="" src={computerImg}></img>
                            <img className="project-img absolute  top-3 w-full    object-cover max-h-[120px] rounded-lg" alt="" src={project.imgeSource}></img>
                        </div>

                        <div className={` flex w-full justify-center z-50 mt-10  ${theme.darkTheme ? "text-[#e0d9d9]" : "text-black"}`}>
                            <div className={`text-[#47ebde] relative lg:absolute text-6xl md:top-10 top-44  w-full ${theme.darkTheme ? "hidden" : "block"} text-center z-[9999] md:text-[40px] text-[30px] font-bold motion-text`}>
                                <FramerText animateText={animateText} />
                            </div>

                            <div className="flex flex-col gap-y-4 justify-center w-full px-10 text-center z-50">


                                <h1 className="project-title font-bold  md:text-6xl text-4xl md:pb-10 pb-0">{project.title}</h1>
                                <p className="project-text  lg:text-3xl text-2xl">{project.body}</p>
                                <div className="tech-wrapper flex flex-wrap gap-x-4 gap-y-2 justify-center">
                                    {project.icons.map((icon, index) => <h3 key={index} className="pl-2 text-3xl font-semibold border-b-2 border-red-400 text-center">{icon}{index != (project.icons.length - 1) ? ', ' : ''}</h3>)}
                                </div>
                                <div className="grid flex-wrap gap-x-4 w-full px-10">
                                    <Link href={project.sourceCode} className="flex justify-center" >
                                        <button className="project_btn11 flex items-center justify-center md:h-[60px] h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl self-end w-full md:max-w-full max-w-[200px]  text-white py-10 px-10">
                                            Code
                                            <svg className="github_logo w-[47px] h-[31px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><path fill="none" d="M-.2.1h53.8v53.4H-.2z"></path><path d="M15.9 7.7c3.3-1.9 6.9-2.9 10.8-2.9 3.9 0 7.5 1 10.8 2.9s5.9 4.5 7.8 7.8c1.9 3.3 2.9 6.9 2.9 10.8 0 4.7-1.4 8.9-4.1 12.6-2.7 3.7-6.2 6.3-10.6 7.7-.5.1-.9 0-1.1-.2-.2-.2-.4-.5-.4-.8v-5.9c0-1.8-.5-3.1-1.5-4 1.1-.1 2-.3 2.9-.5.8-.2 1.7-.6 2.6-1.1.9-.5 1.7-1.1 2.3-1.9.6-.7 1.1-1.7 1.5-2.9s.6-2.6.6-4.2c0-2.2-.7-4.1-2.2-5.7.7-1.7.6-3.6-.2-5.7-.5-.2-1.3-.1-2.3.3-1 .4-1.8.8-2.6 1.2l-1.1.7c-1.7-.5-3.5-.7-5.4-.7-1.8 0-3.6.2-5.4.7-.3-.2-.7-.5-1.2-.8-.5-.3-1.3-.7-2.3-1.1-1.1-.4-1.9-.5-2.4-.4-.8 2.1-.9 4-.2 5.7-1.4 1.7-2.1 3.6-2.1 5.8 0 1.6.2 3 .6 4.2.4 1.2.9 2.2 1.5 2.9.6.7 1.3 1.4 2.2 1.9.9.5 1.8.9 2.6 1.1.8.2 1.8.4 2.9.5-.7.7-1.2 1.6-1.4 2.9-.4.2-.8.3-1.3.4-.4.1-1 .1-1.6.1s-1.2-.2-1.8-.6c-.6-.4-1.1-1-1.5-1.7-.4-.6-.8-1.1-1.4-1.5-.5-.4-1-.6-1.4-.7l-.6-.1c-.4 0-.7 0-.8.1-.1.1-.2.2-.1.3s.1.3.3.4c.1.1.2.2.4.3l.2.1c.4.2.8.5 1.2 1.1.4.5.7 1 .9 1.4l.3.6c.2.7.7 1.3 1.2 1.7.6.4 1.2.7 1.9.8.7.1 1.3.2 1.9.2.6 0 1.1 0 1.5-.1l.6-.1v4c0 .3-.1.6-.4.8-.2.2-.6.3-1.1.2-4.3-1.4-7.8-4-10.6-7.7S5.1 30.7 5.1 26c0-3.9 1-7.5 2.9-10.8 2-3 4.6-5.6 7.9-7.5zm-2.6 27.9c.1-.1 0-.2-.2-.3-.2-.1-.3 0-.4.1-.1.1 0 .2.2.3.2.1.4.1.4-.1zm.9 1c.1-.1.1-.2-.1-.4s-.3-.2-.4-.1c-.1.1-.1.2.1.4.1.2.3.2.4.1zm.8 1.2c.2-.1.2-.3 0-.5-.1-.2-.3-.3-.5-.2-.2.1-.2.3 0 .5s.4.3.5.2zm1.2 1.2c.1-.1.1-.3-.1-.5s-.4-.3-.6-.1c-.2.1-.1.3.1.5.3.2.5.2.6.1zm1.6.7c.1-.2-.1-.4-.4-.4-.3-.1-.5 0-.5.2-.1.2 0 .3.4.4.2.1.4 0 .5-.2zm1.8.1c0-.2-.2-.3-.5-.3s-.4.1-.4.3c0 .2.2.3.5.3.2 0 .4-.1.4-.3zm1.6-.3c0-.2-.2-.3-.5-.3-.3.1-.4.2-.4.4s.2.3.5.2c.3.1.4-.1.4-.3z"></path></svg>

                                        </button>
                                    </Link>
                                    {project.liveWebsite ?
                                        <Link href={project.liveWebsite} className="flex justify-center" >
                                            <button className="flex items-center justify-center md:h-[60px] h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl self-end w-full md:max-w-full max-w-[200px] text-white py-10 px-10">
                                                Live Website

                                            </button>
                                        </Link>
                                        : " "
                                    }
                                </div>

                            </div>

                        </div>

                    </div>



                )
            }) : ""}
        </div>
    );
}

export default ParallaxTest;