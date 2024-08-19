"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { Homepage } from "@/components/homepage";
import { SkillSelection } from "@/components/skill-selection";

export default function Home() {
  const [isSkillRandom, setIsSkillRandom] = useState(true);
  return (
    <Provider store={store}>
      <main className={isSkillRandom ? "bg-light" : "bg-dark"}>
        {isSkillRandom ? <Homepage /> : <SkillSelection />}
      </main>
    </Provider>
  );
}
