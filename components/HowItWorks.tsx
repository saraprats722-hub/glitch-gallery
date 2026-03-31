const steps = [
  {
    num: '01',
    title: 'Rompe algo',
    desc: 'Escribe código. Comete errores. Cada bug es una historia que merece ser contada y documentada para la comunidad.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Comparte el bug',
    desc: 'Documenta qué pasó, qué esperabas y qué obtuviste. Añade el snippet de código, elige el lenguaje y la severidad.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Arréglalo juntos',
    desc: 'La comunidad analiza, propone soluciones y vota las mejores. El conocimiento colectivo supera siempre al individual.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 reveal">
          <span className="label-mono block mb-3">// proceso</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Cómo Funciona
          </h2>
        </div>

        {/* Steps */}
        <div className="bento-grid">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`col-span-12 md:col-span-4 card p-8 reveal reveal-delay-${i + 1}`}
            >
              <p className="font-display font-bold text-5xl text-[#6366F1] mb-6 leading-none">
                {step.num}
              </p>

              <div className="w-9 h-9 rounded-xl border border-[#E4E4E7] flex items-center justify-center text-[#6B7280] mb-5">
                {step.icon}
              </div>

              <h3 className="font-display font-semibold text-[#111] text-lg tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          {/* CTA strip */}
          <div className="col-span-12 card p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 reveal">
            <div>
              <p className="font-display font-semibold text-[#111] text-lg tracking-tight mb-1">
                ¿Listo para empezar?
              </p>
              <p className="font-body text-sm text-[#6B7280]">
                Únete a más de 8.000 desarrolladores que ya comparten sus fallos.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button className="btn-cta">Enviar mi primer bug</button>
              <a href="#feed-bugs" className="btn-outline">Ver ejemplos</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
