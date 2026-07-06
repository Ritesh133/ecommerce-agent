import { askGemini } from "@/lib/gemini";
import { ShoppingRequest, ShoppingResponse } from "@/types/models";

export async function getShoppingAdvice(
  request: ShoppingRequest
): Promise<ShoppingResponse> {
  const { product, budget, query } = request;

  // Build the prompt based on whether this is
  // the initial request or a follow-up question.
  const prompt = query
    ? `
You are an expert AI shopping assistant.

The user wants to buy a ${product} under ₹${budget}.

The user asked:
"${query}"

Answer clearly, briefly, and helpfully.
`
    : `
You are an expert AI shopping assistant.

The user wants to buy a ${product} under ₹${budget}.

Explain:
1. What specifications they should look for.
2. Which brands are good.
3. Common mistakes to avoid.
4. Give buying advice.

Keep the answer well structured.
`;

  const reply = await askGemini(prompt);

  return {
    summary: reply,

    recommendation: "",

    products: [],

    reasoning:
      "This recommendation is generated using Gemini. Real product comparison will be added after integrating Playwright.",

    followUpQuestion:
      "Would you like me to compare products from Amazon and Flipkart?"
  };
}