export default function TrustedStores() {
    const stores = [
      "Amazon",
      "Flipkart",
      "Myntra",
      "Ajio",
      "Croma",
      "Reliance Digital",
    ];
  
    return (
      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Powered by India's Leading Stores
        </p>
  
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-400">
          {stores.map((store, index) => (
            <div key={store} className="flex items-center">
              <span className="transition-colors duration-300 hover:text-white">
                {store}
              </span>
  
              {index !== stores.length - 1 && (
                <span className="mx-3 text-zinc-700">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }