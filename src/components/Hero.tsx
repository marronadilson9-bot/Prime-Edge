import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Ticket, Users, CheckCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/conferenceData';

interface HeroProps {
  onRegisterClick: () => void;
  onTicketsClick: () => void;
  onSpeakersClick: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC<HeroProps> = ({
  onRegisterClick,
  onTicketsClick,
  onSpeakersClick,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATA.dateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_conference_auditorium_1793109016592.jpg"
          alt="Auditório da Conferência Academia Prime Edge"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep luxury navy & dark vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-[#070D1E]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1E]/90 via-[#070D1E]/60 to-[#070D1E]/90" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#070D1E] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Logo Emblem Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-[#F9F7F2] p-1 shadow-2xl shadow-[#D4AF37]/15 mb-5 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src={EVENT_DATA.logoSrc}
            alt="Logotipo Oficial da Academia Prime Edge"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Kicker - Unboxed Clean Editorial */}
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#E5C365] mb-5">
          <span>{EVENT_DATA.organization}</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>1.ª Grande Conferência Anual</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-slate-300">Presencial</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase max-w-5xl [text-wrap:balance]">
          <span className="block text-slate-100">Do Conhecimento</span>
          <span className="bg-gradient-to-r from-[#FFF0C2] via-[#E5C365] to-[#D4AF37] bg-clip-text text-transparent">
            À Ação
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-3xl mb-8 leading-relaxed [text-wrap:balance]">
          “Uma experiência de aprendizagem, conexão e desenvolvimento para quem deseja transformar conhecimento em acção e construir novas possibilidades.”
        </p>

        {/* Key Event Metadata Ribbon - Clean unboxed text with subtle hairlines */}
        <div className="w-full max-w-3xl bg-[#0C1631]/80 backdrop-blur-md border border-[#D4AF37]/25 rounded-2xl p-4 sm:p-5 mb-10 shadow-xl shadow-black/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 text-center">
            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
              <Calendar className="w-5 h-5 text-[#E5C365] shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Data Oficial</span>
                <span className="block text-sm sm:text-base font-bold text-white">5 de Dezembro de 2026</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
              <Clock className="w-5 h-5 text-[#E5C365] shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Início</span>
                <span className="block text-sm sm:text-base font-bold text-white">09h00 (WAT)</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2 sm:pt-0">
              <MapPin className="w-5 h-5 text-[#E5C365] shrink-0" />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-medium">Localização</span>
                <span className="block text-sm sm:text-base font-bold text-white">Edifício Kilamba, Luanda</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Action Buttons requested in Briefing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl mb-12">
          {/* 1. Quero participar */}
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#070D1E] bg-gradient-to-r from-[#F0D58C] via-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-[0.99] rounded-xl shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 group"
          >
            <span>Quero participar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 2. Ver os ingressos */}
          <button
            onClick={onTicketsClick}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#D4AF37]/50 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4 text-[#E5C365]" />
            <span>Ver os ingressos</span>
          </button>

          {/* 3. Conhecer os nossos oradores */}
          <button
            onClick={onSpeakersClick}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>Conhecer os nossos oradores</span>
          </button>
        </div>

        {/* Slogan & Countdown Timer Row */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">{EVENT_DATA.slogan}</span>
          </div>

          {/* Tabular Countdown */}
          <div className="flex items-center gap-3 font-mono tabular-nums text-slate-200">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">Contagem:</span>
            <div className="flex items-center gap-1.5">
              <span className="bg-slate-900/90 border border-slate-800 px-2 py-1 rounded text-white font-bold">{timeLeft.days}d</span>
              <span>:</span>
              <span className="bg-slate-900/90 border border-slate-800 px-2 py-1 rounded text-white font-bold">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span className="bg-slate-900/90 border border-slate-800 px-2 py-1 rounded text-white font-bold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span className="bg-slate-900/90 border border-slate-800 px-2 py-1 rounded text-[#E5C365] font-bold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
