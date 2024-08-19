"use client";

import {
  setSignatureSkill,
  resetSignatureSkill,
} from "../redux/slices/signatureSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { SkillState } from "@/types/scoreTypes";
import { skillDescriptions } from "@/utils/skillDescriptions";
import { skillImages } from "@/utils/skillImages";

import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

export default function SidePanel({
  setWillSelectSkill,
}: {
  setWillSelectSkill: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const selectedSkill = useSelector((state: RootState) => state.selectedSkill);
  const skillHeadline: string = skillDescriptions[selectedSkill][0];
  const skillImage = skillImages[selectedSkill];

  function convertTitle(input: string): string {
    const words = input.replace(/([a-z])([A-Z])/g, "$1 $2");
    let allCaps = words.toUpperCase();
    if (allCaps === "HAND EYE COORDINATION")
      allCaps = "HAND / EYE COORDINATION";
    return allCaps;
  }

  const title = convertTitle(selectedSkill);

  const handleSetSignature = (skill: keyof SkillState) => {
    dispatch(resetSignatureSkill());
    dispatch(setSignatureSkill(skill));
  };

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
              handleSetSignature(selectedSkill);
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
