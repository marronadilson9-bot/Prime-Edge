import React from 'react';
import { Clock, Calendar, AlertCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/conferenceData';

export const Schedule: React.FC = () => {
  return (
    <section id="programa" className="py-20 lg:py-28 bg-[#070D1E] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Agenda do Evento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Programa da Conferência
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Consulta o cronograma previsto para o dia 5 de Dezembro de 2026. A programação detalhada de intervenções será atualizada conforme confirmação oficial da organização.
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0C1733]/80 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* Confirmed Item: 09h00 Início */}
            <div className="relative pl-8 pb-8 border-l-2 border-[#D4AF37]">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#D4AF37] ring-4 ring-[#0C1733]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-mono text-base font-bold text-[#E5C365] tracking-tight">
                  09h00
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded w-fit">
                  Horário Confirmado
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Início da conferência
              </h3>
              <p className="text-sm text-slate-300">
                Abertura oficial dos trabalhos, credenciamento dos participantes e introdução ao tema central: “Do Conhecimento à Ação”.
              </p>
            </div>

            {/* Unconfirmed placeholders left explicitly for future updates */}
            <div className="relative pl-8 pb-8 border-l-2 border-slate-700">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-[#0C1733]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-mono text-sm font-semibold text-slate-400 tracking-tight">
                  A confirmar
                </span>
                <span className="text-xs text-slate-400">
                  Em breve
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">
                Painéis & Intervenções dos Oradores
              </h3>
              <p className="text-sm text-slate-400">
                A sequência das apresentações de Atchinguelessy, Aércio Leiland, Armando Zibungana e Venâncio Vicente será divulgada oportunamente.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-transparent">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-slate-700 ring-4 ring-[#0C1733]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-mono text-sm font-semibold text-slate-400 tracking-tight">
                  A confirmar
                </span>
                <span className="text-xs text-slate-400">
                  Encerramento
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-200 mb-1">
                Sessão de Networking & Conclusão
              </h3>
              <p className="text-sm text-slate-400">
                Momento reservado para conexões entre participantes, síntese das aprendizagens e orientações para acção prática.
              </p>
            </div>
          </div>

          {/* Prompt requirement notice */}
          <div className="mt-6 flex items-start gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Aviso da organização:</strong> Apenas o horário de abertura (09h00) está actualmente confirmado. A ordem específica das palestras e momentos do programa não foi divulgada para assegurar máxima fidelidade ao planeamento da Academia Prime Edge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
