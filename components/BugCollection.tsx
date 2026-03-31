const profiles = [
  {
    user: 'devCarlos',
    initial: 'C',
    color: '#6366F1',
    role: 'Full-Stack Developer',
    bugs: 24,
    solved: 19,
    collection: [
      { title: 'React: bucle infinito en useEffect', lang: 'JS', severity: 'HIGH' },
      { title: 'Div anidado sin cerrar rompe formulario', lang: 'HTML', severity: 'MEDIUM' },
      { title: 'Crash en producción por objeto null', lang: 'TS', severity: 'CRITICAL' },
      { title: 'CSS flex overflow invisible en Safari', lang: 'CSS', severity: 'LOW' },
    ],
  },
  {
    user: 'ana_backend',
    initial: 'A',
    color: '#8B5CF6',
    role: 'Backend Engineer',
    bugs: 31,
    solved: 28,
    collection: [
      { title: 'Race condition en queries paralelas', lang: 'PY', severity: 'HIGH' },
      { title: 'Argumento mutable por defecto', lang: 'PY', severity: 'MEDIUM' },
      { title: 'Deadlock en transacción SQL', lang: 'SQL', severity: 'CRITICAL' },
      { title: 'Variable de entorno no cargada en CI', lang: 'SH', severity: 'MEDIUM' },
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
      { title: 'z-index ignorado en modal', lang: 'CSS', severity: 'LOW' },
      { title: 'Animación que bloquea scroll en iOS', lang: 'CSS', severity: 'HIGH' },
      { title: 'TypeScript: tipo any en JSON.parse', lang: 'TS', severity: 'MEDIUM' },
      { title: 'Evento de click doble en touch', lang: 'JS', severity: 'LOW' },
    ],
  },
];

const severityDot: Record<string, string> = {
  LOW:      '#10B981',
  MEDIUM:   '#F59E0B',
  HIGH:     '#EF4444',
  CRITICAL: '#DC2626',
};

export default function BugCollection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="label-mono block mb-3">// colecciones personales</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Mi Colección
          </h2>
          <p className="font-body text-[#6B7280] mt-4 text-base max-w-xl leading-relaxed">
            Cada desarrollador lleva una colección de errores propios. Aquí los documentan para que nadie más los repita.
          </p>
        </div>

        {/* Profile grid */}
        <div className="bento-grid">
          {profiles.map((profile, i) => (
            <div
              key={profile.user}
              className={`col-span-12 md:col-span-4 card reveal reveal-delay-${i + 1}`}
            >
              {/* Profile header */}
              <div className="p-6 border-b border-[#E4E4E7]">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-base"
                    style={{ background: profile.color }}
                    aria-hidden="true"
                  >
                    {profile.initial}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[#111] text-sm">@{profile.user}</p>
                    <p className="font-body text-xs text-[#9CA3AF]">{profile.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-6">
                  <div>
                    <p className="font-display font-bold text-xl text-[#111]">{profile.bugs}</p>
                    <p className="font-body text-xs text-[#9CA3AF]">documentados</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-xl" style={{ color: profile.color }}>{profile.solved}</p>
                    <p className="font-body text-xs text-[#9CA3AF]">resueltos</p>
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
                        style={{ background: severityDot[bug.severity] ?? '#9CA3AF' }}
                        aria-hidden="true"
                      />
                      <span className="font-body text-xs text-[#6B7280] group-hover:text-[#111] transition-colors flex-1 leading-snug">
                        {bug.title}
                      </span>
                      <span className="badge-lang text-[0.55rem] flex-shrink-0">{bug.lang}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-5 font-mono text-xs flex items-center gap-1.5 transition-all duration-150 hover:gap-2.5 cursor-pointer"
                  style={{ color: profile.color }}
                >
                  Ver colección completa
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
