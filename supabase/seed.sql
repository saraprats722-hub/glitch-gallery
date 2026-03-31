-- ═══════════════════════════════════════════════════════════════
--  Galería de Glitches — Datos de demostración
--  Ejecutar en: Supabase Dashboard → SQL Editor
--
--  IMPORTANTE: usa session_replication_role para saltarse el FK
--  de profiles → auth.users durante el seed de demo.
--  Esto es seguro porque los datos son solo para desarrollo/demo.
-- ═══════════════════════════════════════════════════════════════

-- ── 1. Desactivar FKs temporalmente ─────────────────────────────
set session_replication_role = replica;

-- ── 2. Perfiles de demo ───────────────────────────────────────────
insert into public.profiles (id, username, bio, created_at, updated_at) values
  ('a1000000-0000-0000-0000-000000000001', 'devCarlos',  'Full-Stack Developer. React, Node, TypeScript.',        now() - interval '90 days', now()),
  ('a1000000-0000-0000-0000-000000000002', 'ana_backend','Backend Engineer. Python, Django, PostgreSQL.',          now() - interval '80 days', now()),
  ('a1000000-0000-0000-0000-000000000003', 'marco_ux',   'Frontend Engineer. Vue, Nuxt, CSS avanzado.',            now() - interval '70 days', now()),
  ('a1000000-0000-0000-0000-000000000004', 'sara_mobile','Mobile Developer. Swift, Kotlin, React Native.',          now() - interval '60 days', now()),
  ('a1000000-0000-0000-0000-000000000005', 'luisfdev',   'DevOps Engineer. Docker, K8s, CI/CD.',                   now() - interval '50 days', now()),
  ('a1000000-0000-0000-0000-000000000006', 'teo_design', 'Design Engineer. GSAP, SVG, sistemas de diseño.',        now() - interval '40 days', now()),
  ('a1000000-0000-0000-0000-000000000007', 'mariadev',   'Frontend Developer. React, accesibilidad, rendimiento.', now() - interval '30 days', now()),
  ('a1000000-0000-0000-0000-000000000008', 'carlos_ts',  'TypeScript enthusiast. ESLint, tsdoc, strict mode.',     now() - interval '20 days', now()),
  ('a1000000-0000-0000-0000-000000000009', 'sara_ui',    'UI Developer. CSS animations, design tokens.',           now() - interval '15 days', now()),
  ('a1000000-0000-0000-0000-000000000010', 'tsdev_kim',  'TypeScript + Zod + tRPC. Tipado en todo.',               now() - interval '10 days', now())
on conflict (id) do nothing;

-- ── 3. Bugs del Feed ─────────────────────────────────────────────
insert into public.bugs (id, author_id, title, description, language, severity, status, upvotes, code_snippet, error_output, created_at, updated_at) values

  ( 'b0000000-0000-0000-0000-000000000001',
    'a1000000-0000-0000-0000-000000000001',
    'Punto y coma implícito',
    'El motor JS inserta un punto y coma automáticamente después del return, antes del objeto. El valor devuelto es undefined en lugar del objeto esperado.',
    'JavaScript', 'MEDIUM', 'fixed', 284,
    E'return\n{\n  name: "Alex"\n}',
    E'// Resultado: undefined',
    now() - interval '30 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000002',
    'a1000000-0000-0000-0000-000000000002',
    'Argumento mutable por defecto',
    'Los argumentos con valor mutable por defecto se comparten entre todas las llamadas a la función. El array lst persiste entre invocaciones.',
    'Python', 'HIGH', 'fixed', 321,
    E'def add_item(item, lst=[]):\n    lst.append(item)\n    return lst',
    E'// add_item(2) → [1, 2] en lugar de [2]',
    now() - interval '25 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000003',
    'a1000000-0000-0000-0000-000000000003',
    'z-index ignorado',
    'Sin position: relative/absolute/fixed el z-index no tiene efecto. Los stacking contexts de los ancestros limitan el z-index de los hijos.',
    'CSS', 'LOW', 'fixed', 412,
    E'.modal {\n  z-index: 9999;\n  /* no funciona */\n}',
    E'// El modal queda detrás del navbar',
    now() - interval '20 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000004',
    'a1000000-0000-0000-0000-000000000010',
    'any silencioso en JSON.parse',
    'JSON.parse devuelve any, desactivando todas las comprobaciones de tipos de TypeScript. Los errores aparecen en tiempo de ejecución, no en compilación.',
    'TypeScript', 'HIGH', 'workaround', 289,
    E'const data = JSON.parse(response);\ndata.user.name; // TS feliz\n// Runtime: Cannot read property',
    E'// Error en producción, no en compilación',
    now() - interval '15 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000005',
    'a1000000-0000-0000-0000-000000000001',
    'Race condition en useEffect',
    'Cuando el componente se desmonta antes de que termine un fetch, el setState lanza un warning de memory leak. El orden de resolución de promesas no está garantizado.',
    'JavaScript', 'HIGH', 'workaround', 198,
    E'useEffect(() => {\n  fetch(url).then(d => setData(d));\n}, [url]);',
    E'// Warning: Can''t perform a React state\n// update on an unmounted component.',
    now() - interval '10 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000006',
    'a1000000-0000-0000-0000-000000000002',
    'Deadlock en transacción SQL',
    'Dos transacciones esperan mutuamente el lock de la otra. La base de datos detecta el ciclo y aborta una de ellas con error deadlock_detected.',
    'SQL', 'CRITICAL', 'workaround', 156,
    E'BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\n-- otra transacción bloquea id=2\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;',
    E'// ERROR: deadlock detected\n// DETAIL: Process 1234 waits for ShareLock on transaction 5678',
    now() - interval '8 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000007',
    'a1000000-0000-0000-0000-000000000004',
    'Memory leak en listeners no eliminados',
    'Añadir event listeners sin eliminarlos en el cleanup provoca memory leaks. Especialmente grave en componentes que se montan/desmontan frecuentemente.',
    'JavaScript', 'CRITICAL', 'fixed', 203,
    E'useEffect(() => {\n  window.addEventListener(''resize'', handler);\n  // falta el return cleanup\n}, []);',
    E'// Memory leak detectado en profiling.\n// El listener se acumula con cada render.',
    now() - interval '5 days', now() ),

  ( 'b0000000-0000-0000-0000-000000000008',
    'a1000000-0000-0000-0000-000000000003',
    'Animación que bloquea scroll en iOS',
    'En iOS Safari, las animaciones CSS con transform en elementos padre pueden bloquear el scroll nativo. Causa una experiencia de usuario muy mala.',
    'CSS', 'HIGH', 'workaround', 167,
    E'.hero {\n  animation: float 3s infinite;\n  /* bloquea scroll en iOS */\n}',
    E'// El scroll se congela o va a trompicones\n// en iPhone/iPad con iOS 15+',
    now() - interval '3 days', now() )

on conflict (id) do nothing;

-- ── 4. Soluciones de la comunidad ────────────────────────────────
insert into public.solutions (id, bug_id, author_id, body, code_fix, votes, accepted, created_at) values

  -- Soluciones para BUG-0001 (Punto y coma implícito)
  ( 'c0000000-0000-0000-0000-000000000001',
    'b0000000-0000-0000-0000-000000000001',
    'a1000000-0000-0000-0000-000000000007',
    'El ASI (Automatic Semicolon Insertion) de JS inserta un ; después del return. Mueve la llave de apertura a la misma línea:',
    E'return {\n  name: "Alex"\n}',
    47, true, now() - interval '29 days' ),

  ( 'c0000000-0000-0000-0000-000000000002',
    'b0000000-0000-0000-0000-000000000001',
    'a1000000-0000-0000-0000-000000000008',
    'Activa la regla de ESLint "no-unexpected-multiline" para detectar esto automáticamente en tu editor antes de ejecutar.',
    E'// .eslintrc\n"no-unexpected-multiline": "error"',
    23, false, now() - interval '28 days' ),

  ( 'c0000000-0000-0000-0000-000000000003',
    'b0000000-0000-0000-0000-000000000001',
    'a1000000-0000-0000-0000-000000000006',
    'Usa Prettier con punto y coma obligatorio. Formateará tu código automáticamente y evitará este tipo de errores.',
    E'// prettier.config.js\n{ "semi": true }',
    18, false, now() - interval '27 days' ),

  -- Soluciones para BUG-0003 (z-index ignorado)
  ( 'c0000000-0000-0000-0000-000000000004',
    'b0000000-0000-0000-0000-000000000003',
    'a1000000-0000-0000-0000-000000000003',
    'Sin position relativo, absoluto o fijo el z-index no tiene efecto. Cada contexto de apilamiento es independiente.',
    E'.modal {\n  position: fixed;\n  z-index: 9999;\n}',
    61, true, now() - interval '19 days' ),

  ( 'c0000000-0000-0000-0000-000000000005',
    'b0000000-0000-0000-0000-000000000003',
    'a1000000-0000-0000-0000-000000000009',
    'Comprueba si algún ancestro tiene transform, filter u opacity parcial — crean un nuevo stacking context que limita el z-index hijo.',
    E'/* Elimina en el ancestro: */\ntransform: translateZ(0);\nopacity: 0.99;',
    34, false, now() - interval '18 days' ),

  -- Soluciones para BUG-0002 (Argumento mutable)
  ( 'c0000000-0000-0000-0000-000000000006',
    'b0000000-0000-0000-0000-000000000002',
    'a1000000-0000-0000-0000-000000000002',
    'Los valores por defecto se evalúan una sola vez en la definición de la función, no en cada llamada. Usa None como centinela:',
    E'def add_item(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst',
    88, true, now() - interval '24 days' ),

  ( 'c0000000-0000-0000-0000-000000000007',
    'b0000000-0000-0000-0000-000000000002',
    'a1000000-0000-0000-0000-000000000008',
    'Con type hints modernos puedes usar typing.Optional y dejar clara la intención. Mypy detectará el patrón erróneo si usas --strict.',
    E'from typing import Optional\n\ndef add_item(\n  item: int,\n  lst: Optional[list] = None\n) -> list: ...',
    42, false, now() - interval '23 days' ),

  -- Soluciones para BUG-0004 (JSON.parse any)
  ( 'c0000000-0000-0000-0000-000000000008',
    'b0000000-0000-0000-0000-000000000004',
    'a1000000-0000-0000-0000-000000000010',
    'JSON.parse devuelve any, desactivando todas las comprobaciones. Valida el resultado con Zod o con un type guard explícito:',
    E'import { z } from "zod";\n\nconst UserSchema = z.object({\n  user: z.object({ name: z.string() })\n});\nconst data = UserSchema.parse(JSON.parse(res));',
    55, true, now() - interval '14 days' ),

  ( 'c0000000-0000-0000-0000-000000000009',
    'b0000000-0000-0000-0000-000000000004',
    'a1000000-0000-0000-0000-000000000007',
    'Alternativa rápida: usa una función wrapper que retorne unknown en lugar de any, forzando la verificación de tipo antes de usarlo.',
    E'function safeJsonParse(s: string): unknown {\n  return JSON.parse(s);\n}',
    29, false, now() - interval '13 days' )

on conflict (id) do nothing;

-- ── 5. Reactivar FKs ─────────────────────────────────────────────
set session_replication_role = default;
