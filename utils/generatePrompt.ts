export function generatePrompt(
  selectedSkill: string | null,
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
Intellect: Logic, Encyclopedia, Rhetoric, Drama, Conceptualization, Visual Calculus
Psyche: Volition, Inland Empire, Empathy, Authority, Esprit De Corps, Suggestion
Physique: Endurance, Pain Threshold, Physical Instrument, Electrochemistry, Shivers, Half Light
Motorics: Hand/Eye Coordination, Perception, Reaction Speed, Savoir Faire, Interfacing, Composure
Difficulty Levels: Trivial, Easy, Medium, Challenging, Formidable, Legendary, Heroic, Godly, Impossible
Outcome: Success, Failure, Critical Success, Critical Failure

Here's the description: ${input}`;
}
