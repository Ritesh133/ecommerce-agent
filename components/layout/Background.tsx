export default function Background() {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">
        {/* Blue Glow */}
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[140px]" />
  
        {/* Purple Glow */}
        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[160px]" />
  
        {/* Cyan Glow */}
        <div className="absolute bottom-[-15%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>
    );
  }