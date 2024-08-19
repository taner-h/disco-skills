import type { Dispatch, SetStateAction } from "react";
import SidePanel from "./side-panel";
import SkillsContainer from "./skills-container";

export function SkillSelection({
  setWillSelectSkill,
}: {
  setWillSelectSkill: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <main className="min-h-screen flex items-center">
      <ul className="flex flex-col 2xl:flex-row justify-center items-center">
        <li id="skill-container" className="w-full 2xl:px-12 py-8 2xl:w-2/3">
          <SkillsContainer />
        </li>
        <li
          id="side-panel-container"
          className="w-full 2xl:px-24 py-8 2xl:w-1/3"
        >
          <SidePanel setWillSelectSkill={setWillSelectSkill} />
        </li>
      </ul>
    </main>
  );
}
