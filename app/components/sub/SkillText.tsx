"use client";

import React from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const SkillText = () => {
  return (
    <div
      className="w-full h-auto flex flex-col gap-8 items-center justify-center pt-[10px] z-[20]"
      style={{ transform: "scale(1.2)" }}
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[10px]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px]">
          Embracing creativity and best industry practices
        </h2>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps using{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          in-trend
        </span>{" "}
        technologies
      </motion.div>
    </div>
  );
};

export default SkillText;
