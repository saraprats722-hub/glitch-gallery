'use client';
import { useState } from 'react';
import { useAuth } from './AuthProvider';

interface Props {
  onClose: () => void;
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="flex-shrink-0">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

function Field({
  label, type, value, onChange, placeholder,
}: {
  label: string; type: string; value: string;
  onChange: (v: string) => void; placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="label-mono">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#121212] font-body text-sm focus:outline-none focus:border-[#D34D2A] transition-colors placeholder:text-[#BBBBBB]"
      />
    </div>
  );
}

export default function AuthModal({ onClose }: Props) {
  const { signInWithGoogle, signInWithEmail, signUp } = useAuth();

  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const reset = () => { setError(''); setSuccess(''); };

  const handleGoogle = async () => {
    reset();
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      // La página redirige a Google — el modal desaparece solo
    } catch (e: any) {
      setError(e.message || 'Error al conectar con Google');
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    setLoading(true);
    try {
      if (tab === 'login') {
        await signInWithEmail(email, password);
        onClose();
      } else {
        if (!fullName.trim()) { setError('El nombre es obligatorio'); setLoading(false); return; }
        if (password.length < 6) { setError('La contraseña debe tener mínimo 6 caracteres'); setLoading(false); return; }
        await signUp(email, password, fullName);
        setSuccess('Cuenta creada. Revisa tu email para confirmarla.');
        setEmail(''); setPassword(''); setFullName('');
      }
    } catch (e: any) {
      const msg: Record<string, string> = {
        'Invalid login credentials': 'Email o contraseña incorrectos.',
        'Email not confirmed': 'Confirma tu email antes de entrar.',
        'User already registered': 'Ya existe una cuenta con este email.',
      };
      setError(msg[e.message] ?? e.message ?? 'Ha ocurrido un error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#F5F5F3] border border-[#E5E5E5] rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-[#E5E5E5]">
          <span className="font-mono font-bold text-[#121212] text-base tracking-tight">
            galeria<span className="text-[#D34D2A]">.</span>glitches
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#E5E5E5] transition-colors text-[#666666] hover:text-[#121212]"
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="px-7 py-6 space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 bg-white border border-[#E5E5E5] rounded-xl p-1">
            {(['login', 'register'] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); reset(); }}
                className={`flex-1 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                  tab === t
                    ? 'bg-[#121212] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#121212]'
                }`}
              >
                {t === 'login' ? 'Entrar' : 'Registrarse'}
              </button>
            ))}
          </div>

          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-[#E5E5E5] rounded-full px-4 py-3 font-body text-sm font-medium text-[#121212] hover:border-[#121212] disabled:opacity-50 transition-all duration-200"
          >
            <GoogleIcon />
            {googleLoading ? 'Redirigiendo…' : 'Continuar con Google'}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#E5E5E5]" />
            <span className="label-mono text-[#BBBBBB]">o</span>
            <div className="flex-1 h-px bg-[#E5E5E5]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <Field label="Nombre" type="text" value={fullName} onChange={setFullName} placeholder="Tu nombre" />
            )}
            <Field label="Email" type="email" value={email} onChange={setEmail} placeholder="tu@email.com" />
            <Field label="Contraseña" type="password" value={password} onChange={setPassword} placeholder="Mínimo 6 caracteres" />

            {error && (
              <p className="text-xs font-body text-[#D34D2A] bg-[#D34D2A]/8 border border-[#D34D2A]/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            {success && (
              <p className="text-xs font-body text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-cta w-full disabled:opacity-50"
            >
              {loading
                ? '…'
                : tab === 'login' ? 'Entrar' : 'Crear cuenta'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
