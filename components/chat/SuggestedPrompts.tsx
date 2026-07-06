"use client";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

const prompts = [
  "💻 Gaming Laptop under ₹70,000",
  "📱 Best Camera Phone under ₹40,000",
  "⌚ Smartwatch under ₹10,000",
  "🎧 ANC Headphones",
  "🖥 Coding Monitor",
  "📷 DSLR Camera under ₹80,000",
];

export default function SuggestedPrompts({
  onSelect,
}: SuggestedPromptsProps) {
  return (
    <div className="mt-8 mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-3
            text-sm
            text-zinc-300
            backdrop-blur-xl
            transition-all
            duration-300
            // hover:scale-105
            hover:-translate-y-1
            hover:border-blue-400/40
            hover:bg-blue-500/10
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}