import type { SkillMessage } from "@/components/message";

export function parseMessage(text: string) {
  const parts = text.split("\n");

  const message: SkillMessage = {
    type: "skill",
    skill: parts[0],
    attribute: parts[1],
    difficulty: parts[2],
    outcome: parts[3],
    text: parts[4],
  };

  return message;
}
