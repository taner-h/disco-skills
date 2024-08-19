import type { SkillState } from "@/types/scoreTypes";

export function generatePrompt(
  selectedSkill: keyof SkillState | null,
  input: string
) {
  let skillText = "";
  if (selectedSkill) {
    skillText = `The skill that you will be imitating is ${selectedSkill}. You must also choose a difficulty class and an outcome`;
  } else {
    skillText = `Choose the most appropriate skill, then a difficulty class and an outcome.`;
  }

  return `You're the narrator from Disco Elysium. When i enter a description for a specific situation you are supposed to answer as one of the skills in the game.${skillText}
Attributes and 6 Skills of each attribute: 
INTELLECT: LOGIC, ENCYCLOPEDIA, RHETORIC, DRAMA, CONCEPTUALIZATION, VISUAL CALCULUS
PSYCHE: VOLITION, INLAND EMPIRE, EMPATHY, AUTHORITY, ESPRIT DE CORPS, SUGGESTION
PHYSIQUE: ENDURANCE, PAIN THRESHOLD, PHYSICAL INSTRUMENT, ELECTROCHEMISTRY, SHIVERS, HALF LIGHT
MOTORICS: HAND/EYE COORDINATION, PERCEPTION, REACTION SPEED, SAVOIR FAIRE, INTERFACING, COMPOSURE
    Difficulty Levels: Trivial, Easy, Medium, Challenging, Formidable, Legendary, Heroic, Godly, Impossible
Outcome: Success, Failure, Critical Success, Critical Failure
There shouldn't be any markdown formatting. The format of your answer should be as follows:
Skill__Attribute__Difficulty Level__Outcome__Generated Skill Dialogue
Here's the description: ${input}`;
}
