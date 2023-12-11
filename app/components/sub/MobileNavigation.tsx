"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { toggle } from "@/lib/navbar/navbarSlice";
import DesktopNavigation from "@/app/components/sub/DesktopNavigation";
import styles from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const navbarExpanded = useAppSelector((store) => store.navbar.expanded);
  const dispatch = useAppDispatch();
  const toggleNavbar = () => {
    //@ts-ignore
    dispatch(toggle());
  };

  return (
    <>
      <div
        className={`w-full duration-[0.5s] ${
          !navbarExpanded ? "h-[65px]" : "h-full"
        } fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 transition-all`}
      >
        {/**/}
        {/*<div*/}
        {/*  className={`absolute h-[70px] w-[70px] top-[30px] right-[30px] ${*/}
        {/*    navbarExpanded ? "" : "hidden"*/}
        {/*  }`}*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    className="absolute right-[0px] cursor-pointer rotate-45 hover:rotate-90 transition-all "*/}
        {/*    src="/NavbarClose.png"*/}
        {/*    alt="Mobile Navigation Close"*/}
        {/*    width={30}*/}
        {/*    height={30}*/}
        {/*    onClick={toggleNavbar}*/}
        {/*  />*/}
        {/*</div>*/}
        <div
          className={`h-full w-full flex ${
            navbarExpanded
              ? "flex-col"
              : "flex-row items-center justify-between"
          }`}
        >
          <div className={`${navbarExpanded ? "hidden" : ""}`}>
            <a
              href="#about-me"
              className="h-auto w-20 flex flex-row items-center lg:w-auto "
            >
              <Image
                src="/logo2.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin"
              />
            </a>
          </div>
          <div
            className={`overflow-visible p-[15px] inline-block cursor-pointer transition-opacity border-none hover:opacity-[0.7]
              ${navbarExpanded ? "self-end justify-self-end" : ""}\
            `}
          >
            <div
              className={"w-[40px] h-[40px] inline-block relative"}
              onClick={toggleNavbar}
            >
              <div
                className={`block top-[50%] mt-[-2px] w-[40px] h-[4px] bg-[white] rounded absolute 
                before:content-[''] before:block before:top-[-10px] before:w-[40px] before:h-[4px] before:bg-[white] before:rounded before:absolute
                after:content-[''] after:block after:bottom-[-10px] after:w-[40px] after:h-[4px] after:bg-[white] after:rounded after:absolute
                ${
                  navbarExpanded
                    ? "bottom-0 transition-all rotate-[-45deg] right-[0] flex justify-self-end self-end" +
                      "after:top-[0] after:transition-all after:opacity-0 before:transition-all before:rotate-[-90deg] before:top-[0]"
                    : ""
                }`}
              />
            </div>
          </div>
          <div
            className={`flex flex-col h-[80vh] gap-20 ${
              navbarExpanded ? "" : "hidden"
            }`}
          >
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

        {/**/}
      </div>
    </>
  );
};

export default MobileNavigation;
