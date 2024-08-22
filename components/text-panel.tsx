import { Libre_Baskerville } from "next/font/google";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { Message, type MessageType } from "./message";
import { UserChoice } from "./user-choice";
import { Portrait } from "./portrait";
import { Notification } from "./notification";

const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export type Option = {
  text: string;
  callback: () => void;
  isClicked: boolean;
};

export function TextPanel({
  inputEnabled,
  messages,
  options,
  input,
  setInput,
  handleSubmit,
  loading,
}: {
  inputEnabled: boolean;
  messages: MessageType[];
  options: Option[] | null;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
  loading: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const lastMessage = messages[messages.length - 1];

  const isSuccess =
    lastMessage.type === "skill" && lastMessage.outcome === "Success";
  const isFail =
    lastMessage.type === "skill" && lastMessage.outcome === "Failure";

  const checkBackground = isSuccess ? "success-bg" : isFail ? "fail-bg" : "";

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, options]);

  return (
    <div className={baskerville.className}>
      <main
        className={`min-h-screen relative text-lg leading-relaxed font-medium ${checkBackground}`}
      >
        <section className="absolute h-screen w-[576px] bottom-0 right-[5%] py-[64px] pl-[72px] pr-[54px] dialogue-panel">
          {lastMessage.type === "skill" && (
            <Portrait skill={lastMessage.skill} />
          )}
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
            {inputEnabled && (
              <div>
                <textarea
                  id="prompt"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={3}
                  className="bg-transparent border-none text-[#929ea6] focus:outline-none resize-none w-full"
                  placeholder="Enter your text..."
                />
                {!loading && (
                  <button
                    onClick={() => handleSubmit()}
                    className="w-full h-[42px] continue-btn"
                  ></button>
                )}
              </div>
            )}
            <div ref={bottomRef} className="h-[192px]"></div>
            {lastMessage.type === "skill" && (
              <Notification
                state={lastMessage.outcome as "Success" | "Failure"}
              />
            )}
          </article>
        </section>
      </main>
    </div>
  );
}
