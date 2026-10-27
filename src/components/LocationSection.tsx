import React from 'react';
import { MapPin, Calendar, Clock, Navigation, Building2, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '../data/conferenceData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#091124] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>O Ponto de Encontro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Localização do Evento
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            A conferência terá lugar em Luanda, num dos edifícios empresariais mais emblemáticos da cidade capital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#0C1733]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#13234C] border border-[#D4AF37]/30 flex items-center justify-center text-[#E5C365] mb-6">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                {EVENT_DATA.venue}
              </h3>
              <p className="text-base text-slate-300 font-medium mb-6">
                {EVENT_DATA.city}, {EVENT_DATA.country}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-4 h-4 text-[#E5C365] shrink-0" />
                  <span>
                    <strong className="text-white">Data:</strong> {EVENT_DATA.dateString}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-[#E5C365] shrink-0" />
                  <span>
                    <strong className="text-white">Hora de início:</strong> {EVENT_DATA.startTime}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Navigation className="w-4 h-4 text-[#E5C365] shrink-0" />
                  <span>
                    <strong className="text-white">Formato:</strong> {EVENT_DATA.format}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href="https://www.google.com/maps/search/Edif%C3%ADcio+Kilamba+Luanda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5C365] hover:text-white transition-colors"
              >
                <span>Abrir rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-slate-400 block mt-2">
                O endereço exacto e as orientações de acesso e estacionamento serão detalhados mais perto da data.
              </span>
            </div>
          </div>

          {/* Interactive Visual Map & Directions Container */}
          <div className="lg:col-span-7 bg-[#0C1733]/70 border border-slate-800 rounded-2xl overflow-hidden relative min-h-[350px] flex flex-col justify-between p-6 sm:p-8">
            {/* Map Canvas Background Design */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070D1E] via-transparent to-[#101D42]/40 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5C365] block mb-2">
                Espaço Integrado
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                Auditório Corporativo — Edifício Kilamba
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
                Localizado num dos centros nevrálgicos de negócios de Luanda, proporcionando comodidade, segurança e acessibilidade para todos os participantes da conferência.
              </p>
            </div>

            {/* Stylized Map Mockup with Coordinates & Pin */}
            <div className="relative z-10 my-6 bg-[#070D1E]/80 border border-slate-700/60 rounded-xl p-6 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#E5C365]/10 border border-[#E5C365]/40 flex items-center justify-center text-[#E5C365] mb-3">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <span className="text-base font-bold text-white block">
                Edifício Kilamba
              </span>
              <span className="text-xs text-slate-400 block">
                Luanda, República de Angola
              </span>
              <span className="text-[11px] font-mono text-[#E5C365]/70 mt-1 block">
                Coordenadas: 8.8383° S, 13.2344° E
              </span>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span>Espaço reservado para integração de mapa GPS e direcções</span>
              <span className="text-slate-300 font-medium">Recepção a partir das 08h30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
