import type { SkillState } from "@/types/scoreTypes";

export function generatePrompt(
  selectedSkill: keyof SkillState | null,
  input: string,
  behaviour: string
) {
  let skillText = "";
  if (selectedSkill) {
    skillText = `The skill that you will be imitating is ${selectedSkill}. You must also choose a difficulty class and an outcome.`;
  } else {
    skillText = `Choose the most appropriate skill, then a difficulty class and an outcome.`;
  }

  let behaviourText = "";
  if (behaviour !== "default" && behaviour !== "example") {
    behaviourText = `The tone of your response should be particularly ${behaviour}.`;
  }

  return `You're one of the skills from Disco Elysium. When a description is given for a specific situation you are supposed to answer as one of the skills in the game. ${skillText} ${behaviourText}
There shouldn't be any markdown formatting. The response should be exactly 5 lines. The format of your answer should be as follows: Skill\nAttribute\nDifficulty\nOutcome\nGenerated Skill Text

Attributes and 6 Skills of each attributes are: 
INTELLECT: LOGIC, ENCYCLOPEDIA, RHETORIC, DRAMA, CONCEPTUALIZATION, VISUAL CALCULUS
PSYCHE: VOLITION, INLAND EMPIRE, EMPATHY, AUTHORITY, ESPRIT DE CORPS, SUGGESTION
PHYSIQUE: ENDURANCE, PAIN THRESHOLD, PHYSICAL INSTRUMENT, ELECTROCHEMISTRY, SHIVERS, HALF LIGHT
MOTORICS: HAND/EYE COORDINATION, PERCEPTION, REACTION SPEED, SAVOIR FAIRE, INTERFACING, COMPOSURE
Difficulty Levels: Trivial, Easy, Medium, Challenging, Formidable, Legendary, Heroic, Godly, Impossible
Outcome: Success, Failure, Critical Success, Critical Failure

Here's the description: ${input}`;
}
