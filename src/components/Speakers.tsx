import React, { useState } from 'react';
import { User, ChevronDown, ChevronUp, Briefcase, Award } from 'lucide-react';
import { SPEAKERS, Speaker } from '../data/conferenceData';

export const Speakers: React.FC = () => {
  const [expandedBioId, setExpandedBioId] = useState<string | null>('atchinguelessy');

  const toggleBio = (id: string) => {
    setExpandedBioId(expandedBioId === id ? null : id);
  };

  return (
    <section id="oradores" className="py-20 lg:py-28 bg-[#091124] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Vozes de Referência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Oradores Confirmados
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Conhece os oradores confirmados para partilharem visão, métodos de liderança e percursos transformadores na 1.ª Conferência da Academia Prime Edge.
          </p>
        </div>

        {/* Speakers Grid - 4 consistent luxury cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SPEAKERS.map((speaker) => {
            const isExpanded = expandedBioId === speaker.id;

            return (
              <div
                key={speaker.id}
                className="bg-[#0C1733]/80 border border-slate-800/90 hover:border-[#D4AF37]/35 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Speaker Top: Photo & Headline Header */}
                  <div className="p-6 sm:p-7 flex flex-col sm:flex-row gap-5 items-start">
                    {/* Portrait with fallback */}
                    <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden shrink-0 border border-[#D4AF37]/30 bg-slate-900 shadow-md">
                      <img
                        src={speaker.imageSrc}
                        alt={`Fotografia de ${speaker.displayName}`}
                        className="w-full h-full object-cover object-top filter contrast-[1.05]"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Fallback container if image cannot be loaded
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1733] via-transparent to-transparent opacity-60" />
                      {/* Stylized fallback initials behind */}
                      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-[#101F48] to-[#080E21] text-[#E5C365] font-black text-2xl">
                        {speaker.initials}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5C365] block mb-1">
                        Orador Confirmado
                      </span>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight mb-1">
                        {speaker.displayName}
                      </h3>
                      {speaker.displayName !== speaker.fullName && (
                        <p className="text-xs text-slate-400 mb-2 font-medium">
                          {speaker.fullName}
                        </p>
                      )}

                      <div className="flex items-start gap-2 mt-3 pt-3 border-t border-slate-800/80">
                        <Briefcase className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                            Área de Actuação
                          </span>
                          <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed block">
                            {speaker.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio Content Area */}
                  <div className="px-6 pb-4 sm:px-7 text-sm text-slate-300 leading-relaxed">
                    <div className="bg-[#080F22]/70 border border-slate-800/80 rounded-xl p-4 sm:p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#E5C365]" />
                          Perfil & Trajectória
                        </span>
                        {speaker.bio.length > 200 && (
                          <button
                            onClick={() => toggleBio(speaker.id)}
                            className="text-xs text-[#E5C365] hover:text-[#FFF] font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>{isExpanded ? 'Ver menos' : 'Ler perfil completo'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>

                      <div className="space-y-3 whitespace-pre-line text-xs sm:text-sm text-slate-300">
                        {isExpanded || speaker.bio.length <= 200
                          ? speaker.bio
                          : `${speaker.bio.slice(0, 190)}...`}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer slot prepared for future additions (interventions, speech themes) */}
                <div className="px-6 py-3.5 sm:px-7 bg-[#070D1E]/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="italic">Tema da intervenção a confirmar</span>
                  <span className="text-[#E5C365]/80 font-medium">1.ª Conferência Prime Edge</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
