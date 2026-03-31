export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="reveal mb-5">
          <span className="label-mono">// últimas palabras</span>
        </div>

        <h2
          className="reveal reveal-delay-1 font-display font-bold text-[#111] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.05 }}
        >
          Comparte<br />
          <span className="text-[#6366F1]">tu peor bug.</span>
        </h2>

        <p className="reveal reveal-delay-2 font-body text-[#6B7280] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Cada error que documentas es un error que otro desarrollador no tendrá que cometer.
          Ese es el poder del conocimiento colectivo.
        </p>

        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="btn-cta px-10 py-4 text-base">
            Enviar un Glitch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="btn-outline px-10 py-4 text-base">
            Explorar el Archivo
          </button>
        </div>

        {/* Trust signal */}
        <div className="reveal reveal-delay-4 inline-flex items-center gap-3 bg-white border border-[#E4E4E7] rounded-full px-5 py-2.5">
          <div className="flex -space-x-2">
            {[
              { i: 'C', c: '#6366F1' },
              { i: 'A', c: '#8B5CF6' },
              { i: 'M', c: '#10B981' },
              { i: 'E', c: '#F59E0B' },
            ].map((a, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center font-mono font-bold text-white text-[0.5rem]"
                style={{ background: a.c }}
                aria-hidden="true"
              >
                {a.i}
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#6B7280]">
            <span className="font-semibold text-[#111]">8.200+</span> desarrolladores ya comparten sus bugs
          </p>
        </div>

      </div>
    </section>
  );
}
