export const initialMessage = {
  type: "npc",
  name: "Distant Echo",
  text: "There’s something in the air, isn’t there? A tension, like the fog over Martinaise, obscuring what’s real. Describe what lies before you, and we’ll shape it into something strange, something wondrous. This isn’t just a conversation; it’s a journey into the depths of your own mind.",
} as const;

export const systemMessage = {
  type: "system",
  text: "Describe a scene or thought, and choose a skill if desired—the AI will generate a dialogue based on your input.",
} as const;

export const helpMessage: NpcMessage = {
  type: "npc",
  name: "Friendly Guide",
  text: "This app allows you to describe a scene or thought, and then uses various skills to generate a unique dialogue based on your input. You can choose a specific skill to guide how the dialogue is crafted.",
};

export const skillAttributes = {
  logic: "intellect",
  encyclopedia: "intellect",
  rhetoric: "intellect",
  drama: "intellect",
  conceptualization: "intellect",
  "visual calculus": "intellect",
  volition: "psyche",
  "inland empire": "psyche",
  empathy: "psyche",
  authority: "psyche",
  "esprit de corps": "psyche",
  suggestion: "psyche",
  endurance: "physique",
  "pain threshold": "physique",
  "physical instrument": "physique",
  electrochemistry: "physique",
  shivers: "physique",
  "half light": "physique",
  "hand/eye coordination": "motorics",
  perception: "motorics",
  "reaction speed": "motorics",
  "savoir faire": "motorics",
  interfacing: "motorics",
  composure: "motorics",
};
