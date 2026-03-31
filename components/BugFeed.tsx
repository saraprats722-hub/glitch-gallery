import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import BugActions from './BugActions';

const LANG_COLORS: Record<string, { bg: string; text: string }> = {
  JavaScript: { bg: '#F7DF1E', text: '#111111' },
  TypeScript: { bg: '#3178C6', text: '#ffffff' },
  Python:     { bg: '#3572A5', text: '#ffffff' },
  CSS:        { bg: '#563D7C', text: '#ffffff' },
  Go:         { bg: '#00ACD7', text: '#ffffff' },
  Rust:       { bg: '#DEA584', text: '#111111' },
  Java:       { bg: '#ED8B00', text: '#ffffff' },
  SQL:        { bg: '#336791', text: '#ffffff' },
  HTML:       { bg: '#E34F26', text: '#ffffff' },
  Ruby:       { bg: '#CC342D', text: '#ffffff' },
  PHP:        { bg: '#777BB4', text: '#ffffff' },
  Swift:      { bg: '#F05138', text: '#ffffff' },
  Kotlin:     { bg: '#7F52FF', text: '#ffffff' },
};

const SEVERITY_MAP: Record<string, { color: string; bg: string; label: string }> = {
  LOW:        { color: '#10B981', bg: '#10B98112', label: 'Baja' },
  MEDIUM:     { color: '#F59E0B', bg: '#F59E0B12', label: 'Media' },
  HIGH:       { color: '#EF4444', bg: '#EF444412', label: 'Alta' },
  CRITICAL:   { color: '#DC2626', bg: '#DC262612', label: 'Crítico' },
  LEGENDARY:  { color: '#6366F1', bg: '#6366F112', label: 'Legendario' },
  // Spanish aliases from static data
  BAJA:       { color: '#10B981', bg: '#10B98112', label: 'Baja' },
  MEDIA:      { color: '#F59E0B', bg: '#F59E0B12', label: 'Media' },
  ALTA:       { color: '#EF4444', bg: '#EF444412', label: 'Alta' },
};

type BugCard = {
  id: string;
  lang: string;
  title: string;
  snippet: string;
  result: string;
  desc: string;
  upvotes: number;
  solutions: number;
  severity: string;
};

const staticBugs: BugCard[] = [
  {
    id: 'BUG-0042',
    lang: 'JavaScript',
    title: 'Punto y coma implícito',
    snippet: `return\n{\n  name: "Alex"\n}`,
    result: '// Resultado: undefined',
    desc: 'El motor JS inserta un punto y coma automáticamente después del return, antes del objeto.',
    upvotes: 284,
    solutions: 12,
    severity: 'MEDIUM',
  },
  {
    id: 'BUG-0117',
    lang: 'Python',
    title: 'Argumento mutable por defecto',
    snippet: `def add_item(item, lst=[]):\n    lst.append(item)\n    return lst`,
    result: '// add_item(2) → [1, 2] en lugar de [2]',
    desc: 'Los argumentos con valor mutable por defecto se comparten entre todas las llamadas a la función.',
    upvotes: 321,
    solutions: 18,
    severity: 'HIGH',
  },
  {
    id: 'BUG-0203',
    lang: 'CSS',
    title: 'z-index ignorado',
    snippet: `.modal {\n  z-index: 9999;\n  /* no funciona */\n}`,
    result: '// El modal queda detrás del navbar',
    desc: 'Sin position: relative/absolute/fixed el z-index no tiene efecto. Cuestión de contexto de apilamiento.',
    upvotes: 412,
    solutions: 9,
    severity: 'LOW',
  },
  {
    id: 'BUG-0309',
    lang: 'TypeScript',
    title: 'any silencioso en JSON.parse',
    snippet: `const data = JSON.parse(response);\ndata.user.name; // TS feliz\n// Runtime: Cannot read property`,
    result: '// Error en producción, no en compilación',
    desc: 'JSON.parse devuelve any, desactivando todas las comprobaciones de tipos de TypeScript.',
    upvotes: 289,
    solutions: 15,
    severity: 'HIGH',
  },
];

export default async function BugFeed() {
  let bugs: BugCard[] = staticBugs;

  if (isSupabaseConfigured) {
    const { data, error } = await supabase
      .from('bugs')
      .select('id, title, description, language, severity, upvotes, code_snippet, error_output')
      .order('upvotes', { ascending: false })
      .limit(4);

    if (!error && data && data.length > 0) {
      bugs = data.map((b) => ({
        id: `BUG-${b.id.slice(0, 6).toUpperCase()}`,
        lang: b.language ?? 'Unknown',
        title: b.title,
        snippet: b.code_snippet ?? '',
        result: b.error_output ?? '',
        desc: b.description,
        upvotes: b.upvotes ?? 0,
        solutions: 0,
        severity: b.severity ?? 'MEDIUM',
      }));
    }
  }

  return (
    <section id="feed-bugs" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="label-mono block mb-3">// feed en tiempo real</span>
            <h2 className="font-display font-bold text-[#111] tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
              Feed de Bugs
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-outline text-sm px-5 py-2">Ver todos</button>
            <button className="btn-cta text-sm px-5 py-2">Enviar bug</button>
          </div>
        </div>

        {/* Grid */}
        <div className="bento-grid">
          {bugs.map((bug, i) => {
            const langStyle = LANG_COLORS[bug.lang] ?? { bg: '#E4E4E7', text: '#111' };
            const sev = SEVERITY_MAP[bug.severity] ?? SEVERITY_MAP.MEDIUM;

            return (
              <article
                key={bug.id}
                className={`col-span-12 md:col-span-6 card flex flex-col reveal reveal-delay-${(i % 4) + 1}`}
              >
                {/* Card header */}
                <div className="px-5 py-4 border-b border-[#E4E4E7] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-[0.6rem]"
                      style={{ background: langStyle.bg, color: langStyle.text }}
                      aria-hidden="true"
                    >
                      {bug.lang.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="badge-lang">{bug.lang}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[0.6rem] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md"
                      style={{ color: sev.color, background: sev.bg }}
                    >
                      {sev.label}
                    </span>
                    <span className="font-mono text-[0.62rem] text-[#9CA3AF]">{bug.id}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex-1">
                  <h3 className="font-display font-semibold text-[#111] text-base mb-3 tracking-tight">
                    {bug.title}
                  </h3>

                  {bug.snippet && (
                    <div className="code-block mb-3 text-xs">
                      {bug.snippet.split('\n').map((line, j) => (
                        <div key={j} className="flex gap-3">
                          <span className="text-[#9CA3AF] select-none w-4 text-right flex-shrink-0 tabular-nums">{j + 1}</span>
                          <span>{line || '\u00A0'}</span>
                        </div>
                      ))}
                      {bug.result && (
                        <div className="mt-2 pt-2 border-t border-[#E4E4E7] text-[#6366F1]">
                          {bug.result.split('\n').map((line, j) => (
                            <div key={j}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <p className="font-body text-xs text-[#6B7280] leading-relaxed">{bug.desc}</p>
                </div>

                {/* Card footer — actions */}
                <div className="px-5 py-3.5 border-t border-[#E4E4E7]">
                  <BugActions initialUpvotes={bug.upvotes} solutions={bug.solutions} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
