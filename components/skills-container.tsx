"use client";

import { skillImages } from "@/utils/skillImages";

import type { Dispatch, SetStateAction } from "react";
import Attribute from "./attribute";
import Skill from "./skill";

export default function SkillsContainer({
  setClickedSkill,
  clickedSkill,
  selectedSkill,
}: {
  setClickedSkill: Dispatch<SetStateAction<string>>;
  clickedSkill: string;
  selectedSkill: string | null;
}) {
  return (
    <ul className="flex flex-row md:flex-col gap-1 md:gap-1">
      <li className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/6">
          <Attribute attributeName="INTELLECT" />
        </div>
        <div className="md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2">
          <Skill
            handleClick={() => setClickedSkill("logic")}
            isSelected={selectedSkill === "logic"}
            isClicked={clickedSkill === "logic"}
            title="LOGIC"
            imageSource={skillImages.logic}
          />
          <Skill
            handleClick={() => setClickedSkill("encyclopedia")}
            isSelected={selectedSkill === "encyclopedia"}
            isClicked={clickedSkill === "encyclopedia"}
            title="ENCYCLOPEDIA"
            imageSource={skillImages.encyclopedia}
          />
          <Skill
            handleClick={() => setClickedSkill("rhetoric")}
            isSelected={selectedSkill === "rhetoric"}
            isClicked={clickedSkill === "rhetoric"}
            title="RHETORIC"
            imageSource={skillImages.rhetoric}
          />
          <Skill
            handleClick={() => setClickedSkill("drama")}
            isSelected={selectedSkill === "drama"}
            isClicked={clickedSkill === "drama"}
            title="DRAMA"
            imageSource={skillImages.drama}
          />
          <Skill
            handleClick={() => setClickedSkill("conceptualization")}
            isSelected={selectedSkill === "conceptualization"}
            isClicked={clickedSkill === "conceptualization"}
            title="CONCEPTUALIZATION"
            imageSource={skillImages.conceptualization}
          />
          <Skill
            handleClick={() => setClickedSkill("visualCalculus")}
            isSelected={selectedSkill === "visualCalculus"}
            isClicked={clickedSkill === "visualCalculus"}
            title="VISUAL CALCULUS"
            imageSource={skillImages.visualCalculus}
          />
        </div>
      </li>
      <li className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/6">
          <Attribute attributeName="PSYCHE" />
        </div>
        <div className="md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2">
          <Skill
            handleClick={() => setClickedSkill("volition")}
            isSelected={selectedSkill === "volition"}
            isClicked={clickedSkill === "volition"}
            title="VOLITION"
            imageSource={skillImages.volition}
          />
          <Skill
            handleClick={() => setClickedSkill("inlandEmpire")}
            isSelected={selectedSkill === "inlandEmpire"}
            isClicked={clickedSkill === "inlandEmpire"}
            title="INLAND EMPIRE"
            imageSource={skillImages.inlandEmpire}
          />
          <Skill
            handleClick={() => setClickedSkill("empathy")}
            isSelected={selectedSkill === "empathy"}
            isClicked={clickedSkill === "empathy"}
            title="EMPATHY"
            imageSource={skillImages.empathy}
          />
          <Skill
            handleClick={() => setClickedSkill("authority")}
            isSelected={selectedSkill === "authority"}
            isClicked={clickedSkill === "authority"}
            title="AUTHORITY"
            imageSource={skillImages.authority}
          />
          <Skill
            handleClick={() => setClickedSkill("espritDeCorps")}
            isSelected={selectedSkill === "espritDeCorps"}
            isClicked={clickedSkill === "espritDeCorps"}
            title="ESPRIT DE CORPS"
            imageSource={skillImages.espritDeCorps}
          />
          <Skill
            handleClick={() => setClickedSkill("suggestion")}
            isSelected={selectedSkill === "suggestion"}
            isClicked={clickedSkill === "suggestion"}
            title="SUGGESTION"
            imageSource={skillImages.suggestion}
          />
        </div>
      </li>
      <li className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/6">
          <Attribute attributeName="PHYSIQUE" />
        </div>
        <div className="md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2">
          <Skill
            handleClick={() => setClickedSkill("endurance")}
            isSelected={selectedSkill === "endurance"}
            isClicked={clickedSkill === "endurance"}
            title="ENDURANCE"
            imageSource={skillImages.endurance}
          />
          <Skill
            handleClick={() => setClickedSkill("painThreshold")}
            isSelected={selectedSkill === "painThreshold"}
            isClicked={clickedSkill === "painThreshold"}
            title="PAIN THRESHOLD"
            imageSource={skillImages.painThreshold}
          />
          <Skill
            handleClick={() => setClickedSkill("physicalInstrument")}
            isSelected={selectedSkill === "physicalInstrument"}
            isClicked={clickedSkill === "physicalInstrument"}
            title="PHYSICAL INSTRUMENT"
            imageSource={skillImages.physicalInstrument}
          />
          <Skill
            handleClick={() => setClickedSkill("electrochemistry")}
            isSelected={selectedSkill === "electrochemistry"}
            isClicked={clickedSkill === "electrochemistry"}
            title="ELECTROCHEMISTRY"
            imageSource={skillImages.electrochemistry}
          />
          <Skill
            handleClick={() => setClickedSkill("shivers")}
            isSelected={selectedSkill === "shivers"}
            isClicked={clickedSkill === "shivers"}
            title="SHIVERS"
            imageSource={skillImages.shivers}
          />
          <Skill
            handleClick={() => setClickedSkill("halfLight")}
            isSelected={selectedSkill === "halfLight"}
            isClicked={clickedSkill === "halfLight"}
            title="HALF LIGHT"
            imageSource={skillImages.halfLight}
          />
        </div>
      </li>
      <li className="flex flex-col md:flex-row gap-2">
        <div className="md:w-1/6">
          <Attribute attributeName="MOTORICS" />
        </div>
        <div className="md:w-5/6 flex flex-col md:flex-row gap-1 md:gap-2">
          <Skill
            handleClick={() => setClickedSkill("handEyeCoordination")}
            isSelected={selectedSkill === "handEyeCoordination"}
            isClicked={clickedSkill === "handEyeCoordination"}
            title="HAND / EYE COORDINATION"
            imageSource={skillImages.handEyeCoordination}
          />
          <Skill
            handleClick={() => setClickedSkill("perception")}
            isSelected={selectedSkill === "perception"}
            isClicked={clickedSkill === "perception"}
            title="PERCEPTION"
            imageSource={skillImages.perception}
          />
          <Skill
            handleClick={() => setClickedSkill("reactionSpeed")}
            isSelected={selectedSkill === "reactionSpeed"}
            isClicked={clickedSkill === "reactionSpeed"}
            title="REACTION SPEED"
            imageSource={skillImages.reactionSpeed}
          />
          <Skill
            handleClick={() => setClickedSkill("savoirFaire")}
            isSelected={selectedSkill === "savoirFaire"}
            isClicked={clickedSkill === "savoirFaire"}
            title="SAVOIR FAIRE"
            imageSource={skillImages.savoirFaire}
          />
          <Skill
            handleClick={() => setClickedSkill("interfacing")}
            isSelected={selectedSkill === "interfacing"}
            isClicked={clickedSkill === "interfacing"}
            title="INTERFACING"
            imageSource={skillImages.interfacing}
          />
          <Skill
            handleClick={() => setClickedSkill("composure")}
            isSelected={selectedSkill === "composure"}
            isClicked={clickedSkill === "composure"}
            title="COMPOSURE"
            imageSource={skillImages.composure}
          />
        </div>
      </li>
    </ul>
  );
}
