import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAttend } from './components/WhyAttend';
import { Tickets } from './components/Tickets';
import { Speakers } from './components/Speakers';
import { Schedule } from './components/Schedule';
import { About } from './components/About';
import { RegistrationForm } from './components/RegistrationForm';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { RegistrationFormData } from './data/conferenceData';

export default function App() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    cityProvince: '',
    countryCode: '+244',
    phoneWhatsApp: '',
    email: '',
    occupation: '',
    selectedPackageId: 'vip', // default pre-selected popular option, easy to change
    quantity: 1,
    notes: '',
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const scrollToRegistration = () => {
    const el = document.getElementById('inscricao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTickets = () => {
    const el = document.getElementById('ingressos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSpeakers = () => {
    const el = document.getElementById('oradores');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageId: 'normal' | 'vip' | 'premium') => {
    setFormData((prev) => ({ ...prev, selectedPackageId: packageId }));
  };

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar onRegisterClick={scrollToRegistration} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 4: Hero */}
        <div id="evento">
          <Hero
            onRegisterClick={scrollToRegistration}
            onTicketsClick={scrollToTickets}
            onSpeakersClick={scrollToSpeakers}
          />
        </div>

        {/* Section 5: Why Attend & Audience */}
        <WhyAttend />

        {/* Section 6: Tickets & Pricing */}
        <Tickets
          selectedPackage={formData.selectedPackageId}
          onSelectPackage={handleSelectPackage}
        />

        {/* Section 7: Confirmed Speakers */}
        <Speakers />

        {/* Section 8: Conference Schedule */}
        <Schedule />

        {/* Section 9: About Academia Prime Edge */}
        <About />

        {/* Section 10 & 11: Registration Form with WhatsApp integration */}
        <RegistrationForm
          formData={formData}
          setFormData={setFormData}
          onValidationChange={setIsFormValid}
        />



        {/* Section 14: Location */}
        <LocationSection />

        {/* Section 13: FAQ */}
        <FaqSection />
      </main>

      {/* Section 15: Contacts, Social Networks & Footer */}
      <Footer />

      {/* Floating WhatsApp CTA Button (Exact label: "Garantir a minha vaga") */}
      <FloatingWhatsAppButton
        formData={formData}
        isFormValid={isFormValid}
        onNavigateToForm={scrollToRegistration}
      />
    </div>
  );
}
