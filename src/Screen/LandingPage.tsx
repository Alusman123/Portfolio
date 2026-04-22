
export function Landing(){
  return(
    
  <div className="relative z-10 flex flex-row">
  <div className="h-[600px] w-[750px] rounded-[20px] px-10 py-10 flex flex-col">
    <div className='bg-black text-white border-2 border-white rounded-[20px] px-10 py-8 flex flex-col gap-4'>
      
      {/* Name */}
      <div className="flex flex-col">
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">AL</span>
        <span className="text-[48px] font-bold tracking-widest uppercase leading-tight">Usman</span>
      </div>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-white" />

      {/* Title */}
      <div className="text-[13px] font-semibold tracking-[0.3em] uppercase text-gray-400">
        Full Stack Developer
      </div>

      {/* Tagline */}
      <div className="text-[22px] font-light italic text-white">
        "Code. Play. Create."
      </div>

      {/* Bio */}
      <div className="text-[14px] text-gray-300 leading-relaxed">
       I design and develop modern mobile applications and websites with a gamer’s mindset, combining strategy, precision, and creativity to build high-performance, immersive experiences that are intuitive, engaging, and crafted to keep users coming back.</div>

    </div>
  </div>
</div>
   
  );
}