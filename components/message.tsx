export type MessageType =
  | NpcMessage
  | SystemMessage
  | SkillMessage
  | UserMessage;

export type NpcMessage = {
  type: "npc";
  name?: string;
  text: string;
};

export type UserMessage = {
  type: "user";
  text: string;
};

export type SystemMessage = {
  type: "system";
  text: string;
};

export type SkillMessage = {
  type: "skill";
  skill: string;
  attribute: string;
  difficulty: string;
  outcome: string;
  text: string;
};

export function Message({
  message,
  isLast,
}: {
  message: MessageType;
  isLast: boolean;
}) {
  const attributeColors = {
    intellect: ["text-[#57c8d8]", "text-[#57c8d8]/50"],
    psyche: ["text-[#7254cf]", "text-[#7254cf]/50"],
    physique: ["text-[#bd456c]", "text-[#bd456c]/50"],
    motorics: ["text-[#e0b633]", "text-[#e0b633]/50"],
  };

  if (message.type === "npc") {
    return (
      <p className={isLast ? "text-white" : "text-white/50"}>
        <span className="font-semibold">
          {message.name?.toUpperCase() ?? "YOU"}
        </span>
        <span>{" – " + message.text}</span>
      </p>
    );
  } else if (message.type === "skill") {
    const skillColor =
      attributeColors[
        message.attribute.toLowerCase() as keyof typeof attributeColors
      ];

    return (
      <p>
        <span
          className={`${isLast ? skillColor[0] : skillColor[1]} font-semibold`}
        >
          {message.skill.toUpperCase()}
        </span>
        <span className={isLast ? "text-[#747c85]" : "text-[#747c85]/50"}>
          {` [${message.difficulty}: ${message.outcome}] – `}
        </span>
        <span className={isLast ? "text-white" : "text-white/50"}>
          {message.text}
        </span>
      </p>
    );
  } else if (message.type === "user") {
    return (
      <p className={isLast ? "text-[#929ea6]" : "text-[#929ea6]/75"}>
        <span className="font-semibold">{"YOU"}</span>
        <span>{" – " + message.text}</span>
      </p>
    );
  } else {
    return (
      <p className="text-[#8bb37a]">
        <span>{message.text}</span>
      </p>
    );
  }
}
