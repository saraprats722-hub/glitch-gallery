const bug = {
  id: 'BUG-0042',
  title: 'Punto y coma implícito en JavaScript',
  lang: 'JavaScript',
  snippet: `return\n{\n  name: "Alex"\n}\n// → undefined (esperado: objeto)`,
  author: 'devAlex',
  time: 'hace 2h',
};

const solutions = [
  {
    user: 'mariadev',
    initial: 'M',
    color: '#6366F1',
    votes: 47,
    text: 'El ASI (Automatic Semicolon Insertion) de JS inserta un ; después del return. Mueve la llave de apertura a la misma línea:',
    fix: 'return {\n  name: "Alex"\n}',
    accepted: true,
  },
  {
    user: 'carlos_ts',
    initial: 'C',
    color: '#10B981',
    votes: 23,
    text: 'Puedes activar la regla de ESLint "no-unexpected-multiline" para detectar esto automáticamente en tu editor antes de ejecutar.',
    fix: '// .eslintrc\n"no-unexpected-multiline": "error"',
    accepted: false,
  },
  {
    user: 'elena_v',
    initial: 'E',
    color: '#F59E0B',
    votes: 18,
    text: 'Usa Prettier con la opción de punto y coma obligatorio. Formateará tu código automáticamente y evitará este tipo de errores.',
    fix: '// prettier.config.js\n{ "semi": true }',
    accepted: false,
  },
];

export default function CommunityFixes() {
  return (
    <section id="comunidad" className="py-24 bg-[#F5F5F3] dot-pattern">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// soluciones colaborativas</span>
          <h2 className="heading-impact text-5xl md:text-6xl text-[#121212]">
            Soluciones<br />de la Comunidad
          </h2>
        </div>

        <div className="bento-grid items-start">

          {/* Left — Bug report */}
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="card-bento">
              <div className="p-5 border-b border-[#E5E5E5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="badge-coral">Bug Report</span>
                  <span className="font-mono text-xs text-[#999999]">{bug.id}</span>
                </div>
                <span className="badge-lang">{bug.lang}</span>
              </div>

              <div className="p-6">
                <h3 className="font-mono font-bold text-[#121212] text-lg uppercase tracking-tight mb-4">
                  {bug.title}
                </h3>

                <div className="code-block text-xs mb-4">
                  {bug.snippet.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('//') ? 'text-[#D34D2A] mt-1' : ''}>{line || '\u00A0'}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#121212] flex items-center justify-center font-mono text-white text-[0.6rem] font-bold">
                      A
                    </div>
                    <span className="font-mono text-xs text-[#666666]">@{bug.author}</span>
                  </div>
                  <span className="font-body text-xs text-[#999999]">{bug.time}</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 my-4 px-2">
              <div className="flex-1 h-px bg-[#E5E5E5]" />
              <span className="label-mono text-[#999999]">3 soluciones</span>
              <div className="flex-1 h-px bg-[#E5E5E5]" />
            </div>
          </div>

          {/* Right — Solutions */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-4 reveal reveal-delay-1">
            {solutions.map((sol, i) => (
              <div
                key={sol.user}
                className={`card-bento p-5 reveal reveal-delay-${i + 1} ${sol.accepted ? 'ring-1 ring-[#22c55e]/30' : ''}`}
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-white text-sm flex-shrink-0 mt-0.5"
                    style={{ background: sol.color }}
                  >
                    {sol.initial}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-[#121212]">@{sol.user}</span>
                      {sol.accepted && (
                        <span className="font-mono text-[0.6rem] font-bold uppercase tracking-wide text-[#22c55e] bg-[#22c55e]/10 px-2 py-0.5 rounded">
                          ✓ Aceptada
                        </span>
                      )}
                    </div>

                    <p className="font-body text-sm text-[#666666] leading-relaxed mb-3">
                      {sol.text}
                    </p>

                    <div className="code-block text-xs mb-3">
                      {sol.fix.split('\n').map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 font-mono text-xs text-[#666666] hover:text-[#D34D2A] transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                          <path d="M6 1l1.5 3h3.5l-2.8 2 1.1 3.5L6 7.5 2.7 9.5l1.1-3.5L1 4h3.5z"/>
                        </svg>
                        {sol.votes} votos
                      </button>
                      <button className="font-mono text-xs text-[#999999] hover:text-[#121212] transition-colors">
                        Responder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
