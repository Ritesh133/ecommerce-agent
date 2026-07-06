"use client";
import { ArrowUp, Search } from "lucide-react";

interface ChatInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
}

const placeholders = [
  "Find me a gaming laptop under ₹70,000...",
  "Best camera phone under ₹40,000...",
  "Suggest a smartwatch under ₹10,000...",
  "Sony headphones for coding...",
  "MacBook alternative under ₹80,000...",
];

export default function ChatInput({
    value,
    onChange,
    onSubmit,
}: ChatInputProps) {

    const placeholder = placeholders[0];

    const submitMessage = () => {
        if (!value.trim()) return;
    
        onSubmit();
    };
    
  return (
    <div className="mx-auto w-full max-w-4xl">
        <div
            className="
            flex items-center
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            focus-within:border-blue-500/60
            focus-within:shadow-blue-500/20
            "
        >
        <div className="pl-5 text-zinc-500">
            <Search size={20} />
        </div>
        <input
            autoComplete="off"
            spellCheck={false}

            className="
            flex-1
            bg-transparent
            px-4
            py-5
            text-lg
            text-white
            placeholder:text-zinc-500
            focus:outline-none
            "
            placeholder={placeholder}
            value={value}

            onChange={(e) => onChange(e.target.value)}

            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    submitMessage();
                }
            }}
        />

        <button
            onClick={submitMessage}
            disabled={!value.trim()}

            aria-label="Send message"

            className={`
                mr-3
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                transition-all
                duration-300
                
                ${
                    value.trim()
                        ? "hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                        : "opacity-40 cursor-not-allowed"
                }
            `}
            >
            <ArrowUp size={20} />
        </button>
    </div>

    <p className="mt-3 text-center text-sm text-zinc-500">
        Press Enter or click the arrow to start your shopping mission
    </p>
    </div>
    );
}