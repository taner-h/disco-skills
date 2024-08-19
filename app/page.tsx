"use client";

import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { store, type RootState } from "../redux/store";

import { Homepage, type Choice } from "@/components/homepage";
import { SkillSelection } from "@/components/skill-selection";
import type { MessageType } from "@/components/message";
import { helpMessage, initialMessage, systemMessage } from "@/data/data";
import { generatePrompt } from "@/utils/generatePrompt";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { parseMessage } from "@/utils/parseMessage";

function Main() {
  const [willSelectSkill, setWillSelectSkill] = useState(false);
  const [inputEnabled, setInputEnabled] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    initialMessage,
    systemMessage,
  ]);

  const selectedSkill = useSelector(
    (state: RootState) => state.signature.skill
  );

  async function handleSubmit() {
    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!API_KEY) return;

    addMessage({ type: "user", text: input });
    setInputEnabled(false);

    const prompt = generatePrompt(selectedSkill, input);

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      setLoading(true);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setLoading(false);

      const message = parseMessage(text);

      addMessage(message);
      setOptions(postResponseOptions);
    } catch (error) {
      console.log(error);
    }
  }

  const initialChoice = [
    {
      text: "OK, but aren't you the intelligent one? Just find the appropriate skill.",
      callback: function () {
        setInputEnabled(true);
        setOptions(null);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Yeah, I don't trust you. Let me pick the skill.",
      callback: function () {
        setInputEnabled(true);
        setWillSelectSkill(true);
        setOptions(null);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Wait, what does this do again?",
      callback: function () {
        addMessage(helpMessage);
        this.isClicked = true;
      },
      isClicked: false,
    },
  ];

  const postResponseOptions = [
    {
      text: "Something's not right, try again.",
      callback: function () {
        handleSubmit();
        setOptions(null);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Never mind, let me rewrite the description.",
      callback: function () {
        setInputEnabled(true);
        setOptions(null);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "I think I should select a skill, I knew I shouldn't trust you.",
      callback: function () {
        setInputEnabled(true);
        setWillSelectSkill(true);
        setOptions(null);
        this.isClicked = true;
      },
      isClicked: false,
    },
  ];

  const [options, setOptions] = useState<Choice[] | null>(initialChoice);

  function addMessage(message: MessageType) {
    setMessages((messages) => [...messages, message]);
  }

  return (
    <main className={willSelectSkill ? "bg-dark" : "bg-light"}>
      {willSelectSkill ? (
        <SkillSelection setWillSelectSkill={setWillSelectSkill} />
      ) : (
        <Homepage
          setWillSelectSkill={setWillSelectSkill}
          inputEnabled={inputEnabled}
          setInputEnabled={setInputEnabled}
          messages={messages}
          addMessage={addMessage}
          options={options}
          setOptions={setOptions}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </main>
  );
}

export default function Home() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
