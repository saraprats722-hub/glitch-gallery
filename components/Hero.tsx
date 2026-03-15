import React from 'react';

const langCards = [
  { lang: 'JavaScript', icon: 'JS', bugs: '12.4k bugs', color: '#F7DF1E', text: '#121212' },
  { lang: 'Python',     icon: 'PY', bugs: '9.8k bugs',  color: '#3572A5', text: '#ffffff' },
  { lang: 'CSS',        icon: 'CS', bugs: '7.1k bugs',  color: '#563D7C', text: '#ffffff' },
  { lang: 'Go',         icon: 'GO', bugs: '4.3k bugs',  color: '#00ACD7', text: '#ffffff' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5F5F3] dot-pattern overflow-hidden pt-24">

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-24 left-[8%] w-20 h-20 border border-[#E5E5E5] rounded-sm rotate-12 animate-float-slow opacity-60" />
        <div className="absolute top-40 right-[10%] w-12 h-12 bg-[#D34D2A]/8 rounded-sm -rotate-6 animate-float-mid" />
        <div className="absolute bottom-32 left-[15%] w-8 h-8 bg-[#121212]/5 rounded-sm rotate-45 animate-float-mid" />
        <div className="absolute bottom-48 right-[20%] w-16 h-16 border border-[#E5E5E5] rounded-sm rotate-3 animate-float-slow opacity-50" />
        <div className="absolute top-1/2 left-[4%] w-5 h-5 bg-[#D34D2A]/15 rounded-sm rotate-12 animate-float-slow" />
        <div className="absolute top-36 left-1/2 w-3 h-3 bg-[#121212]/10 rounded-sm -rotate-12 animate-float-mid" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="reveal mb-5">
              <span className="label-mono">// plataforma comunitaria</span>
            </div>

            <h1 className="reveal reveal-delay-1 heading-impact text-6xl md:text-7xl lg:text-8xl text-[#121212] mb-6">
              Galería<br />
              <span className="text-[#D34D2A]">de</span><br />
              Glitches
            </h1>

            <p className="reveal reveal-delay-2 font-body font-light text-[#666666] text-lg md:text-xl leading-relaxed mb-8 max-w-md">
              Donde el código roto se convierte en sabiduría colectiva.
              Comparte tus bugs, aprende de los errores de otros y construye
              conocimiento en comunidad.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-10">
              <button className="btn-cta">
                Explorar Bugs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-outline">
                Enviar un Bug
              </button>
            </div>

            {/* Stats row */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-6 pt-6 border-t border-[#E5E5E5]">
              {[
                { value: '34k+',  label: 'bugs documentados' },
                { value: '8.2k',  label: 'desarrolladores' },
                { value: '94%',   label: 'resueltos' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-mono font-bold text-2xl text-[#121212]">{s.value}</p>
                  <p className="font-body text-xs text-[#999999] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — language grid */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-3 lg:gap-4">
            {langCards.map((card, i) => (
              <div
                key={card.lang}
                className={`card-bento p-5 ${i === 0 ? 'col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
                    style={{ background: card.color, color: card.text }}
                  >
                    {card.icon}
                  </div>
                  <span className="badge-lang">{card.bugs}</span>
                </div>
                <p className="font-mono font-bold text-[#121212] text-base">{card.lang}</p>
                <p className="font-body text-xs text-[#999999] mt-1">
                  {i === 0
                    ? 'La fuente más común de bugs inesperados.'
                    : i === 1
                    ? 'Indentaciones y tipos silenciosos.'
                    : i === 2
                    ? 'Especificidad y cascada.'
                    : 'Punteros y goroutines.'}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
