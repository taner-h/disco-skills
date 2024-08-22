import { useState, type Dispatch, type SetStateAction } from "react";
import SidePanel from "./side-panel";
import SkillsContainer from "./skills-container";

export function SkillSelection({
  setWillSelectSkill,
  setSelectedSkill,
  selectedSkill,
}: {
  setWillSelectSkill: Dispatch<SetStateAction<boolean>>;
  setSelectedSkill: Dispatch<SetStateAction<string | null>>;
  selectedSkill: string | null;
}) {
  const [clickedSkill, setClickedSkill] = useState<string>(
    selectedSkill || "logic"
  );

  return (
    <main className="min-h-screen flex items-center">
      <ul className="flex flex-col 2xl:flex-row justify-center items-center">
        <li id="skill-container" className="w-full 2xl:px-12 py-8 2xl:w-2/3">
          <SkillsContainer
            setClickedSkill={setClickedSkill}
            clickedSkill={clickedSkill}
            selectedSkill={selectedSkill}
          />
        </li>
        <li
          id="side-panel-container"
          className="w-full 2xl:px-24 py-8 2xl:w-1/3"
        >
          <SidePanel
            setWillSelectSkill={setWillSelectSkill}
            setSelectedSkill={setSelectedSkill}
            clickedSkill={clickedSkill}
          />
        </li>
      </ul>
    </main>
  );
}
