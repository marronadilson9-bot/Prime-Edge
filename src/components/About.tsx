import React from 'react';
import {
  Target,
  Compass,
  Award,
  ShieldCheck,
  Lightbulb,
  Handshake,
  HeartHandshake,
  UserCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import { EVENT_DATA, INSTITUTION_INFO } from '../data/conferenceData';

const valueIcons: Record<string, React.FC<{ className?: string }>> = {
  Excelência: Award,
  Ética: ShieldCheck,
  Inovação: Lightbulb,
  Compromisso: Handshake,
  'Responsabilidade Social': HeartHandshake,
  'Valorização Humana': UserCheck,
};

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#091124] border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Apresentação Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Sobre a Academia Prime Edge
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#E5C365] font-semibold italic">
            “{EVENT_DATA.slogan}”
          </p>
        </div>

        {/* Quem Somos - Hero Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0D1938] via-[#0A142D] to-[#070D1E] border border-[#D4AF37]/35 rounded-2xl p-8 sm:p-10 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 pb-4 border-b border-slate-800">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-[#F9F7F2] p-1 shadow-md flex items-center justify-center shrink-0">
              <img
                src={EVENT_DATA.logoSrc}
                alt="Logotipo Oficial Academia Prime Edge"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C365] block">
                Identidade & Propósito
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Quem Somos
              </h3>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {INSTITUTION_INFO.about}
          </p>

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E5C365]" />
              <span className="text-slate-300 font-medium">Excelência · Inovação · Resultados Concretos</span>
            </div>
            <span className="text-[#E5C365]">Instituição Organizadora Oficial</span>
          </div>
        </div>

        {/* Visão e Missão - 2 Colunas Destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Visão */}
          <div className="bg-[#0C1733]/90 border border-slate-800/90 hover:border-[#D4AF37]/40 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#13234C] border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C365] group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C365] font-bold block">
                    Horizontes Estratégicos
                  </span>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">
                    Visão
                  </h4>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {INSTITUTION_INFO.vision}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Liderança e Futuro</span>
              <span className="text-[#E5C365]">Angola & Além Fronteiras</span>
            </div>
          </div>

          {/* Missão */}
          <div className="bg-[#0C1733]/90 border border-slate-800/90 hover:border-[#D4AF37]/40 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl group">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#13234C] border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C365] group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E5C365] font-bold block">
                    Compromisso Operacional
                  </span>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">
                    Missão
                  </h4>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {INSTITUTION_INFO.mission}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Impacto Real</span>
              <span className="text-[#E5C365]">Pessoal, Profissional e Social</span>
            </div>
          </div>
        </div>

        {/* Nossos Valores - Grade de 6 Pilares Éticos */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#E5C365] uppercase block mb-2">
              Princípios Fundamentais
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Valores da Academia PRIME EDGE
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Os pilares que orientam cada acção, formação e relacionamento institucional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUTION_INFO.values.map((val, idx) => {
              const IconComp = valueIcons[val.title] || Award;

              return (
                <div
                  key={idx}
                  className="bg-[#0C1733]/70 hover:bg-[#0F1D40] border border-slate-800/90 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#14234C] border border-[#D4AF37]/20 flex items-center justify-center text-[#E5C365] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#E5C365] transition-colors">
                      {val.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Pilar Institucional</span>
                    <span className="text-[#E5C365]/80 font-medium">Prime Edge</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
