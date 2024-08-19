import { Libre_Baskerville } from "next/font/google";
import { Message, type MessageType } from "./message";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export function Homepage() {
  const messages: MessageType[] = [
    { from: "user", text: "Never ever ever?" },
    {
      from: "ai",
      skill: "Shivers",
      attribute: "physique",
      difficulty: "Medium",
      outcome: "Success",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam natus quia maiores quisquam, ducimus illo! Illo, nesciunt. Ratione facere blanditiis saepe numquam.",
    },
    {
      from: "ai",
      skill: "Inland Empire",
      attribute: "psyche",
      difficulty: "Impossible",
      outcome: "Success",
      text: "This is a fight we can win!",
    },
    { from: "user", text: "Never ever ever?" },
    {
      from: "ai",
      skill: "Logic",
      attribute: "intellect",
      difficulty: "Medium",
      outcome: "Success",
      text: "Never ever ever. Ever.",
    },
    {
      from: "ai",
      skill: "Inland Empire",
      attribute: "psyche",
      difficulty: "Impossible",
      outcome: "Success",
      text: "This is a fight we can win!",
    },
    { from: "user", text: "Never ever ever?" },
    {
      from: "ai",
      skill: "Shivers",
      attribute: "physique",
      difficulty: "Medium",
      outcome: "Success",
      text: "Never ever ever. Ever.",
    },
    {
      from: "ai",
      skill: "Savoir Faire",
      attribute: "motorics",
      difficulty: "Impossible",
      outcome: "Success",
      text: "This is a fight we can win! This is a fight we can win! This is a fight we can win! This is a fight we can win!",
    },
    {
      from: "ai",
      skill: "Inland Empire",
      attribute: "psyche",
      difficulty: "Impossible",
      outcome: "Success",
      text: "This is a fight we can win! This is a fight we can win! This is a fight we can win! This is a fight we can win!",
    },
    { from: "user", text: "Never ever ever?" },
    {
      from: "ai",
      skill: "Shivers",
      attribute: "physique",
      difficulty: "Medium",
      outcome: "Success",
      text: "Never ever ever. Ever.",
    },
    {
      from: "ai",
      skill: "Inland Empire",
      attribute: "psyche",
      difficulty: "Impossible",
      outcome: "Success",
      text: "This is a fight we can win!",
    },
  ];

  const options = [
    "Aren't you the intelligent one? Just find the appropriate skill.",
    "Yeah, I don't trust you. Let me pick the skill.",
    "Wait, what does this do again?",
  ];

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
            <div className="space-y-1">
              {options.map((option, index) => (
                <p>
                  {index + 1}. -{" "}
                  <span className="text-[#d94421] hover:text-white cursor-pointer">
                    {option}
                  </span>
                </p>
              ))}
            </div>
            <div className="h-[192px]"></div>
          </article>
        </section>
      </main>
    </div>
  );
}
