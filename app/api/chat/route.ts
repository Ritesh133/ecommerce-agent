import { NextResponse } from "next/server";

import { getShoppingAdvice } from "@/services/shoppingAgent";
import { ShoppingRequest } from "@/types/models";

export async function POST(req: Request) {
  try {
    // Read the request body
    const request: ShoppingRequest = await req.json();

    // Ask the shopping agent
    const response = await getShoppingAdvice(request);

    // Send response back to frontend
    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while processing your request.",
      },
      {
        status: 500,
      }
    );
  }
}