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
  }

  if (message.type === "skill") {
    let skillColor =
      attributeColors[
        message.attribute.toLowerCase() as keyof typeof attributeColors
      ];

    if (!skillColor) {
      skillColor = ["text-white", "text-white/50"];
    }

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
  }

  if (message.type === "user") {
    return (
      <p className={isLast ? "text-[#929ea6]" : "text-[#929ea6]/75"}>
        <span className="font-semibold">{"YOU"}</span>
        <span>{" – " + message.text}</span>
      </p>
    );
  }

  if (message.type === "system") {
    return (
      <p className="text-[#8bb37a]">
        <span>{message.text}</span>
      </p>
    );
  }

  if (message.type === "error") {
    return (
      <p className={isLast ? "text-[#d94421]" : "text-[#d94421]/75"}>
        <span className="font-semibold">{"ERROR"}</span>
        <span>{" – " + message.text}</span>
      </p>
    );
  }
}
