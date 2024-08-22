import type { ErrorMessage, SkillMessage } from "@/components/message";

export function parseMessage(text: string) {
  const parts = text.split("\n");

  if (parts.length < 5)
    return {
      type: "error",
      text: "An error occurred while generating the response. Please try again.",
    } as ErrorMessage;

  return {
    type: "skill",
    skill: parts[0],
    attribute: parts[1],
    difficulty: parts[2],
    outcome: parts[3],
    text: parts[4],
  } as SkillMessage;
}
