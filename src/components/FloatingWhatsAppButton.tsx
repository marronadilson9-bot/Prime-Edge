import React, { useState } from 'react';
import { MessageCircle, AlertCircle, Check } from 'lucide-react';
import { EVENT_DATA, RegistrationFormData, generateWhatsAppMessage } from '../data/conferenceData';

interface FloatingWhatsAppButtonProps {
  formData: RegistrationFormData;
  isFormValid: boolean;
  onNavigateToForm: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  formData,
  isFormValid,
  onNavigateToForm,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleClick = () => {
    // Check if user has filled anything yet
    const hasName = Boolean(formData.fullName.trim());
    const hasCity = Boolean(formData.cityProvince.trim());
    const hasPhone = Boolean(formData.phoneWhatsApp.trim());

    if (!hasName && !hasCity && !hasPhone) {
      showToast('Por favor, preenche os teus dados no formulário para solicitar a tua vaga.');
      onNavigateToForm();
      const firstInput = document.getElementById('field-fullName');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 400);
      }
      return;
    }

    // If some fields are missing
    if (!hasName || !hasCity || !hasPhone) {
      const missingFields: string[] = [];
      if (!hasName) missingFields.push('Nome completo');
      if (!hasCity) missingFields.push('Cidade/Província');
      if (!hasPhone) missingFields.push('Telefone/WhatsApp');

      showToast(`Faltam preencher os seguintes campos obrigatórios: ${missingFields.join(', ')}.`);
      onNavigateToForm();
      return;
    }

    // Form is completed and valid: prepare WhatsApp message with real form data and open
    const message = generateWhatsAppMessage(formData);
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/244${EVENT_DATA.officialWhatsAppNumber}?text=${encoded}`;

    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      showToast('Não foi possível abrir automaticamente o WhatsApp. Por favor, usa o formulário.');
      onNavigateToForm();
    }
  };

  return (
    <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="mb-2 max-w-xs sm:max-w-sm bg-[#0C1733] text-white border border-[#D4AF37]/60 rounded-xl p-3 shadow-2xl text-xs flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <AlertCircle className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
          <span className="leading-snug">{toastMessage}</span>
        </div>
      )}

      {/* Floating CTA Button with WhatsApp icon and exact text: "Garantir a minha vaga" */}
      <button
        onClick={handleClick}
        className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-extrabold text-xs sm:text-sm tracking-wide rounded-full shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 border border-emerald-400/40 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#070D1E]"
        aria-label="Garantir a minha vaga no WhatsApp"
      >
        {/* WhatsApp Icon */}
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-white fill-white" />
        </div>

        {/* Exact text required */}
        <span className="whitespace-nowrap shrink-0">Garantir a minha vaga</span>

        {/* Small badge showing state */}
        {isFormValid && (
          <span className="w-4 h-4 rounded-full bg-white text-emerald-700 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 stroke-[3]" />
          </span>
        )}
      </button>
    </aside>
  );
};
