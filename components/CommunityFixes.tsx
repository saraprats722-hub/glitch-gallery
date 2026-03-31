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
    text: 'Usa Prettier con punto y coma obligatorio. Formateará tu código automáticamente y evitará este tipo de errores.',
    fix: '// prettier.config.js\n{ "semi": true }',
    accepted: false,
  },
];

export default function CommunityFixes() {
  return (
    <section id="comunidad" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// soluciones colaborativas</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Soluciones<br />de la Comunidad
          </h2>
        </div>

        <div className="bento-grid items-start">

          {/* Left — Bug report */}
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="card">
              <div className="px-5 py-4 border-b border-[#E4E4E7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="badge-indigo">Bug Report</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">{bug.id}</span>
                </div>
                <span className="badge-lang">{bug.lang}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-[#111] text-base tracking-tight mb-4">
                  {bug.title}
                </h3>

                <div className="code-block text-xs mb-4">
                  {bug.snippet.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('//') ? 'text-[#6366F1] mt-1' : ''}>{line || '\u00A0'}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E4E4E7]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center font-mono text-white text-[0.6rem] font-bold">
                      A
                    </div>
                    <span className="font-mono text-xs text-[#6B7280]">@{bug.author}</span>
                  </div>
                  <span className="font-body text-xs text-[#9CA3AF]">{bug.time}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-4 px-1">
              <div className="flex-1 h-px bg-[#E4E4E7]" />
              <span className="label-mono text-[#9CA3AF]">3 soluciones</span>
              <div className="flex-1 h-px bg-[#E4E4E7]" />
            </div>
          </div>

          {/* Right — Solutions */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-3 reveal reveal-delay-1">
            {solutions.map((sol, i) => (
              <div
                key={sol.user}
                className={`card p-5 reveal reveal-delay-${i + 1} ${sol.accepted ? 'ring-1 ring-[#10B981]/25' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-white text-sm flex-shrink-0 mt-0.5"
                    style={{ background: sol.color }}
                    aria-hidden="true"
                  >
                    {sol.initial}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="font-display font-semibold text-sm text-[#111]">@{sol.user}</span>
                      {sol.accepted && (
                        <span className="font-mono text-[0.58rem] font-bold uppercase tracking-wide text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-md">
                          Aceptada
                        </span>
                      )}
                    </div>

                    <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-3">
                      {sol.text}
                    </p>

                    <div className="code-block text-xs mb-3">
                      {sol.fix.split('\n').map((line, j) => (
                        <div key={j} className={line.startsWith('//') ? 'text-[#9CA3AF]' : ''}>{line}</div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 font-mono text-xs text-[#6B7280] hover:text-[#6366F1] transition-colors cursor-pointer">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M1 11V6.5L4 2.5h.5l.5 1.5-1.5 1.5H7c.6 0 1 .4 1 1V7L7 11H1z" strokeLinejoin="round"/>
                          <path d="M1 6.5V11" strokeLinecap="round"/>
                        </svg>
                        {sol.votes} votos
                      </button>
                      <button className="font-mono text-xs text-[#9CA3AF] hover:text-[#111] transition-colors cursor-pointer">
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
