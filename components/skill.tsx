"use client";

import Image from "next/image";

export default function Skill({
  imageSource,
  score = 0,
  modifier = 1,
  title = "[title]",
  isSignature = false,
  isSelected = false,
  updateFunction,
}: {
  imageSource: any;
  score: number;
  modifier: number;
  title: string;
  isSignature: boolean;
  isSelected: boolean;
  updateFunction: any;
}) {
  let newModifier = modifier;
  if (isSignature) {
    score++;
    newModifier++;
  }

  return (
    <div
      className={`skill-container ${isSelected ? "selected-skill" : ""}`}
      onClick={updateFunction}
    >
      <div className={!isSignature ? "grayscale" : ""}>
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
