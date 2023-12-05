"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import ProfileCard from "@/app/components/sub/ProfileCard";

const Encryption = () => {
  return (
    <div className="w-full h-[170dvh] flex flex-col items-center" id="about-me">
      <div className="w-3/4 h-full flex flex-col gap-10">
        <div className="z-[5]">
          <motion.div
            variants={slideInFromTop()}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            A bit
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              about{" "}
            </span>
            me
          </motion.div>
        </div>
        <div>
          <ProfileCard src="/MarkoSudar.png" title="Marko Sudar" />
        </div>
        <div className="relative z-[20] bottom-[10px] px-[5px]">
          <div className="text-[20px] font-medium text-center text-gray-300">
            I secure your customer&apos;s data with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              end to end{" "}
            </span>{" "}
          </div>
          <div className="flex flex-col items-center justify-center z-[20] w-auto h-auto">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/LockTop.png"
                alt="Lock top"
                width={50}
                height={50}
                className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
              />
              <Image
                src="/LockMain.png"
                alt="Lock Main"
                width={70}
                height={70}
                className=" z-10"
              />
            </div>

            <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="Welcome-text text-[12px]">Encryption</h1>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full opacity-20 z-[-30] items-start justify-center absolute">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-auto"
            src="/encryption.webm/"
          />
        </div>
      </div>
    </div>
  );
};

export default Encryption;
