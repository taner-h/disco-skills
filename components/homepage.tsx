import { Libre_Baskerville } from "next/font/google";
import { Message, type MessageType } from "./message";
import { useState } from "react";
import { UserChoice } from "./user-choice";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const initialMessage = {
  type: "npc",
  name: "Distant Echo",
  text: "There’s something in the air, isn’t there? A tension, like the fog over Martinaise, obscuring what’s real. Describe what lies before you, and we’ll shape it into something strange, something wondrous. This isn’t just a conversation; it’s a journey into the depths of your own mind.",
} as const;

const initialOptions = [
  "OK, but aren't you the intelligent one? Just find the appropriate skill.",
  "Yeah, I don't trust you. Let me pick the skill.",
  "Wait, what does this do again?",
];

const skillMessages: MessageType[] = [
  {
    type: "skill",
    skill: "Shivers",
    attribute: "physique",
    difficulty: "Medium",
    outcome: "Success",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quia maiores quisquam, ducimus illo! Illo, nesciunt.",
  },
  {
    type: "skill",
    skill: "Inland Empire",
    attribute: "psyche",
    difficulty: "Impossible",
    outcome: "Failure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quia maiores quisquam, ducimus illo! Illo, nesciunt.",
  },
  {
    type: "skill",
    skill: "Logic",
    attribute: "intellect",
    difficulty: "Medium",
    outcome: "Success",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quia maiores quisquam, ducimus illo! Illo, nesciunt.",
  },
  {
    type: "skill",
    skill: "Savoir Faire",
    attribute: "motorics",
    difficulty: "Impossible",
    outcome: "Success",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quia maiores quisquam, ducimus illo! Illo, nesciunt.",
  },
];

const systemMessage = {
  type: "system",
  text: "Describe a scene or thought, and choose a skill if desired—the AI will generate a dialogue based on your input.",
} as const;

export function Homepage() {
  const [messages, setMessages] = useState<MessageType[]>([
    initialMessage,
    systemMessage,
    // ...skillMessages,
  ]);
  const [options, setOptions] = useState<string[] | null>(initialOptions);

  return (
    <div className={baskerville.className}>
      <main className="min-h-screen relative text-lg leading-relaxed font-medium">
        <section className="absolute h-screen w-[30%] bottom-0 right-[5%] py-[64px] pl-[72px] pr-[54px] dialogue-panel ">
          <article className="h-[calc(100%-32px)] space-y-5 overflow-scroll">
            <div className="h-[192px]"></div>
            {messages.map((message: MessageType, index: number) => (
              <Message
                key={index}
                message={message}
                isLast={messages.length - 1 === index}
              />
            ))}
            {options && <UserChoice options={options} />}

            <div className="h-[192px]"></div>
          </article>
        </section>
      </main>
    </div>
  );
}
