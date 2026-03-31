'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAuth } from './AuthProvider';

const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

const links = [
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Feed de Bugs',   href: '#feed-bugs' },
  { label: 'Salón de la Fama', href: '#salon-fama' },
  { label: 'Comunidad',      href: '#comunidad' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const displayName = user?.user_metadata?.full_name?.split(' ')[0]
    ?? user?.email?.split('@')[0]
    ?? '';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E4E4E7]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 cursor-pointer">
            <span className="font-mono font-bold text-[#111] text-sm tracking-tight">
              galeria<span className="text-[#6366F1]">.</span>glitches
            </span>
            <span className="badge-indigo text-[0.55rem]">Beta</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm text-[#6B7280] hover:text-[#111] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop auth */}
          <div className="hidden md:flex items-center gap-5">
            {!loading && (
              user ? (
                <>
                  <span className="font-body text-sm text-[#6B7280]">
                    Hola, <strong className="text-[#111] font-medium">{displayName}</strong>
                  </span>
                  <button
                    onClick={() => signOut()}
                    className="btn-outline text-sm px-5 py-2"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="font-body text-sm text-[#6B7280] hover:text-[#111] transition-colors cursor-pointer"
                  >
                    Acceder
                  </button>
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="btn-cta text-sm px-4 py-1.5"
                  >
                    Enviar Bug
                  </button>
                </>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-full border border-[#E4E4E7] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block h-px w-4.5 bg-[#111] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ width: '18px' }} />
            <span className={`block h-px bg-[#111] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ width: '18px' }} />
            <span className={`block h-px bg-[#111] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ width: '18px' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#FAFAF9] border-b border-[#E4E4E7] px-6 pb-5">
            <div className="flex flex-col gap-4 pt-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm text-[#6B7280] hover:text-[#111] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              {user ? (
                <button
                  onClick={() => { signOut(); setMenuOpen(false); }}
                  className="btn-outline w-full mt-2"
                >
                  Salir
                </button>
              ) : (
                <button
                  onClick={() => { setAuthOpen(true); setMenuOpen(false); }}
                  className="btn-cta w-full mt-2"
                >
                  Acceder
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </>
  );
}
