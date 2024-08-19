export type MessageType = UserMessage | AiMessage;

type UserMessage = {
  from: "user";
  text: string;
};

type AiMessage = {
  from: "ai";
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

  if (message.from === "user") {
    return (
      <p className="text-[#747c85]">
        <span className="font-semibold">YOU</span>
        <span>{" – " + message.text}</span>
      </p>
    );
  } else {
    const skillColor = attributeColors[message.attribute];

    console.log(skillColor);

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
  }
}
