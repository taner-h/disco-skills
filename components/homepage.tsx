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
  "Aren't you the intelligent one? Just find the appropriate skill.",
  "Yeah, I don't trust you. Let me pick the skill.",
  "Wait, what does this do again?",
];

export function Homepage() {
  const [messages, setMessages] = useState<MessageType[]>([initialMessage]);
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
