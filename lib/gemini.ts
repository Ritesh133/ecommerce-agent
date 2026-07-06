import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
  });

const model = "gemini-2.5-flash";

export async function askGemini(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text ?? "";
}