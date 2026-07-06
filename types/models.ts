export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface Product {
  id: string;
  name: string;

  price: number;
  currency: "INR" | "USD";

  source:
    | "Amazon"
    | "Flipkart"
    | "Myntra"
    | "Ajio"
    | "Croma"
    | "Reliance Digital";

  link: string;

  image?: string;
  rating?: number;
  reviews?: number;

  delivery?: string;
  availability?: string;

  confidenceScore?: number;
}

export interface ShoppingRequest {
  product: string;
  budget: number;
  query?: string;
}

export interface AgentRequest {
  response: ShoppingResponse;
  messages: ChatMessage[];
}

export interface ShoppingResponse {
  summary: string;
  recommendation: string;
  products: Product[];

  followUpQuestion?: string;
  reasoning?: string;
}