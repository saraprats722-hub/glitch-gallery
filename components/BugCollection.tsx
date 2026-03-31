'use client';
import { useState } from 'react';

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
  {
    user: 'sara_mobile',
    initial: 'S',
    color: '#F59E0B',
    role: 'Mobile Developer',
    bugs: 22,
    solved: 18,
    collection: [
      { title: 'Crash al rotar pantalla en Android', lang: 'KT', severity: 'HIGH' },
      { title: 'Memory leak en listeners no eliminados', lang: 'SW', severity: 'CRITICAL' },
      { title: 'Teclado tapa el input en iOS 17', lang: 'SW', severity: 'MEDIUM' },
      { title: 'Dark mode ignora colores personalizados', lang: 'CSS', severity: 'LOW' },
    ],
  },
  {
    user: 'luisfdev',
    initial: 'L',
    color: '#EF4444',
    role: 'DevOps Engineer',
    bugs: 14,
    solved: 14,
    collection: [
      { title: 'Docker build falla por .dockerignore mal', lang: 'SH', severity: 'MEDIUM' },
      { title: 'CI pasa pero prod falla por env vars', lang: 'SH', severity: 'HIGH' },
      { title: 'Nginx 502 intermitente sin logs claros', lang: 'SH', severity: 'CRITICAL' },
      { title: 'Cron job silencia errores con > /dev/null', lang: 'SH', severity: 'HIGH' },
    ],
  },
  {
    user: 'teo_design',
    initial: 'T',
    color: '#EC4899',
    role: 'Design Engineer',
    bugs: 19,
    solved: 16,
    collection: [
      { title: 'Fuente no carga en Firefox por CORS', lang: 'CSS', severity: 'MEDIUM' },
      { title: 'SVG roto en Safari con clip-path', lang: 'CSS', severity: 'HIGH' },
      { title: 'Animación GSAP salta en primer frame', lang: 'JS', severity: 'LOW' },
      { title: 'Scroll suave ignorado en Chrome móvil', lang: 'CSS', severity: 'LOW' },
    ],
  },
];

const severityDot: Record<string, string> = {
  LOW:      '#10B981',
  MEDIUM:   '#F59E0B',
  HIGH:     '#EF4444',
  CRITICAL: '#DC2626',
};

const VISIBLE = 3;

export default function BugCollection() {
  const [startIndex, setStartIndex] = useState(0);
  const maxStart = profiles.length - VISIBLE; // 3 for 6 profiles
  const visible = profiles.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 reveal">
          <span className="label-mono block mb-3">// colecciones personales</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Mi Colección
          </h2>
          <p className="font-body text-[#6B7280] mt-3 text-base max-w-xl leading-normal">
            Cada desarrollador lleva una colección de errores propios. Aquí los documentan para que nadie más los repita.
          </p>
        </div>

        {/* Carousel track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((profile, i) => (
            <div key={profile.user} className={`card reveal reveal-delay-${i + 1}`}>
              {/* Profile header */}
              <div className="p-6 border-b border-[#E4E4E7]">
                <div className="flex items-center gap-3 mb-4">
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
                <p className="label-mono mb-3">Colección</p>
                <ul className="flex flex-col gap-2">
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
                  className="mt-4 font-mono text-xs flex items-center gap-1.5 transition-all duration-150 hover:gap-2.5 cursor-pointer"
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

        {/* Carousel navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
            disabled={startIndex === 0}
            aria-label="Anterior"
            className="w-8 h-8 rounded-full border border-[#E4E4E7] flex items-center justify-center text-[#6B7280] hover:border-[#6366F1] hover:text-[#6366F1] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots — one per slide position */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxStart + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Posición ${idx + 1}`}
                className={`rounded-full transition-all duration-200 cursor-pointer ${
                  idx === startIndex
                    ? 'w-5 h-1.5 bg-[#6366F1]'
                    : 'w-1.5 h-1.5 bg-[#E4E4E7] hover:bg-[#6366F1]/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setStartIndex((i) => Math.min(maxStart, i + 1))}
            disabled={startIndex === maxStart}
            aria-label="Siguiente"
            className="w-8 h-8 rounded-full border border-[#E4E4E7] flex items-center justify-center text-[#6B7280] hover:border-[#6366F1] hover:text-[#6366F1] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Ver más */}
        <div className="flex justify-center mt-6">
          <button className="btn-outline text-sm px-6 py-2">Ver más</button>
        </div>

      </div>
    </section>
  );
}
