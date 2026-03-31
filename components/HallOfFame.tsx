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
    consequence: '$300B en correcciones. Meses de crisis IT mundial.',
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

const badgeStyles: Record<string, { color: string; bg: string }> = {
  LEGENDARIO: { color: '#6366F1', bg: 'rgba(99,102,241,0.15)' },
  HISTÓRICO:  { color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
  CRÍTICO:    { color: '#EF4444', bg: 'rgba(239,68,68,0.15)' },
};

export default function HallOfFame() {
  return (
    <section id="salon-fama" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8 reveal">
          <span className="label-mono text-[#6366F1] block mb-3">// errores que cambiaron la historia</span>
          <h2 className="font-display font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Salón de la Fama
          </h2>
          <p className="font-body text-[#6B7280] mt-2 max-w-xl text-base leading-normal">
            Los bugs que se convirtieron en lecciones para toda la industria del software.
          </p>
        </div>

        {/* Cards */}
        <div className="bento-grid">
          {legends.map((bug, i) => {
            const badge = badgeStyles[bug.badge] ?? badgeStyles.CRÍTICO;
            return (
              <div
                key={bug.id}
                className={`col-span-12 md:col-span-4 reveal reveal-delay-${i + 1} group cursor-pointer`}
              >
                <div className="h-full bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-200">

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#6B7280] border border-white/[0.1] px-2 py-0.5 rounded-md">
                        {bug.category}
                      </span>
                      <span className="font-mono text-xs text-[#4B5563]">{bug.year}</span>
                    </div>
                    <span
                      className="font-mono text-[0.58rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-lg"
                      style={{ color: badge.color, background: badge.bg }}
                    >
                      {bug.badge}
                    </span>
                  </div>

                  {/* Code */}
                  <div className="bg-black/50 border border-white/[0.08] rounded-xl p-4 font-mono text-xs text-[#A3E635] mb-5 leading-relaxed overflow-x-auto">
                    {bug.code.split('\n').map((line, j) => (
                      <div key={j} className={line.startsWith('//') ? 'text-[#4B5563] italic' : ''}>{line || '\u00A0'}</div>
                    ))}
                  </div>

                  <h3 className="font-display font-semibold text-white text-base tracking-tight mb-2">
                    {bug.label}
                  </h3>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-4">{bug.impact}</p>

                  {/* Consequence */}
                  <div className="border-l-2 border-[#6366F1] pl-3">
                    <p className="font-mono text-xs text-[#4B5563]">{bug.consequence}</p>
                  </div>

                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div className="col-span-12 reveal">
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-5">
              <div>
                <p className="font-display font-semibold text-white text-lg tracking-tight mb-1">
                  ¿Tienes un bug legendario?
                </p>
                <p className="font-body text-sm text-[#6B7280]">
                  Nomina un error que haya marcado un antes y un después en tu carrera o en la industria.
                </p>
              </div>
              <button className="btn-cta flex-shrink-0">Nominar un bug</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
