import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProfileCard = ({ src, title }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
      <Image
        src={src}
        alt={title}
        width={500}
        height={1000}
        className="w-2/4 h-2/4 object-contain my-0 mx-auto  rounded-3xl overflow-hidden shadow-3xl"
      />

      <div className="relative p-4 text-center">
        <p className="text-lg text-gray-400 my-5 max-w-[600px] text-left">
          Hello, I&apos;m Marko Sudar, an experienced web developer with a rich
          background in major tech corporations such as Oracle and Microsoft.{" "}
          {<br />}
          {<br />}
          With a robust four years of expertise in the web development industry,
          I specialize in delivering comprehensive solutions encompassing both
          frontend and backend services, coupled with adept application hosting
          on the cloud. {<br />}
          {<br />}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
