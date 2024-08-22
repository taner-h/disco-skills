"use client";

import Image from "next/image";

export default function Skill({
  imageSource,
  title = "[title]",
  isSelected,
  isClicked,
  handleClick,
}: {
  imageSource: any;
  title: string;
  isSelected: boolean;
  isClicked: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className={`skill-container ${isClicked ? "selected-skill" : ""}`}
      onClick={handleClick}
    >
      <div className={!isSelected ? "grayscale" : ""}>
        <Image src={imageSource} width={368} height={512} alt="" />
      </div>
      <h6
        className={`skill-title text-xs md:text-sm 2xl:text-base md:tracking-tight md:leading-4 2xl:leading-4 w-full`}
      >
        {title}
      </h6>
      <div className="skill-gradient-overlay" />
    </div>
  );
}
