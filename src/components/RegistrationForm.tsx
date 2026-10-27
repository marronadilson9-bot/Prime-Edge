import React, { useState, useEffect } from 'react';
import {
  Ticket,
  User,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Plus,
  Minus,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Copy,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import {
  EVENT_DATA,
  TICKET_PACKAGES,
  RegistrationFormData,
  formatKwanzas,
  generateWhatsAppMessage,
} from '../data/conferenceData';

interface RegistrationFormProps {
  formData: RegistrationFormData;
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
  onValidationChange?: (isValid: boolean) => void;
}

const COUNTRY_CODES = [
  { code: '+244', label: 'Angola (+244)' },
  { code: '+351', label: 'Portugal (+351)' },
  { code: '+55', label: 'Brasil (+55)' },
  { code: '+258', label: 'Moçambique (+258)' },
  { code: '+238', label: 'Cabo Verde (+238)' },
  { code: '+239', label: 'São Tomé e Príncipe (+239)' },
  { code: '+245', label: 'Guiné-Bissau (+245)' },
  { code: '+1', label: 'EUA / Canadá (+1)' },
  { code: '+44', label: 'Reino Unido (+44)' },
];

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  setFormData,
  onValidationChange,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState('');

  // Selected package details
  const selectedPkg =
    TICKET_PACKAGES.find((p) => p.id === formData.selectedPackageId) || TICKET_PACKAGES[0];
  const totalPrice = selectedPkg.price * Math.max(1, formData.quantity);

  // Validation function
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, insere o teu nome completo.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'O nome completo deve ter pelo menos 3 caracteres.';
    }

    if (!formData.cityProvince.trim()) {
      newErrors.cityProvince = 'Por favor, indica a tua cidade ou província (ex: Luanda).';
    }

    if (!formData.phoneWhatsApp.trim()) {
      newErrors.phoneWhatsApp = 'Por favor, insere o teu número de telefone/WhatsApp.';
    } else if (formData.phoneWhatsApp.replace(/\D/g, '').length < 6) {
      newErrors.phoneWhatsApp = 'Por favor, insere um número de telefone válido.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Insere um endereço de e-mail válido ou deixa o campo em branco.';
      }
    }

    if (formData.quantity < 1) {
      newErrors.quantity = 'A quantidade mínima de ingressos é 1.';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    if (onValidationChange) {
      onValidationChange(isValid);
    }
    return isValid;
  };

  // Sync validation status
  useEffect(() => {
    const isBasicValid =
      Boolean(formData.fullName.trim()) &&
      Boolean(formData.cityProvince.trim()) &&
      Boolean(formData.phoneWhatsApp.trim()) &&
      formData.quantity >= 1;
    if (onValidationChange) {
      onValidationChange(isBasicValid);
    }
  }, [formData, onValidationChange]);

  const handleInputChange = (field: keyof RegistrationFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleQuantityChange = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      quantity: Math.max(1, Math.min(20, prev.quantity + delta)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(`field-${firstError}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    const message = generateWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/244${EVENT_DATA.officialWhatsAppNumber}?text=${encodedMessage}`;
    setPreparedUrl(whatsappUrl);

    try {
      // Direct redirection to official WhatsApp
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      // Show fallback option if browser pop-up was blocked or user is on desktop without WhatsApp app
      setShowFallbackModal(true);
    } catch {
      setShowFallbackModal(true);
    }
  };

  const copyMessageToClipboard = async () => {
    const message = generateWhatsAppMessage(formData);
    try {
      await navigator.clipboard.writeText(message);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <section id="inscricao" className="py-20 lg:py-28 bg-[#070D1E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E5C365] uppercase mb-3">
            <span>Inscrição Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase [text-wrap:balance]">
            Garante a Tua Vaga
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            “Preenche os teus dados, escolhe o teu ingresso e dá o próximo passo para fazer parte da 1.ª Conferência da Academia Prime Edge.”
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Real-Time Summary & Notice on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Form Fields */}
          <div className="lg:col-span-7 bg-[#0C1733]/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* 1. Nome completo (obrigatório) */}
              <div>
                <label
                  htmlFor="field-fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                >
                  Nome completo <span className="text-[#E5C365]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="field-fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Ex.: Francisco Manuel dos Santos"
                    className={`w-full pl-10 pr-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* 2. Cidade ou província (obrigatório) */}
              <div>
                <label
                  htmlFor="field-cityProvince"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                >
                  Cidade ou Província <span className="text-[#E5C365]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="field-cityProvince"
                    value={formData.cityProvince}
                    onChange={(e) => handleInputChange('cityProvince', e.target.value)}
                    placeholder="Ex.: Luanda, Benguela, Huíla..."
                    className={`w-full pl-10 pr-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border focus:outline-none transition-colors ${
                      errors.cityProvince
                        ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
                    }`}
                  />
                </div>
                {errors.cityProvince && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.cityProvince}</span>
                  </p>
                )}
              </div>

              {/* 3. Número de telefone/WhatsApp (obrigatório, with country code) */}
              <div>
                <label
                  htmlFor="field-phoneWhatsApp"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                >
                  Número de Telefone / WhatsApp <span className="text-[#E5C365]">*</span>
                </label>
                <div className="flex gap-2.5">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange('countryCode', e.target.value)}
                    className="bg-[#070D1E] text-white text-xs border border-slate-800 rounded-xl px-2.5 py-3 focus:outline-none focus:border-[#D4AF37] shrink-0"
                    aria-label="Indicativo de país"
                  >
                    {COUNTRY_CODES.map((item) => (
                      <option key={item.code} value={item.code} className="bg-[#070D1E] text-white">
                        {item.code} ({item.label.split(' ')[0]})
                      </option>
                    ))}
                  </select>

                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="field-phoneWhatsApp"
                      value={formData.phoneWhatsApp}
                      onChange={(e) => handleInputChange('phoneWhatsApp', e.target.value)}
                      placeholder="Ex.: 923 000 000"
                      className={`w-full pl-10 pr-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border focus:outline-none transition-colors ${
                        errors.phoneWhatsApp
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
                      }`}
                    />
                  </div>
                </div>
                {errors.phoneWhatsApp && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneWhatsApp}</span>
                  </p>
                )}
              </div>

              {/* 4. Endereço de e-mail (opcional) & 5. Área profissional (opcional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="field-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                  >
                    E-mail <span className="text-slate-400 font-normal text-[10px]">(Opcional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="field-email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="exemplo@dominio.ao"
                      className={`w-full pl-10 pr-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="field-occupation"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                  >
                    Área Profissional / Ocupação <span className="text-slate-400 font-normal text-[10px]">(Opcional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="field-occupation"
                      value={formData.occupation}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      placeholder="Ex.: Gestor / Engenheiro / Estudante"
                      className="w-full pl-10 pr-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* 6. Pacote escolhido (obrigatório) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2.5">
                  Pacote Escolhido <span className="text-[#E5C365]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TICKET_PACKAGES.map((pkg) => {
                    const isSelected = formData.selectedPackageId === pkg.id;
                    return (
                      <button
                        type="button"
                        key={pkg.id}
                        onClick={() => handleInputChange('selectedPackageId', pkg.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-[#12224A] border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-md shadow-[#D4AF37]/10'
                            : 'bg-[#070D1E] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-sm text-white">{pkg.name}</span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? 'border-[#D4AF37] bg-[#D4AF37]'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#070D1E]" />}
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#E5C365] block">
                          {pkg.priceFormatted}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 7. Quantidade de ingressos (obrigatório, valor inicial 1) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
                  Quantidade de Ingressos <span className="text-[#E5C365]">*</span>
                </label>
                <div className="flex items-center gap-4 bg-[#070D1E] border border-slate-800 rounded-xl p-2 w-fit">
                  <button
                    type="button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={formData.quantity <= 1}
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="font-mono text-base font-extrabold text-white w-8 text-center tabular-nums">
                    {formData.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleQuantityChange(1)}
                    disabled={formData.quantity >= 20}
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 8. Observações (opcional) */}
              <div>
                <label
                  htmlFor="field-notes"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-200 mb-2"
                >
                  Observações <span className="text-slate-400 font-normal text-[10px]">(Opcional)</span>
                </label>
                <textarea
                  id="field-notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Informações adicionais, necessidades de acessibilidade ou nota para a organização..."
                  className="w-full px-4 py-3 bg-[#070D1E] text-white rounded-xl text-sm border border-slate-800 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button (Exact text: "Garantir a minha vaga") */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-extrabold uppercase tracking-wider text-[#070D1E] bg-gradient-to-r from-[#F0D58C] via-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-[0.99] rounded-xl shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Garantir a minha vaga</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  Ao clicar, será aberta uma mensagem no WhatsApp oficial da Academia Prime Edge para processamento do teu pedido.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Live Registration Summary & Integrity Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real-time Order Summary Card */}
            <div className="bg-[#0C1733]/90 border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-[#F9F7F2] p-0.5 border border-[#D4AF37]/50 shrink-0 flex items-center justify-center">
                    <img
                      src={EVENT_DATA.logoSrc}
                      alt="Academia Prime Edge"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Resumo da Inscrição
                  </h3>
                </div>
                <span className="text-[11px] text-[#E5C365] font-semibold bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                  Cálculo Automático
                </span>
              </div>

              {/* Participant info preview */}
              <div className="py-4 border-b border-slate-800/80 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Nome:</span>
                  <span className="text-white font-medium text-right truncate max-w-[200px]">
                    {formData.fullName.trim() || '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cidade/Província:</span>
                  <span className="text-white font-medium text-right">
                    {formData.cityProvince.trim() || '—'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Telefone:</span>
                  <span className="text-white font-medium text-right">
                    {formData.phoneWhatsApp.trim()
                      ? `${formData.countryCode} ${formData.phoneWhatsApp}`
                      : '—'}
                  </span>
                </div>
                {formData.email.trim() && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">E-mail:</span>
                    <span className="text-white font-medium text-right truncate max-w-[200px]">
                      {formData.email.trim()}
                    </span>
                  </div>
                )}
                {formData.occupation.trim() && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Área profissional:</span>
                    <span className="text-white font-medium text-right truncate max-w-[200px]">
                      {formData.occupation.trim()}
                    </span>
                  </div>
                )}
              </div>

              {/* Package and Calculation */}
              <div className="py-4 border-b border-slate-800/80 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Pacote seleccionado:</span>
                  <span className="text-white font-bold text-sm bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                    {selectedPkg.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Preço unitário:</span>
                  <span className="text-slate-200 font-mono font-medium">
                    {formatKwanzas(selectedPkg.price)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Quantidade:</span>
                  <span className="text-slate-200 font-mono font-medium">
                    {formData.quantity} {formData.quantity === 1 ? 'ingresso' : 'ingressos'}
                  </span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="pt-4 flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                    Valor Total
                  </span>
                  <span className="text-[10px] text-slate-400">
                    ({selectedPkg.priceFormatted} × {formData.quantity})
                  </span>
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#E5C365] font-mono tabular-nums tracking-tight">
                  {formatKwanzas(totalPrice)}
                </span>
              </div>
            </div>

            {/* Official Confirmation & Payment Clarification (Section 12 of Briefing) */}
            <div className="bg-[#091124] border border-slate-800 rounded-2xl p-6 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-[#E5C365] font-bold uppercase tracking-wider text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>Processo de Inscrição e Pagamento</span>
              </div>
              <p className="leading-relaxed text-slate-300">
                O preenchimento deste formulário e o envio da mensagem de WhatsApp constituem um <strong className="text-white">pedido formal de inscrição</strong>.
              </p>
              <div className="space-y-2 pt-1 border-t border-slate-800/80">
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-bold text-slate-300 shrink-0">1</span>
                  <span>Envias os teus dados pelo WhatsApp oficial da Academia (+244 955 217 354).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-bold text-slate-300 shrink-0">2</span>
                  <span>A equipa da Academia Prime Edge confirma a disponibilidade de vagas e partilha os dados oficiais para liquidação.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-bold text-slate-300 shrink-0">3</span>
                  <span>Após validação pela organização, a tua vaga fica oficialmente assegurada com a entrega da credencial.</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 italic pt-1">
                Não existem pagamentos automáticos no website nem emissão de credenciais sem confirmação prévia da instituição.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fallback / Success Modal if Popup is Blocked or for easy copy */}
      {showFallbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#0C1733] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Pedido Preparado com Sucesso!</h3>
                <p className="text-xs text-slate-400">Ligação oficial da Academia Prime Edge</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
              A tua mensagem com os dados foi devidamente gerada. Se a janela do WhatsApp não tiver aberto automaticamente, clica no botão abaixo para abrir a conversa ou copia o texto completo.
            </p>

            <div className="bg-[#070D1E] border border-slate-800 rounded-xl p-3.5 mb-5 max-h-48 overflow-y-auto font-mono text-[11px] text-slate-300 whitespace-pre-wrap">
              {generateWhatsAppMessage(formData)}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyMessageToClipboard}
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>{copiedSuccess ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowFallbackModal(false)}
                className="py-3 px-4 bg-transparent hover:bg-white/5 border border-slate-700 text-slate-300 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
