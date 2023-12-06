"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const MobileNavigation = () => {
  return (
    <>
      <div className="absolute h-[200px] w-[200px] top-[30px] right-[30px]">
        <Image
          className="absolute right-[0px] cursor-pointer rotate-45 hover:rotate-90 transition-all "
          src="/NavbarClose.png"
          alt="Mobile Navigation Close"
          width={30}
          height={30}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        {/*<div>*/}
        {/*  <a*/}
        {/*    href="#about-me"*/}
        {/*    className="h-auto w-20 flex flex-row items-center lg:w-auto"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      src="/logo2.png"*/}
        {/*      alt="logo"*/}
        {/*      width={50}*/}
        {/*      height={50}*/}
        {/*      className="cursor-pointer hover:animate-slowspin"*/}
        {/*    />*/}

        {/*    <span className="font-bold ml-[10px] hidden lg:block text-gray-300">*/}
        {/*      Marko Sudar*/}
        {/*    </span>*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className="flex flex-col h-[80vh] gap-20">
          <div className="h-[50vh]">
            <div className="flex flex-col h-full justify-between text-[40px] font-bold text-gray-200 mt-[1rem]">
              <a
                href="#technologies"
                className="cursor-pointer transition-all duration-[0.4s] hover:text-[60px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
              >
                Technologies
              </a>
              <a
                href="#about-me"
                className="cursor-pointer transition-all duration-[0.4s] hover:text-[60px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
              >
                About me
              </a>
              <a
                href="#projects"
                className="cursor-pointer transition-all duration-[0.4s] hover:text-[60px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                className="cursor-pointer transition-all hover:scale-[1.3]"
                src={social.src}
                alt={social.name}
                key={social.name}
                width={35}
                height={35}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
