"use client";

import { useState } from "react";

import Background from "@/components/layout/Background";
import Hero from "@/components/layout/Hero";
import ChatInput from "@/components/chat/ChatInput";
import SuggestedPrompts from "@/components/chat/SuggestedPrompts";
import TrustedStores from "@/components/layout/TrustedStores";

export default function Home() {
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!message.trim()) return;

    console.log(message);

    // Chat UI will replace this later
  };

  return (
    <>
      <Background />

      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-5xl">

          <Hero />

          <div className="mt-14 flex w-full flex-col items-center">

            <ChatInput
              value={message}
              onChange={setMessage}
              onSubmit={submit}
            />

            <SuggestedPrompts
              onSelect={setMessage}
            />

            <TrustedStores />

          </div>

        </div>
      </main>
    </>
  );
}