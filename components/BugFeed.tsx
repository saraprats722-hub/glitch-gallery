const bugs = [
  {
    id: 'BUG-0042',
    lang: 'JavaScript',
    langColor: '#F7DF1E',
    langText: '#121212',
    title: 'Punto y coma implícito',
    snippet: `return\n{\n  name: "Alex"\n}`,
    result: '// Resultado: undefined',
    desc: 'El motor JS inserta un punto y coma automáticamente después del return, antes del objeto.',
    reactions: [{ emoji: '😱', count: 284 }, { emoji: '🤦', count: 197 }, { emoji: '💡', count: 143 }],
    solutions: 12,
    severity: 'MEDIA',
  },
  {
    id: 'BUG-0117',
    lang: 'Python',
    langColor: '#3572A5',
    langText: '#ffffff',
    title: 'Argumento mutable por defecto',
    snippet: `def add_item(item, lst=[]):\n    lst.append(item)\n    return lst`,
    result: '// add_item(1) → [1]\n// add_item(2) → [1, 2] ← ¿?',
    desc: 'Los argumentos con valor por defecto mutable se comparten entre todas las llamadas a la función.',
    reactions: [{ emoji: '🐛', count: 321 }, { emoji: '😤', count: 188 }, { emoji: '🧠', count: 256 }],
    solutions: 18,
    severity: 'ALTA',
  },
  {
    id: 'BUG-0203',
    lang: 'CSS',
    langColor: '#563D7C',
    langText: '#ffffff',
    title: 'z-index ignorado',
    snippet: `.modal {\n  z-index: 9999;\n  /* no funciona */\n}`,
    result: '// El modal queda detrás del navbar',
    desc: 'Sin position: relative/absolute/fixed el z-index no tiene efecto. Contexto de apilamiento.',
    reactions: [{ emoji: '🤯', count: 412 }, { emoji: '💀', count: 334 }, { emoji: '😅', count: 298 }],
    solutions: 9,
    severity: 'BAJA',
  },
  {
    id: 'BUG-0309',
    lang: 'TypeScript',
    langColor: '#3178C6',
    langText: '#ffffff',
    title: 'any silencioso en JSON.parse',
    snippet: `const data = JSON.parse(response);\ndata.user.name; // TypeScript feliz\n// Runtime: Cannot read property`,
    result: '// Error en producción, no en compilación',
    desc: 'JSON.parse devuelve any, desactivando todas las comprobaciones de tipos de TypeScript.',
    reactions: [{ emoji: '😶', count: 289 }, { emoji: '🔇', count: 201 }, { emoji: '⚠️', count: 178 }],
    solutions: 15,
    severity: 'ALTA',
  },
];

const severityColors: Record<string, string> = {
  BAJA: '#22c55e',
  MEDIA: '#f59e0b',
  ALTA: '#ef4444',
};

export default function BugFeed() {
  return (
    <section id="feed-bugs" className="py-24 bg-[#F5F5F3] dot-pattern">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="label-mono block mb-3">// feed en tiempo real</span>
            <h2 className="heading-impact text-5xl md:text-6xl text-[#121212]">
              Feed de Bugs
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-outline text-sm px-5 py-2.5">Ver todos</button>
            <button className="btn-cta text-sm px-5 py-2.5">Enviar bug</button>
          </div>
        </div>

        {/* Grid */}
        <div className="bento-grid">
          {bugs.map((bug, i) => (
            <div
              key={bug.id}
              className={`col-span-12 md:col-span-6 card-bento flex flex-col reveal reveal-delay-${(i % 4) + 1}`}
            >
              {/* Card header */}
              <div className="p-5 border-b border-[#E5E5E5] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-[0.6rem]"
                    style={{ background: bug.langColor, color: bug.langText }}
                  >
                    {bug.lang.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="badge-lang">{bug.lang}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono text-[0.6rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                    style={{ color: severityColors[bug.severity], background: `${severityColors[bug.severity]}15` }}
                  >
                    {bug.severity}
                  </span>
                  <span className="font-mono text-[0.65rem] text-[#999999]">{bug.id}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1">
                <h3 className="font-mono font-bold text-[#121212] text-base mb-3">{bug.title}</h3>

                {/* Code snippet */}
                <div className="code-block mb-3 text-xs">
                  {bug.snippet.split('\n').map((line, j) => (
                    <div key={j} className="flex gap-3">
                      <span className="text-[#999999] select-none w-4 text-right flex-shrink-0">{j + 1}</span>
                      <span className="text-[#121212]">{line || '\u00A0'}</span>
                    </div>
                  ))}
                  <div className="mt-2 pt-2 border-t border-[#E5E5E5] text-[#D34D2A]">
                    {bug.result.split('\n').map((line, j) => (
                      <div key={j}>{line}</div>
                    ))}
                  </div>
                </div>

                <p className="font-body text-xs text-[#666666] leading-relaxed">{bug.desc}</p>
              </div>

              {/* Card footer */}
              <div className="px-5 py-3.5 border-t border-[#E5E5E5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {bug.reactions.map((r) => (
                    <button
                      key={r.emoji}
                      className="flex items-center gap-1 font-mono text-xs text-[#666666] hover:text-[#121212] transition-colors"
                    >
                      <span>{r.emoji}</span>
                      <span>{r.count}</span>
                    </button>
                  ))}
                </div>
                <button className="font-mono text-xs text-[#D34D2A] hover:underline transition-colors flex items-center gap-1">
                  {bug.solutions} soluciones
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
