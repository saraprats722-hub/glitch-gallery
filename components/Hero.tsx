const langCards = [
  { lang: 'JavaScript', abbr: 'JS', bugs: '12.4k', color: '#F7DF1E', text: '#111111', desc: 'La fuente más común de comportamiento inesperado.' },
  { lang: 'Python',     abbr: 'PY', bugs: '9.8k',  color: '#3572A5', text: '#ffffff', desc: 'Tipos y mutabilidad silenciosos.' },
  { lang: 'CSS',        abbr: 'CS', bugs: '7.1k',  color: '#563D7C', text: '#ffffff', desc: 'Especificidad, cascada y stacking.' },
  { lang: 'Go',         abbr: 'GO', bugs: '4.3k',  color: '#00ACD7', text: '#ffffff', desc: 'Punteros, goroutines y nil.' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start bg-[#FAFAF9] overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="reveal mb-5">
              <span className="label-mono">// plataforma comunitaria</span>
            </div>

            <h1
              className="reveal reveal-delay-1 font-display font-bold text-[#111] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3.2rem, 6vw, 5.5rem)', lineHeight: 1.05 }}
            >
              Galería<br />
              <span className="text-[#6366F1]">de</span><br />
              Glitches
            </h1>

            <p className="reveal reveal-delay-2 font-body text-[#6B7280] text-lg leading-relaxed mb-8 max-w-md">
              Donde el código roto se convierte en sabiduría colectiva.
              Comparte tus bugs, aprende de los errores de otros y construye
              conocimiento en comunidad.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-10">
              <button className="btn-cta">
                Explorar Bugs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-outline">Enviar un Bug</button>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-8 pt-6 border-t border-[#E4E4E7]">
              {[
                { value: '34k+', label: 'bugs documentados' },
                { value: '8.2k', label: 'desarrolladores' },
                { value: '94%',  label: 'resueltos' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl text-[#111]">{s.value}</p>
                  <p className="font-body text-xs text-[#9CA3AF] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — language grid */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-3">
            {langCards.map((card, i) => (
              <div
                key={card.lang}
                className={`card p-5 cursor-pointer ${i === 0 ? 'col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                    style={{ background: card.color, color: card.text }}
                    aria-hidden="true"
                  >
                    {card.abbr}
                  </div>
                  <span className="badge-lang">{card.bugs} bugs</span>
                </div>
                <p className="font-display font-semibold text-[#111] text-sm mb-1">{card.lang}</p>
                <p className="font-body text-xs text-[#9CA3AF] leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
