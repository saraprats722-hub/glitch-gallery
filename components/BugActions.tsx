'use client';
import { useState } from 'react';

interface Props {
  initialUpvotes?: number;
  solutions?: number;
}

export default function BugActions({ initialUpvotes = 0, solutions = 0 }: Props) {
  const [voted, setVoted] = useState<'util' | 'reproducido' | 'solucionado' | null>(null);
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [reproduced, setReproduced] = useState(Math.floor(initialUpvotes * 0.6));

  const vote = (type: 'util' | 'reproducido' | 'solucionado') => {
    if (voted === type) return;
    if (type === 'util') setUpvotes((v) => v + 1);
    if (type === 'reproducido') setReproduced((v) => v + 1);
    setVoted(type);
  };

  const base =
    'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 cursor-pointer';

  return (
    <div className="flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-2 flex-wrap">
        {/* Útil */}
        <button
          onClick={() => vote('util')}
          aria-pressed={voted === 'util'}
          className={`${base} ${
            voted === 'util'
              ? 'bg-[#6366F1] text-white border-[#6366F1]'
              : 'text-[#6B7280] border-[#E4E4E7] hover:border-[#6366F1] hover:text-[#6366F1]'
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M1 11V6.5L4 2.5h.5l.5 1.5-1.5 1.5H7c.6 0 1 .4 1 1V7L7 11H1z" strokeLinejoin="round"/>
            <path d="M1 6.5V11" strokeLinecap="round"/>
          </svg>
          Útil{upvotes > 0 && <span className="ml-0.5 opacity-70">· {upvotes}</span>}
        </button>

        {/* Reproducido */}
        <button
          onClick={() => vote('reproducido')}
          aria-pressed={voted === 'reproducido'}
          className={`${base} ${
            voted === 'reproducido'
              ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
              : 'text-[#6B7280] border-[#E4E4E7] hover:border-[#F59E0B] hover:text-[#F59E0B]'
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" aria-hidden="true">
            <polygon points="2,1 9,5.5 2,10"/>
          </svg>
          Reproducido{reproduced > 0 && <span className="ml-0.5 opacity-70">· {reproduced}</span>}
        </button>

        {/* Solucionado */}
        <button
          onClick={() => vote('solucionado')}
          aria-pressed={voted === 'solucionado'}
          className={`${base} ${
            voted === 'solucionado'
              ? 'bg-[#10B981] text-white border-[#10B981]'
              : 'text-[#6B7280] border-[#E4E4E7] hover:border-[#10B981] hover:text-[#10B981]'
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M1.5 6l3 3 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Solucionado
        </button>
      </div>

      {solutions > 0 && (
        <button className="font-mono text-xs text-[#6366F1] hover:text-[#4F46E5] transition-all flex items-center gap-1 hover:gap-2 cursor-pointer group">
          {solutions} {solutions === 1 ? 'solución' : 'soluciones'}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5">
            <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
