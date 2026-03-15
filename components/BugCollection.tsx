const profiles = [
  {
    user: 'devCarlos',
    initial: 'C',
    color: '#D34D2A',
    role: 'Full-Stack Developer',
    bugs: 24,
    solved: 19,
    collection: [
      { title: 'React: bucle infinito en useEffect', lang: 'JS', severity: 'ALTA' },
      { title: 'Div anidado sin cerrar rompe formulario', lang: 'HTML', severity: 'MEDIA' },
      { title: 'Crash en producción por objeto null', lang: 'TS', severity: 'CRÍTICO' },
      { title: 'CSS flex overflow invisible en Safari', lang: 'CSS', severity: 'BAJA' },
    ],
  },
  {
    user: 'ana_backend',
    initial: 'A',
    color: '#6366F1',
    role: 'Backend Engineer',
    bugs: 31,
    solved: 28,
    collection: [
      { title: 'Race condition en queries paralelas', lang: 'PY', severity: 'ALTA' },
      { title: 'Argumento mutable por defecto', lang: 'PY', severity: 'MEDIA' },
      { title: 'Deadlock en transacción SQL', lang: 'SQL', severity: 'CRÍTICO' },
      { title: 'Variable de entorno no cargada en CI', lang: 'SH', severity: 'MEDIA' },
    ],
  },
  {
    user: 'marco_ux',
    initial: 'M',
    color: '#10B981',
    role: 'Frontend Engineer',
    bugs: 17,
    solved: 15,
    collection: [
      { title: 'z-index ignorado en modal', lang: 'CSS', severity: 'BAJA' },
      { title: 'Animación que bloquea el scroll en iOS', lang: 'CSS', severity: 'ALTA' },
      { title: 'TypeScript: tipo any en JSON.parse', lang: 'TS', severity: 'MEDIA' },
      { title: 'Evento de click doble en touch', lang: 'JS', severity: 'BAJA' },
    ],
  },
];

const severityColors: Record<string, string> = {
  BAJA:    '#22c55e',
  MEDIA:   '#f59e0b',
  ALTA:    '#ef4444',
  CRÍTICO: '#dc2626',
};

export default function BugCollection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// colecciones personales</span>
          <h2 className="heading-impact text-5xl md:text-6xl text-[#121212]">
            Mi Colección
          </h2>
          <p className="font-body font-light text-[#666666] mt-4 text-base max-w-xl">
            Cada desarrollador lleva una colección de errores propios. Aquí los documentan para que nadie más los repita.
          </p>
        </div>

        {/* Profile grid */}
        <div className="bento-grid">
          {profiles.map((profile, i) => (
            <div
              key={profile.user}
              className={`col-span-12 md:col-span-4 card-bento reveal reveal-delay-${i + 1}`}
            >
              {/* Profile header */}
              <div className="p-6 border-b border-[#E5E5E5]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-white text-base"
                    style={{ background: profile.color }}
                  >
                    {profile.initial}
                  </div>
                  <div>
                    <p className="font-mono font-bold text-[#121212] text-sm">@{profile.user}</p>
                    <p className="font-body text-xs text-[#999999]">{profile.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-5">
                  <div>
                    <p className="font-mono font-bold text-xl text-[#121212]">{profile.bugs}</p>
                    <p className="font-body text-xs text-[#999999]">bugs documentados</p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-xl" style={{ color: profile.color }}>{profile.solved}</p>
                    <p className="font-body text-xs text-[#999999]">resueltos</p>
                  </div>
                </div>
              </div>

              {/* Bug list */}
              <div className="p-5">
                <p className="label-mono mb-4">Colección</p>
                <ul className="flex flex-col gap-2.5">
                  {profile.collection.map((bug, j) => (
                    <li key={j} className="flex items-center gap-2.5 group cursor-pointer">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: severityColors[bug.severity] }}
                      />
                      <span className="font-body text-xs text-[#666666] group-hover:text-[#121212] transition-colors flex-1 leading-snug">
                        {bug.title}
                      </span>
                      <span className="badge-lang text-[0.55rem] flex-shrink-0">{bug.lang}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-5 font-mono text-xs flex items-center gap-1.5 transition-colors hover:gap-2.5"
                  style={{ color: profile.color }}
                >
                  Ver colección completa
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
