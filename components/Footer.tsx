const footerLinks = {
  Plataforma: ['Feed de Bugs', 'Bugs Destacados', 'Salón de la Fama', 'Comunidad'],
  Recursos:   ['Documentación', 'Guía de contribución', 'API Pública', 'Código abierto'],
  Compañía:   ['Acerca de', 'Blog técnico', 'Contacto', 'Privacidad'],
};

const marqueeItems = ['Bug documentado', 'Error compartido', 'Comunidad aprende', 'Bug resuelto', 'Conocimiento colectivo'];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/[0.06]">

      {/* Marquee */}
      <div className="border-b border-white/[0.06] overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, i) => (
            <span key={i} className="font-mono text-xs font-medium uppercase text-white/20 tracking-[0.15em] mr-10 flex items-center gap-3">
              {text}
              <span className="text-[#6366F1] text-base mr-7">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Brand + Newsletter */}
        <div className="max-w-sm">
          <p className="font-mono font-bold text-white text-sm tracking-tight mb-3">
            galeria<span className="text-[#6366F1]">.</span>glitches
          </p>
          <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-6">
            La plataforma donde los fallos de programación se convierten en conocimiento colectivo.
          </p>

          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="tu@correo.dev"
              className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-2.5 text-white text-sm font-body placeholder:text-[#4B5563] focus:outline-none focus:border-[#6366F1]/50 transition-colors min-w-0"
            />
            <button className="btn-cta text-sm px-4 py-2.5 flex-shrink-0">
              Suscribirse
            </button>
          </div>
          <p className="font-body text-xs text-[#4B5563] mt-2">
            Resumen semanal de los bugs más votados.
          </p>
        </div>

        {/* Link columns — separated by border */}
        <div className="mt-12 pt-10 border-t border-white/[0.06] flex gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([section, links], idx, arr) => (
            <div key={section} className={idx === arr.length - 1 ? 'ml-auto' : ''}>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#4B5563] mb-4">
                {section}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-[#6B7280] hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#4B5563]">
            © 2025 Galería de Glitches. Construido con bugs y mucho café.
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                label: 'GitHub',
                path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z',
              },
              {
                label: 'Twitter/X',
                path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.38l4.26 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z',
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-[#4B5563] hover:text-white hover:border-white/25 transition-all duration-150"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
