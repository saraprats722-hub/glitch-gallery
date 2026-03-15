const featured = [
  {
    id: 'bucle-infinito',
    title: 'Bucle Infinito',
    category: 'Lógica',
    desc: 'La condición de salida nunca se cumple. El proceso consume CPU al 100% hasta que el sistema fuerza el cierre.',
    code: 'while (true) {\n  // "solo una vuelta más"\n}',
    accent: '#D34D2A',
    size: 'wide', // col-span-8
    emoji: '∞',
  },
  {
    id: 'etiqueta-sin-cerrar',
    title: 'Etiqueta HTML sin cerrar',
    category: 'Markup',
    desc: 'El navegador intenta parsear el HTML incompleto. El layout colapsa de formas inesperadas.',
    code: '<div>\n  <p>Hola\n</div>',
    accent: '#6366F1',
    size: 'narrow', // col-span-4
    emoji: '</?>',
  },
  {
    id: 'css-roto',
    title: 'CSS que rompe el layout',
    category: 'Estilos',
    desc: 'Un overflow: hidden inesperado. Un margin negativo. Un flexbox mal configurado que desplaza todo.',
    code: '.card {\n  margin: -9999px;\n}',
    accent: '#8B5CF6',
    size: 'narrow',
    emoji: '🎨',
  },
  {
    id: 'null-pointer',
    title: 'Error de Referencia Nula',
    category: 'Runtime',
    desc: 'Intentar acceder a una propiedad de undefined. El error más frecuente en producción a nivel mundial.',
    code: "user.profile.avatar\n// Cannot read properties\n// of undefined",
    accent: '#EF4444',
    size: 'wide',
    emoji: 'null',
  },
];

export default function FeaturedBugs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// colección curada</span>
          <h2 className="heading-impact text-5xl md:text-6xl text-[#121212]">
            Bugs Destacados
          </h2>
        </div>

        {/* Bento grid with varied sizes */}
        <div className="bento-grid">
          {featured.map((bug, i) => {
            const isWide = bug.size === 'wide';
            return (
              <div
                key={bug.id}
                className={`${isWide ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'} card-bento reveal reveal-delay-${(i % 4) + 1} group cursor-pointer`}
              >
                {/* Accent top border */}
                <div className="h-1 w-full" style={{ background: bug.accent }} />

                <div className={`p-7 ${isWide ? 'flex gap-8 items-start' : ''}`}>
                  {/* Emoji / symbol */}
                  <div
                    className={`font-mono font-bold leading-none mb-5 flex-shrink-0 ${
                      isWide ? 'text-6xl' : 'text-4xl'
                    }`}
                    style={{ color: bug.accent }}
                  >
                    {bug.emoji}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-lang">{bug.category}</span>
                    </div>

                    <h3 className="font-mono font-bold text-[#121212] text-xl uppercase tracking-tight mb-3">
                      {bug.title}
                    </h3>

                    <p className="font-body text-sm text-[#666666] leading-relaxed mb-4">
                      {bug.desc}
                    </p>

                    <div className="code-block text-xs">
                      {bug.code.split('\n').map((line, j) => (
                        <div key={j}>{line || '\u00A0'}</div>
                      ))}
                    </div>

                    <button
                      className="mt-4 font-mono text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      style={{ color: bug.accent }}
                    >
                      Ver análisis completo
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
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
