"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function sendPrompt(prompt: string) {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) return;

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}
