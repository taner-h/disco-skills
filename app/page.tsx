"use client";

import { useState } from "react";
import { Provider, useSelector } from "react-redux";

import { TextPanel, type Option } from "@/components/text-panel";
import { SkillSelection } from "@/components/skill-selection";
import type { MessageType } from "@/components/message";
import { helpMessage, initialMessage, systemMessage } from "@/data/data";
import { generatePrompt } from "@/utils/generatePrompt";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { parseMessage } from "@/utils/parseMessage";

export default function Home() {
  const [willSelectSkill, setWillSelectSkill] = useState(false);
  const [inputEnabled, setInputEnabled] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([
    initialMessage,
    systemMessage,
  ]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  async function handleSubmit(behaviour = "default", exampleInput = "") {
    const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!API_KEY) return;

    if (behaviour === "default") addMessage({ type: "user", text: input });
    setInputEnabled(false);

    const inputText = behaviour === "example" ? exampleInput : input;

    if (!inputText) {
      setInputEnabled(true);
      return;
    }

    const prompt = generatePrompt(selectedSkill, inputText, behaviour);

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
      addMessage({
        type: "error",
        text: "An error has occured.",
      });
      setOptions(initialOptions);

      console.log(error);
    }
  }

  // #region Options

  const initialOptions = [
    {
      text: "I'll describe the situation, but just find the appropriate skill.",
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
    {
      text: "Give me some examples.",
      callback: function () {
        setOptions(exampleOptions);
        this.isClicked = true;
      },
      isClicked: false,
    },
  ];

  const exampleOptions = [
    {
      text: "I was walking on the street when I stepped on a banana peel and fell. No one saw... I think.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        setInput(this.text);
        handleSubmit("example", this.text);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "I forgot my umbrella, and of course, it started pouring as soon as I left the house.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        setInput(this.text);
        handleSubmit("example", this.text);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "My neighbor’s dog won’t stop barking, and it’s driving me crazy.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        setInput(this.text);
        handleSubmit("example", this.text);
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "I was practicing yoga for relaxation, and pulled a muscle in the process.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        setInput(this.text);
        handleSubmit("example", this.text);
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
        setInput("");
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
    {
      text: "I want to alter the behaviour of the response.",
      callback: function () {
        setOptions(behaviourOptions);
        this.isClicked = true;
      },
      isClicked: false,
    },
  ];

  const behaviourOptions = [
    {
      text: "Shroud it in mystery. Let the unknown linger longer.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("mysterious");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Take me somewhere darker, where the words weigh heavy.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("dark");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Wit, please. Make it sharp and playful.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("witty");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Pour on the melancholy, like a distant memory slipping away.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("melancholic");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Verbose, yes. Give me more—expand, explain, elaborate.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("verbose");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "What’s the meaning of all this? Let’s get philosophical.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("philosophical");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Turn up the heat. I want the dialogue to cut like a knife.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("aggressive");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Let chaos reign. I want it wild, unpredictable, and unruly.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("chaotic");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Break the boundaries—make it abstract, untethered from reality.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("abstract");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Make it surreal. Twist the ordinary into something strange.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("surreal");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "I want to feel it all. Let the words brim with emotion.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("emotional");
        this.isClicked = true;
      },
      isClicked: false,
    },
    {
      text: "Keep it brief. Let’s get to the point.",
      callback: function () {
        addMessage({ type: "user", text: this.text });
        setOptions(null);
        handleSubmit("concise");
        this.isClicked = true;
      },
      isClicked: false,
    },
  ];

  // #endregion

  const [options, setOptions] = useState<Option[] | null>(initialOptions);

  function addMessage(message: MessageType) {
    setMessages((messages) => [...messages, message]);
  }

  return (
    <main className={willSelectSkill ? "bg-dark" : "bg-light"}>
      {willSelectSkill ? (
        <SkillSelection
          setWillSelectSkill={setWillSelectSkill}
          setSelectedSkill={setSelectedSkill}
          selectedSkill={selectedSkill}
        />
      ) : (
        <TextPanel
          inputEnabled={inputEnabled}
          messages={messages}
          options={options}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </main>
  );
}
