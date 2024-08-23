"use client";

import { skillDescriptions } from "@/utils/skillDescriptions";
import { skillImages } from "@/utils/skillImages";

import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

export default function SidePanel({
  setWillSelectSkill,
  setSelectedSkill,
  clickedSkill,
}: {
  setSelectedSkill: Dispatch<SetStateAction<string | null>>;
  setWillSelectSkill: Dispatch<SetStateAction<boolean>>;
  clickedSkill: string;
}) {
  const skillHeadline: string = skillDescriptions[clickedSkill];
  const skillImage = skillImages[clickedSkill];

  function convertTitle(input: string): string {
    const words = input.replace(/([a-z])([A-Z])/g, "$1 $2");
    let allCaps = words.toUpperCase();
    if (allCaps === "HAND EYE COORDINATION")
      allCaps = "HAND / EYE COORDINATION";
    return allCaps;
  }

  const title = convertTitle(clickedSkill);

  return (
    <aside className="flex flex-row mx-2 gap-2 md:m-12 md:gap-8 2xl:flex-col 2xl:gap-0 2xl:p-0 2xl:m-0 justify-center items-center 2xl:py-12 rounded-md">
      <ul className="relative w-1/2 2xl:w-full">
        <li className={`mx-2 flex flex-col items-center`}>
          <Image src={skillImage} width={368} height={512} alt="" />
        </li>
        <li className="z-15">
          <h3
            id="panel-skill-title"
            className="text-c-gray text-base text-black md:text-3xl py-1 w-full text-center absolute bottom-0"
          >
            {title}
          </h3>
        </li>
      </ul>
      <div className="w-1/2 2xl:w-full flex flex-col items-center justify-center gap-2 md:gap-0">
        <ul className="flex flex-col w-full lg:w-1/2 2xl:w-full gap-1 mt-2">
          <p className="h-[56px]">{skillHeadline}</p>
        </ul>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              setSelectedSkill(clickedSkill);
              setWillSelectSkill(false);
            }}
          >
            Select Skill
          </button>
        </div>
      </div>
    </aside>
  );
}
