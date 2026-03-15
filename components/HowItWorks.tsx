const steps = [
  {
    num: '01',
    title: 'Rompe algo',
    desc: 'Escribe código. Comete errores. Eso es exactamente lo que buscamos. Cada bug es una historia que merece ser contada.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Comparte el bug',
    desc: 'Documenta qué pasó, qué esperabas y qué obteniste. Añade el snippet de código. Elige el lenguaje y la severidad.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Arréglalo juntos',
    desc: 'La comunidad analiza, propone soluciones y vota las mejores. El conocimiento colectivo supera siempre al individual.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// proceso</span>
          <h2 className="heading-impact text-5xl md:text-6xl text-[#121212]">
            Cómo Funciona
          </h2>
        </div>

        {/* Bento grid — 3 equal columns */}
        <div className="bento-grid">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`col-span-12 md:col-span-4 card-bento p-8 reveal reveal-delay-${i + 1}`}
            >
              {/* Step number */}
              <p className="font-mono font-bold text-5xl text-[#D34D2A] mb-6 leading-none">
                {step.num}
              </p>

              {/* Icon */}
              <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#666666] mb-5">
                {step.icon}
              </div>

              <h3 className="font-mono font-bold text-xl text-[#121212] uppercase tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="font-body font-light text-[#666666] text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          {/* Wide bottom cell — CTA */}
          <div className="col-span-12 card-bento p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 reveal">
            <div>
              <p className="font-mono font-bold text-[#121212] text-lg uppercase tracking-tight mb-1">
                ¿Listo para empezar?
              </p>
              <p className="font-body text-sm text-[#666666]">
                Únete a más de 8.000 desarrolladores que ya comparten sus fallos.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button className="btn-cta">Enviar mi primer bug</button>
              <button className="btn-outline">Ver ejemplos</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
