const featured = [
  {
    id: 'bucle-infinito',
    title: 'Bucle Infinito',
    category: 'Lógica',
    desc: 'La condición de salida nunca se cumple. El proceso consume CPU al 100% hasta que el sistema fuerza el cierre.',
    code: 'while (true) {\n  // "solo una vuelta más"\n}',
    accent: '#6366F1',
    size: 'wide',
    symbol: '∞',
  },
  {
    id: 'etiqueta-sin-cerrar',
    title: 'Etiqueta HTML sin cerrar',
    category: 'Markup',
    desc: 'El navegador intenta parsear el HTML incompleto. El layout colapsa de formas inesperadas.',
    code: '<div>\n  <p>Hola\n</div>',
    accent: '#8B5CF6',
    size: 'narrow',
    symbol: '</>',
  },
  {
    id: 'css-roto',
    title: 'CSS que rompe el layout',
    category: 'Estilos',
    desc: 'Un overflow: hidden inesperado. Un margin negativo. Un flexbox mal configurado que desplaza todo.',
    code: '.card {\n  margin: -9999px;\n}',
    accent: '#EC4899',
    size: 'narrow',
    symbol: '{}',
  },
  {
    id: 'null-pointer',
    title: 'Referencia Nula',
    category: 'Runtime',
    desc: 'Intentar acceder a una propiedad de undefined. El error más frecuente en producción a nivel mundial.',
    code: "user.profile.avatar\n// Cannot read properties\n// of undefined",
    accent: '#EF4444',
    size: 'wide',
    symbol: 'null',
  },
];

export default function FeaturedBugs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// colección curada</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Bugs Destacados
          </h2>
        </div>

        <div className="bento-grid">
          {featured.map((bug, i) => {
            const isWide = bug.size === 'wide';
            return (
              <div
                key={bug.id}
                className={`${isWide ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'} card reveal reveal-delay-${(i % 4) + 1} group cursor-pointer`}
              >
                {/* Accent top line */}
                <div className="h-0.5 w-full" style={{ background: bug.accent }} />

                <div className={`p-7 ${isWide ? 'md:flex gap-8 items-start' : ''}`}>
                  {/* Symbol */}
                  <div
                    className={`font-mono font-bold leading-none mb-5 flex-shrink-0 select-none ${isWide ? 'text-6xl' : 'text-4xl'}`}
                    style={{ color: bug.accent }}
                    aria-hidden="true"
                  >
                    {bug.symbol}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-lang">{bug.category}</span>
                    </div>

                    <h3 className="font-display font-semibold text-[#111] text-xl tracking-tight mb-3">
                      {bug.title}
                    </h3>

                    <p className="font-body text-sm text-[#6B7280] leading-relaxed mb-4">
                      {bug.desc}
                    </p>

                    <div className="code-block text-xs">
                      {bug.code.split('\n').map((line, j) => (
                        <div key={j} className={line.startsWith('//') ? 'text-[#9CA3AF]' : ''}>{line || '\u00A0'}</div>
                      ))}
                    </div>

                    <button
                      className="mt-4 font-mono text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-150 cursor-pointer"
                      style={{ color: bug.accent }}
                    >
                      Ver análisis completo
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
