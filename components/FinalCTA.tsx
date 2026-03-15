export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#F5F5F3] dot-pattern relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-12 left-[6%] w-24 h-24 border border-[#E5E5E5] rounded-sm rotate-12 opacity-60" />
        <div className="absolute bottom-16 right-[8%] w-16 h-16 border border-[#E5E5E5] rounded-sm -rotate-6 opacity-40" />
        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-8 h-8 bg-[#D34D2A]/8 rounded-sm rotate-45" />
        <div className="absolute top-1/3 left-[3%] w-5 h-5 bg-[#121212]/6 rounded-sm -rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <div className="reveal mb-4">
          <span className="label-mono">// últimas palabras</span>
        </div>

        <h2 className="reveal reveal-delay-1 heading-impact text-6xl md:text-8xl lg:text-9xl text-[#121212] mb-6">
          Comparte<br />
          <span className="text-[#D34D2A]">tu peor</span><br />
          bug.
        </h2>

        <p className="reveal reveal-delay-2 font-body font-light text-[#666666] text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Cada error que documentas es un error que otro desarrollador no tendrá que cometer.
          Ese es el poder del conocimiento colectivo.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="btn-cta px-10 py-4 text-base">
            Enviar un Glitch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-outline px-10 py-4 text-base">
            Explorar el Archivo
          </button>
        </div>

        {/* Trust signal */}
        <div className="reveal reveal-delay-4 inline-flex items-center gap-3 bg-white border border-[#E5E5E5] rounded-full px-5 py-2.5">
          <div className="flex -space-x-2">
            {['C', 'A', 'M', 'E'].map((initial, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center font-mono font-bold text-white text-[0.5rem]"
                style={{ background: ['#D34D2A', '#6366F1', '#10B981', '#F59E0B'][i] }}
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#666666]">
            <span className="font-semibold text-[#121212]">8.200+</span> desarrolladores ya comparten sus bugs
          </p>
        </div>

      </div>
    </section>
  );
}
