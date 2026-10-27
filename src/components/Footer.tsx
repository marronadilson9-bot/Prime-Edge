import React from 'react';
import {
  MessageCircle,
  Mail,
  ArrowUp,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { EVENT_DATA } from '../data/conferenceData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A17] border-t border-slate-800/80 text-slate-400 text-xs">
      {/* Contact & Organization Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50 bg-[#F9F7F2] p-0.5 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src={EVENT_DATA.logoSrc}
                  alt="Logotipo Oficial Academia Prime Edge"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Academia Prime Edge
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              “{EVENT_DATA.slogan}”
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              1.ª Conferência Oficial — “Do Conhecimento à Ação”. Uma plataforma para conectar mentes, expandir visões e transformar o saber em atitudes concretas.
            </p>
          </div>

          {/* Col 2: Official Contacts (Section 15 of Briefing) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Contactos Oficiais
            </h4>
            <div className="space-y-2.5 pt-1">
              <div>
                <a
                  href={EVENT_DATA.officialWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-[#E5C365] transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">{EVENT_DATA.officialWhatsAppFull}</span>
                  <span className="text-[10px] text-emerald-400 border border-emerald-800/60 bg-emerald-950/40 px-1.5 py-0.5 rounded">
                    WhatsApp Oficial
                  </span>
                </a>
              </div>

              {/* Editable Official Email */}
              <div>
                <a
                  href={`mailto:${EVENT_DATA.officialEmail}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E5C365]" />
                  <span>{EVENT_DATA.officialEmail}</span>
                  <span className="text-[10px] text-slate-400">(Editável)</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#E5C365]" />
                <span>{EVENT_DATA.venue}, {EVENT_DATA.city}, {EVENT_DATA.country}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Social Networks (Editable fields as requested) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5C365]">
              Redes Sociais
            </h4>
            <p className="text-[11px] text-slate-400">
              Canais oficiais da Academia Prime Edge:
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <a
                href={EVENT_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white hover:underline transition-colors"
              >
                <span>Facebook Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={EVENT_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white hover:underline transition-colors"
              >
                <span>Instagram Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={EVENT_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-slate-300 hover:text-white hover:underline transition-colors"
              >
                <span>LinkedIn Corporativo</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <span className="text-[10px] text-slate-500 italic mt-1 block">
                Campos preparados para ligação às contas finais confirmadas.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-[#040813] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 text-center sm:text-left">
            © 2026 Academia Prime Edge. Todos os direitos reservados. 1.ª Conferência — Do Conhecimento à Ação.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              5 de Dezembro de 2026 · Luanda, Angola
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
