"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section id="contact">
      <div className="mt-12">
        <h1 className="text-4xl font-bold text-white my-2">
          Let&apos;s Connect
        </h1>
        <p className="text-[#ADB7BE] mb-8 mt-4 max-w-md">
          {" "}
          I&apos;m actively looking for new opportunities. Feel free to reach out if you have questions or simply want to say hello.
          I&apos;ll do my best to respond promptly!. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you as soon as possible!. You can contact me via any of the below medium.
        </p>
      </div>
      
        
        
      <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
  <Link href="https://github.com/anukulrathore" target="_blank" rel="noopener noreferrer" className="flex items-center mb-5 transition-opacity duration-500 ease-in-out hover:opacity-80">
    <Image src={GithubIcon} alt="Github Icon" className="mr-2" />
    <h1 className="text-white">Github</h1>
  </Link>

  <Link href="https://www.linkedin.com/in/anukul-rathore-b194aa157/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-5 transition-opacity duration-500 ease-in-out hover:opacity-80">
    <Image src={LinkedinIcon} alt="Linkedin Icon" className="mr-2" />
    <h1 className="text-white">LinkedIn</h1>
  </Link>

  <Link href="mailto:rthranukul@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center mb-5 transition-opacity duration-500 ease-in-out hover:opacity-80">
    <Image src={GmailIcon} alt="Gmail Icon" className="bg-white rounded size-9 mt-1.5 ml-1.5 pl-1 pr-1 mr-3" />
    <h1 className="text-white">Gmail</h1>
  </Link>

  <Link href="https://wa.me/9928769660" target="_blank" rel="noopener noreferrer" className="flex items-center mb-10 transition-opacity duration-500 ease-in-out hover:opacity-80">
    <Image src={WhatsappIcon} alt="WhatsApp Icon" className="bg-white rounded size-9 mt-1.5 ml-1.5 pl-1 pr-1 mr-3" />
    <h1 className="text-white">WhatsApp</h1>
  </Link>
</div>


      
      
    </section>
  );
};

export default EmailSection;