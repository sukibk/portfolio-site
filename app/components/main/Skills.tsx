"use client";

// Fix the code duplication

import React, { useEffect, useState } from "react";
import SkillDataProvider from "@/app/components/sub/SkillDataProvider";
import {
  Frontend_skill,
  Full_stack,
  Backend_skill,
  Other_skill,
} from "@/constants";
import SkillText from "@/app/components/sub/SkillText";
import { number } from "prop-types";

const Skills = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below on the client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <section
      className="flex flex-col items-center justify-center h-full relative overflow-hidden py-2 md:gap-3"
      id="skills"
    >
      <SkillText />
      <div className="z-[1] scale-75 flex flex-col gap-7 lg:scale-100">
        <div className="flex z-[1] flex-row justify-around flex-wrap mt-4 gap-8 items-center">
          {Frontend_skill.map((image, index) => {
            if (typeof windowSize.width !== "undefined") {
              if (windowSize.width <= 500) {
                if (image.mobile_view) {
                  return (
                    <SkillDataProvider
                      key={image.mobile_index}
                      src={image.Image}
                      width={image.width}
                      height={image.height}
                      index={image.mobile_index}
                    />
                  );
                }
              } else if (windowSize.width > 500) {
                return (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                );
              }
            }
          })}
        </div>
        <div className="flex z-[1] flex-row justify-around flex-wrap mt-4 gap-11 items-center">
          {Backend_skill.map((image, index) => {
            if (typeof windowSize.width !== "undefined") {
              if (windowSize.width <= 500) {
                if (image.mobile_view) {
                  return (
                    <SkillDataProvider
                      key={image.mobile_index}
                      src={image.Image}
                      width={image.width}
                      height={image.height}
                      index={image.mobile_index}
                    />
                  );
                }
              } else if (windowSize.width > 500) {
                return (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                );
              }
            }
          })}
        </div>
        <div className="flex z-[1] flex-row justify-around flex-wrap mt-4 gap-11 items-center">
          {Full_stack.map((image, index) => {
            if (typeof windowSize.width !== "undefined") {
              if (windowSize.width <= 500) {
                if (image.mobile_view) {
                  return (
                    <SkillDataProvider
                      key={image.mobile_index}
                      src={image.Image}
                      width={image.width}
                      height={image.height}
                      index={image.mobile_index}
                    />
                  );
                }
              } else if (windowSize.width > 500) {
                return (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                );
              }
            }
          })}
        </div>
      </div>
      {/*<div className="flex z-[1] flex-row justify-around flex-wrap mt-4 gap-5 items-center">*/}
      {/*  {Other_skill.map((image, index) => (*/}
      {/*    <SkillDataProvider*/}
      {/*      key={index}*/}
      {/*      src={image.Image}*/}
      {/*      width={image.width}*/}
      {/*      height={image.height}*/}
      {/*      index={index}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div> Will be Solidity in future*/}
      <div className="w-full h-full absolute">
        <div className="hidden md:flex items-center justify-center w-full h-full z-[-10] opacity-30 bg-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
