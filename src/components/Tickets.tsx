import React from 'react';
import { Check, Ticket, Sparkles, ArrowRight, Info } from 'lucide-react';
import { TICKET_PACKAGES, TicketPackage } from '../data/conferenceData';

interface TicketsProps {
  selectedPackage: 'normal' | 'vip' | 'premium';
  onSelectPackage: (packageId: 'normal' | 'vip' | 'premium') => void;
}

export const Tickets: React.FC<TicketsProps> = ({
  selectedPackage,
  onSelectPackage,
}) => {
  const handleChoose = (id: 'normal' | 'vip' | 'premium') => {
    onSelectPackage(id);
    const formElement = document.querySelector('#inscricao');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ingressos" className="py-20 lg:py-28 bg-[#070D1E] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Valores de Lançamento · Promoção Especial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Ingressos e Categorias
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Escolhe a categoria adequada para ti e envia o teu pedido de inscrição. Ao seleccionar um ingresso, o formulário é preenchido de forma imediata.
          </p>

          {/* Prominent Promotional Notice */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37]/15 via-[#E5C365]/20 to-[#D4AF37]/15 border border-[#D4AF37]/50 text-slate-100 text-xs sm:text-sm font-semibold shadow-lg shadow-[#D4AF37]/5">
            <Sparkles className="w-4 h-4 text-[#E5C365] shrink-0" />
            <span>
              <strong className="text-[#E5C365] font-bold">Valores de Lançamento:</strong> Estes preços estão em promoção e só temos <strong>25 vagas</strong> para esse preço!
            </span>
          </div>
        </div>

        {/* 3 Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 items-stretch">
          {TICKET_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            const isVip = pkg.id === 'vip';
            const isPremium = pkg.id === 'premium';

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 lg:p-8 transition-all duration-300 ${
                  isVip
                    ? 'bg-gradient-to-b from-[#101D42] to-[#0A122A] border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 lg:-translate-y-2'
                    : 'bg-[#0B142D]/80 border border-slate-800 hover:border-[#D4AF37]/40 shadow-lg'
                }`}
              >
                {/* VIP badge or quiet label */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#070D1E] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Ingresso Oficial
                    </span>
                    <Ticket className={`w-5 h-5 ${isVip || isPremium ? 'text-[#E5C365]' : 'text-slate-400'}`} />
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                    {pkg.name}
                  </h3>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                        {pkg.priceFormatted}
                      </span>
                    </div>
                    <span className="text-xs text-[#E5C365] font-semibold mt-1 block">
                      Em promoção · Restam 25 vagas para este preço
                    </span>
                  </div>

                  {/* Package Benefits List */}
                  <div className="py-5 border-t border-b border-slate-800/80 mb-6 text-xs text-slate-300">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
                      Benefícios Incluídos:
                    </span>

                    {pkg.includesPrefix && (
                      <div className="mb-3 pb-2.5 border-b border-slate-800/60">
                        <span className="text-[11px] font-semibold text-[#E5C365] block leading-tight">
                          {pkg.includesPrefix}
                        </span>
                      </div>
                    )}

                    <ul className="space-y-2.5">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                          <span className="leading-snug text-slate-200 font-medium">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>5 Dez 2026 · 09h00</span>
                      <span>Edifício Kilamba</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleChoose(pkg.id)}
                    className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-[#E5C365] text-[#070D1E] shadow-md ring-2 ring-[#E5C365]'
                        : isVip
                        ? 'bg-gradient-to-r from-[#F0D58C] via-[#D4AF37] to-[#C59B27] text-[#070D1E] hover:brightness-110 shadow-md'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <span>
                      {isSelected ? `Seleccionado: ${pkg.name}` : `Escolher ${pkg.name}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Notice on specific perks (Strict requirement from prompt) */}
        <div className="max-w-3xl mx-auto bg-[#0C1733]/60 border border-slate-800 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-slate-400">
          <Info className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Benefícios Oficiais Confirmados:</strong> Todos os pacotes incluem certificação oficial e materiais pedagógicos. Os preços indicados correspondem ao lote de lançamento em promoção, restrito a apenas 25 vagas para este preço especial. Garante a tua inscrição para assegurar a tua vaga com estas condições.
          </p>
        </div>
      </div>
    </section>
  );
};
