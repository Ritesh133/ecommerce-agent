import { CheckCircle2 } from "lucide-react";

const stores = [
  "Amazon",
  "Flipkart",
  "Myntra",
  "Ajio",
  "Croma",
  "Reliance",
];

export default function ConnectedStores() {
  return (
    <div className="mt-10 flex flex-col items-center gap-5">

      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
        Connected Stores
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {stores.map((store) => (
          <div
            key={store}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:bg-blue-500/10
            "
          >
            <CheckCircle2
              size={16}
              className="text-green-400"
            />

            <span className="text-sm text-zinc-300">
              {store}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}