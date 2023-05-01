/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";

import ParticlesBackground from "../../components/ParticlesBackground";
import MotionText from "../../components/MotionText";
import FramerText from "../../components/FramerText";
import { Context } from "../_app";
import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";

function About() {
  let title = "About me".split(" ");
  const theme = useContext(Context);

  const animateText = [{ type: "paragraph", text: "About me" }];

  const seo = seoMerge({
    title: "Asaf Marom",
    description: `Asaf Marom's Profile website - Gallery page `,
  });

  return (
    <div
      id="sec2"
      className="about-page relative h-full grid lg:pl-[100px] pl-0 w-full   pt-10"
    >
      <NextSeo {...seo} />
      <ParticlesBackground />

      <div
        className={`about_text railway lg:text-[22px] text-xl pl-4 w-full pr-4 md:pr-0  h-full bg-none z-50   ${
          theme.darkTheme ? "text-[#b3acac]" : "text-black"
        } relative  `}
      >
        {/* <div className="z-50 opacity-100 absolute  w-full h-fit p-4 pt-10"> */}
          <h1 className="lg:text-[40px] text-[30px] relative z-[99999] text-[#47ebde] font-bold motion-text">
            <FramerText animateText={animateText} />
          </h1>
          <p className="first_text pt-4 font opacity-100 z-50">
            {`I am a Full-Stack web developer who is self-motivated, organized, and
          team-oriented. I am seeking a dynamic position where I can use my analytical
          and programming skills for developing quality software products. I
          have a strong work ethic, excellent communication skills, and a go-getter attitude. I'm open minded, 
          love a challenge, and am always ready to learn something new.`}
          </p>
          <br></br>

          <p className="second_text">
            I am a graduate of{" "}
            <a
              className="bold_elevation font-extrabold text-[24px] text-red-400"
              href="https://www.elevation.ac"
            >
              Elevation Academy
            </a>
            {""}
            {`, a full-stack web developer course. It's an industry-based intensive
          3-month coding bootcamp which covered the entire MERN stack and
          beyond. To further sharpen my skills, I built a number of end-to-end projects from scratch while
          adhering to solid`}
            <em className="bold_text"> OOP </em>
            principles and communicating with a number of external APIs.
          </p>

          <br></br>
          {/* <br></br> */}
          <h3 className="font-bold border-b-2 border-[#47ebde] w-fit">
            {" "}
            My Current technical skill are
          </h3>
          <div className="flex flex-wrap gap-y-4 mt-4">
            <span>
              <span className="font-bold ">languages - </span>
              main-JavaScript(ES5/6) and PHP{" "}
            </span>
            <span>
              <span className="font-bold ">Frameworks - </span>
              React,Next.js,Vue, MobX, Redux
            </span>
            <span>
              <span className="font-bold ">Client Side - </span>
              HTML, CSS, Materialiez, BootStarp, Tailwind
            </span>
            <span>
              <span className="font-bold ">Server Side & DataBase - </span>
              Node.js Express, MongoDB, Mongoose,
            </span>
            <span>
              <span className="font-bold ">Tools - </span>
              Gitithub,Bitbucket, working in collaboration in Github,Heroku,
              AWS-EC2
            </span>
          </div>

          <br></br>
          <p className="third_text">
            {`          A fun fact about me is that I'm a self-taught freestyle frisbee pro. On the weekend, you'll find me playing on the beach. If you also like frisbee, check me out here!`}{" "}
            <a
              className="camra_imoji"
              href="https://www.instagram.com/p/BXuZ0rpFRLf/?igshid=zjmux3ilm5s7"
            >
              📷
            </a>
          </p>
          <br></br>
          <em className="bold_text_withColor">
            <Link
              href="/assets/asafmaromcv.pdf"
              download
              target="_blank"
              rel="noopener"
            >
              📝 Download my resume here
              {/* <a className="navbar-brand" download target="_blank" rel="noopener">Asaf Marom</a> */}
              {/* <a download="asafmaromCV.pdf" target="_blank">📝 My resume</a> */}
            </Link>
          </em>
        {/* </div> */}
      </div>
      <div className={`about_img_pic z-50 w-full  items-center   lg:grid hidden `}>
        <img
          id="idabout_pic"
          className="lg:w-full w-0"
          src="https://res.cloudinary.com/dvdzjj8jo/image/upload/c_crop,h_1370,w_2048/v1616576685/%D7%97%D7%95%D7%A3_%D7%94%D7%AA%D7%95%D7%A4%D7%99%D7%9D_062-removebg_qrkktl.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default About;
