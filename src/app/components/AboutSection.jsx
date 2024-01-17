"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { skills } from "./Projectsdata";


const AboutSection = () => {

  

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/on-laptop.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <p className="text-2xl font-bold text-white mt-4">Skills</p>
          <div className="flex flex-row justify-start mt-2">
          <ul className="list-disc pl-2">
            {skills.map((skill,index)=>(
              <li key={index}>{skill}</li>
            ))}
          </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;