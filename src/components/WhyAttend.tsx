import React from 'react';
import {
  BookOpen,
  Users,
  Sparkles,
  TrendingUp,
  Target,
  Compass,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { BENEFITS, TARGET_AUDIENCE } from '../data/conferenceData';

const iconMap = {
  BookOpen,
  Users,
  Sparkles,
  TrendingUp,
  Target,
  Compass,
};

export const WhyAttend: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-[#091124] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Experiência & Oportunidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Porquê Participar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            A conferência foi desenhada para criar um ambiente imersivo de aprendizagem, partilha de experiências práticas e conexões que impulsionam decisões conscientes.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BENEFITS.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.iconName as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={benefit.id}
                className="bg-[#0C1733]/70 hover:bg-[#0E1B3D] border border-slate-800/90 hover:border-[#D4AF37]/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#14234C] border border-[#D4AF37]/20 flex items-center justify-center text-[#E5C365] mb-5 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Pilar 0{idx + 1}</span>
                  <span className="text-[#E5C365]/80 font-medium">Academia Prime Edge</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Disclaimer Notice (Strictly complying with prompt requirement) */}
        <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-slate-400 mb-16">
          <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="text-slate-300 font-semibold">Nota de integridade:</span> Os benefícios acima descritos representam o ambiente educativo, o estímulo ao desenvolvimento e a partilha proporcionados pelo evento. Não constituem nem devem ser interpretados como garantias de resultados específicos para nenhum participante individual.
          </p>
        </div>

        {/* Target Audience Section (Section 3 of Briefing) */}
        <div className="bg-gradient-to-br from-[#0B1530] to-[#070D1E] border border-slate-800 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-[#E5C365] uppercase block mb-2">
                Comunidade do Evento
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                A quem se destina esta conferência?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Reunimos mentes proactivas que recusam o conformismo e acreditam no poder da acção contínua, da disciplina e da liderança orientada a resultados concretos.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {TARGET_AUDIENCE.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#070D1E]/60 border border-slate-800/80 p-3.5 rounded-xl"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
