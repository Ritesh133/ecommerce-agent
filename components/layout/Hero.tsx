export default function Hero() {
    return (
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Badge */}
        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300 backdrop-blur-md">
            AI Powered Shopping
        </div>
  
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ShopPilot AI
          </span>
        </h1>
  
        {/* Subtitle */}
        <h2 className="max-w-3xl text-2xl font-semibold text-zinc-100">
          Your Personal AI Shopping Agent
        </h2>
  
        {/* Description */}
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl leading-8 text-zinc-400">
        Search multiple stores.

        Compare prices.

        Find the best deal instantly.
        </p>
      </div>
    );
  }