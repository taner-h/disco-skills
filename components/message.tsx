export type MessageType = NpcMessage | SystemMessage | SkillMessage;

type NpcMessage = {
  type: "npc";
  name?: string;
  text: string;
};

type SystemMessage = {
  type: "system";
  text: string;
};

type SkillMessage = {
  type: "skill";
  skill: string;
  attribute: "intellect" | "psyche" | "physique" | "motorics";
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
    intellect: "text-[#57c8d8]",
    psyche: "text-[#7254cf]",
    physique: "text-[#bd456c]",
    motorics: "text-[#e0b633]",
  };

  if (message.type === "npc") {
    return (
      <p className="text-[#747c85]">
        <span className="font-semibold">
          {message.name?.toUpperCase() ?? "YOU"}
        </span>
        <span>{" – " + message.text}</span>
      </p>
    );
  } else if (message.type === "skill") {
    const skillColor = attributeColors[message.attribute];

    return (
      <p>
        <span className={`${skillColor} font-semibold`}>
          {message.skill.toUpperCase()}
        </span>
        <span className="text-[#747c85]">
          {` [${message.difficulty}: ${message.outcome}] – `}
        </span>
        <span className="text-[#d1d6c3]">{message.text}</span>
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
