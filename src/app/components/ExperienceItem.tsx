"use client";

import Image from "next/image";
import { useState } from "react";

interface ExperienceItemProps {
  company: string;
  position: string;
  description: string;
  imageSrc: string;
  hoverImageSrc: string;
  duration: string;
  logoBackgroundClassName?: string;
}

const ExperienceItem = ({
  company,
  position,
  description,
  imageSrc,
  hoverImageSrc,
  duration,
  logoBackgroundClassName,
}: ExperienceItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex w-full max-w-[600px] flex-col items-center gap-4 rounded-lg p-4 shadow-md transition-shadow md:flex-row md:min-h-[200px]"
      style={{
        backgroundImage: isHovered
          ? `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${hoverImageSrc})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={`${company} logo`}
        width={80}
        height={80}
        className={`rounded-lg shadow-lg object-cover ${logoBackgroundClassName ?? ""}`}
      />

      <span className="mt-2 w-full text-center text-sm text-gray-400 md:absolute md:top-4 md:right-4 md:mt-0 md:w-auto md:text-right md:max-w-[180px]">
        {duration}
      </span>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{company}</h3>
          <h4 className="text-md text-gray-300">{position}</h4>
          <p className="text-md text-gray-200 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
