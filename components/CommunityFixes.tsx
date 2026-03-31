'use client';
import { useState } from 'react';

const bugs = [
  {
    id: 'BUG-0042',
    title: 'Punto y coma implícito en JavaScript',
    lang: 'JavaScript',
    snippet: `return\n{\n  name: "Alex"\n}\n// → undefined (esperado: objeto)`,
    author: 'devAlex',
    time: 'hace 2h',
    solutions: [
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
        text: 'Activa la regla de ESLint "no-unexpected-multiline" para detectar esto automáticamente en tu editor antes de ejecutar.',
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
    ],
  },
  {
    id: 'BUG-0203',
    title: 'z-index ignorado en modal CSS',
    lang: 'CSS',
    snippet: `.modal {\n  z-index: 9999;\n  /* sigue detrás del navbar */\n}`,
    author: 'sara_ui',
    time: 'hace 5h',
    solutions: [
      {
        user: 'marco_ux',
        initial: 'M',
        color: '#8B5CF6',
        votes: 61,
        text: 'Sin position relativo, absoluto o fijo el z-index no tiene efecto. Cada contexto de apilamiento es independiente.',
        fix: '.modal {\n  position: fixed;\n  z-index: 9999;\n}',
        accepted: true,
      },
      {
        user: 'frontend_pau',
        initial: 'P',
        color: '#EC4899',
        votes: 34,
        text: 'Comprueba si algún ancestro tiene transform, filter u opacity parcial — crean un nuevo stacking context que limita el z-index hijo.',
        fix: '/* Elimina en el ancestro: */\ntransform: translateZ(0);\nopacity: 0.99;',
        accepted: false,
      },
    ],
  },
  {
    id: 'BUG-0117',
    title: 'Argumento mutable por defecto en Python',
    lang: 'Python',
    snippet: `def add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nadd_item(1)  # [1]\nadd_item(2)  # [1, 2] ← sorpresa`,
    author: 'ana_backend',
    time: 'hace 1d',
    solutions: [
      {
        user: 'pydoc_ro',
        initial: 'R',
        color: '#10B981',
        votes: 88,
        text: 'Los valores por defecto se evalúan una sola vez en la definición de la función, no en cada llamada. Usa None como centinela:',
        fix: 'def add_item(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst',
        accepted: true,
      },
      {
        user: 'typed_lu',
        initial: 'L',
        color: '#6366F1',
        votes: 42,
        text: 'Con type hints modernos puedes usar typing.Optional y dejar clara la intención. Mypy detectará el patrón erróneo si usas --strict.',
        fix: 'from typing import Optional\n\ndef add_item(\n  item: int,\n  lst: Optional[list] = None\n) -> list: ...',
        accepted: false,
      },
    ],
  },
  {
    id: 'BUG-0309',
    title: 'any silencioso en JSON.parse (TypeScript)',
    lang: 'TypeScript',
    snippet: `const data = JSON.parse(response);\ndata.user.name; // TS sin queja\n// Runtime: Cannot read property 'name'`,
    author: 'tsdev_kim',
    time: 'hace 3d',
    solutions: [
      {
        user: 'strict_ts',
        initial: 'S',
        color: '#3178C6',
        votes: 55,
        text: 'JSON.parse devuelve any, desactivando todas las comprobaciones. Valida el resultado con Zod o con un type guard explícito:',
        fix: 'import { z } from "zod";\n\nconst UserSchema = z.object({\n  user: z.object({ name: z.string() })\n});\nconst data = UserSchema.parse(JSON.parse(res));',
        accepted: true,
      },
      {
        user: 'safe_json',
        initial: 'J',
        color: '#F59E0B',
        votes: 29,
        text: 'Alternativa rápida: usa una función wrapper que retorne unknown en lugar de any, forzando la verificación de tipo antes de usarlo.',
        fix: 'function safeJsonParse(s: string): unknown {\n  return JSON.parse(s);\n}',
        accepted: false,
      },
    ],
  },
];

export default function CommunityFixes() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="comunidad" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 reveal">
          <span className="label-mono block mb-3">// soluciones colaborativas</span>
          <h2 className="font-display font-bold text-[#111] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Soluciones de la Comunidad
          </h2>
        </div>

        {/* Bug list */}
        <div className="flex flex-col gap-4">
          {bugs.map((bug, i) => {
            const isOpen = openId === bug.id;
            return (
              <div key={bug.id} className={`card reveal reveal-delay-${(i % 4) + 1}`}>

                {/* Bug header */}
                <div className="px-5 py-4 border-b border-[#E4E4E7] flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="badge-indigo">Bug Report</span>
                    <span className="font-mono text-xs text-[#9CA3AF]">{bug.id}</span>
                    <span className="badge-lang">{bug.lang}</span>
                  </div>
                  <span className="font-body text-xs text-[#9CA3AF]">{bug.time} · @{bug.author}</span>
                </div>

                {/* Bug body */}
                <div className="px-5 pt-4 pb-3">
                  <h3 className="font-display font-semibold text-[#111] text-sm tracking-tight mb-3">
                    {bug.title}
                  </h3>

                  <div className="code-block text-xs mb-4">
                    {bug.snippet.split('\n').map((line, j) => (
                      <div key={j} className={line.startsWith('//') ? 'text-[#6366F1]' : ''}>{line || '\u00A0'}</div>
                    ))}
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggle(bug.id)}
                    className="flex items-center gap-1.5 font-mono text-xs text-[#6366F1] hover:text-[#4F46E5] transition-colors cursor-pointer pb-1"
                    aria-expanded={isOpen}
                  >
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                      aria-hidden="true"
                    >
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {isOpen ? 'Ocultar' : 'Ver'} {bug.solutions.length} {bug.solutions.length === 1 ? 'solución' : 'soluciones'}
                  </button>
                </div>

                {/* Collapsible solutions */}
                {isOpen && (
                  <div className="border-t border-[#E4E4E7] px-5 pt-4 pb-5 flex flex-col gap-3">
                    {bug.solutions.map((sol) => (
                      <div
                        key={sol.user}
                        className={`rounded-xl border p-4 ${sol.accepted ? 'border-[#10B981]/30 bg-[#10B981]/[0.03]' : 'border-[#E4E4E7]'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-white text-xs flex-shrink-0 mt-0.5"
                            style={{ background: sol.color }}
                            aria-hidden="true"
                          >
                            {sol.initial}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span className="font-display font-semibold text-xs text-[#111]">@{sol.user}</span>
                              {sol.accepted && (
                                <span className="font-mono text-[0.55rem] font-bold uppercase tracking-wide text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-md">
                                  Aceptada
                                </span>
                              )}
                            </div>

                            <p className="font-body text-xs text-[#6B7280] leading-normal mb-2">
                              {sol.text}
                            </p>

                            <div className="code-block text-xs mb-2">
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
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
