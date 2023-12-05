import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[100vh] w-full md:h-full">
      <video
        autoPlay
        muted
        loop
        className="hidden md:block rotate-180 absolute top-[-340px] left-0 z-[-2] w-full h-full object-cover opacity-80"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
