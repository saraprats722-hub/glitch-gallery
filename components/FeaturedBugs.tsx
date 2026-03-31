const featured = [
  {
    id: 'bucle-infinito',
    title: 'Bucle Infinito',
    category: 'Lógica',
    desc: 'La condición de salida nunca se cumple. El proceso consume CPU al 100% hasta que el sistema fuerza el cierre.',
    code: 'while (true) {\n  // "solo una vuelta más"\n}',
    symbol: '∞',
  },
  {
    id: 'etiqueta-sin-cerrar',
    title: 'Etiqueta HTML sin cerrar',
    category: 'Markup',
    desc: 'El navegador intenta parsear el HTML incompleto. El layout colapsa de formas inesperadas.',
    code: '<div>\n  <p>Hola\n</div>',
    symbol: '</>',
  },
  {
    id: 'css-roto',
    title: 'CSS que rompe el layout',
    category: 'Estilos',
    desc: 'Un overflow: hidden inesperado. Un margin negativo. Un flexbox mal configurado que desplaza todo.',
    code: '.card {\n  margin: -9999px;\n}',
    symbol: '{}',
  },
  {
    id: 'null-pointer',
    title: 'Referencia Nula',
    category: 'Runtime',
    desc: 'Intentar acceder a una propiedad de undefined. El error más frecuente en producción a nivel mundial.',
    code: "user.profile.avatar\n// Cannot read properties\n// of undefined",
    symbol: 'null',
  },
  {
    id: 'floating-point',
    title: 'Punto Flotante',
    category: 'Matemáticas',
    desc: '0.1 + 0.2 no es 0.3 en IEEE 754. Causa fallos silenciosos en comparaciones de precios y cálculos financieros.',
    code: '0.1 + 0.2\n// → 0.30000000000000004\n0.1 + 0.2 === 0.3 // false',
    symbol: '.0?',
  },
  {
    id: 'typeof-null',
    title: 'typeof null es object',
    category: 'JavaScript',
    desc: 'Un bug histórico de 1995 que nunca se corrigió. typeof null devuelve "object" aunque null no sea un objeto.',
    code: 'typeof null\n// → "object"\n// Bug de JS desde V1',
    symbol: '??',
  },
  {
    id: 'calc-sin-espacio',
    title: 'calc() sin espacios',
    category: 'CSS',
    desc: 'calc(100%-20px) no funciona. El estándar CSS exige espacios alrededor del operador menos para evitar ambigüedad con unidades negativas.',
    code: '/* Error silencioso */\nwidth: calc(100%-20px);\n/* Correcto: */\nwidth: calc(100% - 20px);',
    symbol: '%−',
  },
  {
    id: 'python-is',
    title: 'is vs == en Python',
    category: 'Python',
    desc: 'Python cachea enteros pequeños (−5 a 256). Con valores mayores, "is" compara identidad en memoria y devuelve False aunque sean iguales.',
    code: 'a = 256; b = 256\na is b  # → True\na = 257; b = 257\na is b  # → False',
    symbol: 'is?',
  },
];

const ACCENT = '#6366F1';

export default function FeaturedBugs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 reveal">
          <span className="label-mono block mb-3">// colección curada</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Bugs Destacados
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {featured.map((bug, i) => (
            <div
              key={bug.id}
              className={`col-span-12 sm:col-span-6 lg:col-span-3 card reveal reveal-delay-${(i % 4) + 1} group cursor-pointer flex flex-col`}
            >
              {/* Accent top line */}
              <div className="h-0.5 w-full" style={{ background: ACCENT }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Symbol */}
                <div
                  className="font-mono font-bold leading-none mb-4 select-none text-3xl"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                >
                  {bug.symbol}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="badge-lang">{bug.category}</span>
                </div>

                <h3 className="font-display font-semibold text-[#111] text-base tracking-tight mb-2">
                  {bug.title}
                </h3>

                <p className="font-body text-xs text-[#6B7280] leading-normal mb-4 flex-1">
                  {bug.desc}
                </p>

                <div className="code-block text-xs mb-4">
                  {bug.code.split('\n').map((line, j) => (
                    <div key={j} className={line.startsWith('//') || line.startsWith('/*') || line.startsWith('*') ? 'text-[#9CA3AF]' : ''}>{line || '\u00A0'}</div>
                  ))}
                </div>

                <button
                  className="font-mono text-xs inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-150 cursor-pointer"
                  style={{ color: ACCENT }}
                >
                  Ver análisis completo
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
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
