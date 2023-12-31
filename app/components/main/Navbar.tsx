"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MobileNavigation from "@/app/components/sub/MobileNavigation";
import DesktopNavigation from "@/app/components/sub/DesktopNavigation";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

const Navbar = () => {
  const [windowSize, setWindowsSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowsSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      {(() => {
        if (typeof windowSize.width !== "undefined") {
          if (windowSize.width <= 700) {
            return <MobileNavigation />;
          } else return <DesktopNavigation />;
        }
      })()}
    </>
  );
};

// height was 65px

export default Navbar;

// <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
//   <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
//     <a
//         href="#about-me"
//         className="h-auto w-20 flex flex-row items-center lg:w-auto"
//     >
//       <Image
//           src="/logo2.png"
//           alt="logo"
//           width={50}
//           height={50}
//           className="cursor-pointer hover:animate-slowspin"
//       />
//
//       <span className="font-bold ml-[10px] hidden lg:block text-gray-300">
//             Marko Sudar
//           </span>
//     </a>
//
//     <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
//       <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
//         <a href="#about-me" className="cursor-pointer">
//           About me
//         </a>
//         <a href="#skills" className="cursor-pointer">
//           Skills
//         </a>
//         <a href="#projects" className="cursor-pointer">
//           Projects
//         </a>
//       </div>
//     </div>
//
//     <div className="flex flex-row gap-5">
//       {Socials.map((social) => (
//           <Image
//               src={social.src}
//               alt={social.name}
//               key={social.name}
//               width={24}
//               height={24}
//           />
//       ))}
//     </div>
//   </div>
// </div>
