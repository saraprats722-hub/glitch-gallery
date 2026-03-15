const legends = [
  {
    id: 'delete-all',
    code: "DELETE FROM users;",
    label: 'Sin cláusula WHERE',
    category: 'SQL',
    year: '2013',
    impact: 'Base de datos de producción completamente vaciada.',
    consequence: '220.000 registros eliminados. 3 días de recuperación.',
    badge: 'LEGENDARIO',
  },
  {
    id: 'y2k',
    code: "year = parseInt(date.slice(-2))\nif year > 99: year = 2000",
    label: 'El Bug del Año 2000',
    category: 'Fechas',
    year: '1999',
    impact: 'Años almacenados con 2 dígitos causaron pánico global.',
    consequence: '300B$ en correcciones. Meses de crisis IT mundial.',
    badge: 'HISTÓRICO',
  },
  {
    id: 'heartbleed',
    code: "// Sin validar longitud del payload\nmemcpy(bp, p, payload);",
    label: 'Heartbleed',
    category: 'C / OpenSSL',
    year: '2014',
    impact: 'Buffer over-read en OpenSSL permitía leer memoria del servidor.',
    consequence: '500M servidores HTTPS vulnerables. CVE-2014-0160.',
    badge: 'CRÍTICO',
  },
];

const badgeColors: Record<string, { bg: string; text: string }> = {
  LEGENDARIO: { bg: '#D34D2A',   text: '#ffffff' },
  HISTÓRICO:  { bg: '#6366F1',   text: '#ffffff' },
  CRÍTICO:    { bg: '#EF4444',   text: '#ffffff' },
};

export default function HallOfFame() {
  return (
    <section id="salon-fama" className="py-24 bg-[#121212] dot-pattern-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono text-[#D34D2A] block mb-3">// errores que cambiaron la historia</span>
          <h2 className="heading-impact text-5xl md:text-6xl text-white">
            Salón de<br />la Fama
          </h2>
          <p className="font-body font-light text-[#666666] mt-4 max-w-xl text-base">
            Los bugs que se convirtieron en lecciones para toda la industria del software.
          </p>
        </div>

        {/* Cards */}
        <div className="bento-grid">
          {legends.map((bug, i) => {
            const badge = badgeColors[bug.badge];
            return (
              <div
                key={bug.id}
                className={`col-span-12 md:col-span-4 reveal reveal-delay-${i + 1} group cursor-pointer`}
              >
                <div className="h-full bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200">

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="badge-lang border-white/20 text-[#666666] bg-transparent">
                        {bug.category}
                      </span>
                      <span className="ml-2 font-mono text-xs text-[#666666]">{bug.year}</span>
                    </div>
                    <span
                      className="font-mono text-[0.6rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded"
                      style={{ background: badge.bg, color: badge.text }}
                    >
                      {bug.badge}
                    </span>
                  </div>

                  {/* Code */}
                  <div className="bg-black/40 border border-white/10 rounded-lg p-4 font-mono text-xs text-[#B7FF00] mb-5 leading-relaxed">
                    {bug.code.split('\n').map((line, j) => (
                      <div key={j} className={line.startsWith('//') ? 'text-[#666666] italic' : ''}>{line || '\u00A0'}</div>
                    ))}
                  </div>

                  <h3 className="font-mono font-bold text-white text-base uppercase tracking-tight mb-2">
                    {bug.label}
                  </h3>
                  <p className="font-body text-sm text-[#666666] leading-relaxed mb-3">{bug.impact}</p>

                  {/* Consequence callout */}
                  <div className="border-l-2 border-[#D34D2A] pl-3 mt-4">
                    <p className="font-mono text-xs text-[#999999] italic">{bug.consequence}</p>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Wide bottom cell */}
          <div className="col-span-12 reveal">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-mono font-bold text-white text-lg uppercase tracking-tight mb-1">
                  ¿Tienes un bug legendario?
                </p>
                <p className="font-body text-sm text-[#666666]">
                  Nomina un error que haya marcado un antes y un después en tu carrera o en la industria.
                </p>
              </div>
              <button className="btn-cta flex-shrink-0">
                Nominar un bug
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
