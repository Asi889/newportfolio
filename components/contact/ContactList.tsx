import React from "react";
import GithubIcon from "../images/GithubIcon";
import InstagramIcon from "../images/InstagramIcon";
import LinkedinIcon from "../images/LinkedinIcon";

function ContactList() {
  const text =
    "I’m interested in freelance opportunities – large to small projects. However, if you have other requests or questions, don’t hesitate to ask me.".split(
      " "
    );

  return (
    <>
      <div className="w-full lg:h-20 h-8 flex  gap-x-2">
        <GithubIcon />
        <a className="contact-link lg:text-base text-xs" href="https://github.com/Asi889">
          @Asi889
        </a>
      </div>
      <div className="w-full lg:h-20 h-8 flex gap-x-2">
        <InstagramIcon />
        <a
          className="contact-link lg:text-base text-xs"
          href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link"
        >
          @freestyle_tlv
        </a>
      </div>
      <div className="w-full lg:h-20 h-8 flex gap-x-2">
        {/* <div className="h-12 w-12"> */}
          <LinkedinIcon />
        {/* </div> */}
        <a
          className="contact-link lg:text-base text-xs"
          href="https://www.linkedin.com/in/asaf-marom-0581a8136/"
        >
          @Asaf_Marom
        </a>
      </div>
        <div className="hidden lg:block">
          <p className="project-text">Or by mail: Asafmarom89@gmail.com</p>
        </div>
    </>
  );
}

export default ContactList;
