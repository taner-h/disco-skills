import Image, { type StaticImageData } from "next/image";
import { skillImages } from "@/utils/skillImages";

const images: Record<string, StaticImageData> = {
  Authority: skillImages.authority,
  Composure: skillImages.composure,
  Conceptualization: skillImages.conceptualization,
  Drama: skillImages.drama,
  Electrochemistry: skillImages.electrochemistry,
  Empathy: skillImages.empathy,
  Encyclopedia: skillImages.encyclopedia,
  Endurance: skillImages.endurance,
  "Esprit De Corps": skillImages.espritDeCorps,
  "Esprit de Corps": skillImages.espritDeCorps,
  "Half Light": skillImages.halfLight,
  "Hand Eye Coordination": skillImages.handEyeCoordination,
  "Hand/Eye Coordination": skillImages.handEyeCoordination,
  "Inland Empire": skillImages.inlandEmpire,
  Interfacing: skillImages.interfacing,
  Logic: skillImages.logic,
  "Pain Threshold": skillImages.painThreshold,
  Perception: skillImages.perception,
  "Physical Instrument": skillImages.physicalInstrument,
  "Reaction Speed": skillImages.reactionSpeed,
  Rhetoric: skillImages.rhetoric,
  "Savoir Faire": skillImages.savoirFaire,
  Shivers: skillImages.shivers,
  Suggestion: skillImages.suggestion,
  "Visual Calculus": skillImages.visualCalculus,
  Volition: skillImages.volition,
};

export function Portrait({ skill }: { skill: string }) {
  const skillImage = images[skill];
  if (!skillImage) return null;

  return (
    <div className="absolute skill-portrait left-[-150px] top-[25%] h-[272px] w-[204px] p-[12px]">
      <Image src={skillImage} alt={`${skill}-portrait`} />
    </div>
  );
}
