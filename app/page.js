'use client'
import Head from 'next/head';
import React, { useState } from 'react';
import StepMenu from './components/StepMenu';
import PersonalInfo from './components/PersonalInfo';
import PlanSelection from './components/PlanSelection';
import AddOns from './components/AddOns';
import Summary from './components/Summary';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    planType: 'monthly', planOption: '',
    addons: []
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const updateField = (field, value) => setFormData({ ...formData, [field]: value });
  const toggleAddon = (addon) => {
    setFormData({
      ...formData,
      addons: formData.addons.includes(addon)
        ? formData.addons.filter(a => a !== addon)
        : [...formData.addons, addon]
    });
  };

  return (
    <>
      <Head>
        <title>Multi-Step Sign Up</title>
        <meta name="description" content="Complete the sign-up in four steps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen  bg-gray-100 flex items-center justify-center p-0.5 md:p-6 text-sm lg:p-6">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden m-4">
          <aside
            className="md:w-1/3 w-full p-6"
            style={{ backgroundImage: 'linear-gradient(rgb(5, 72, 160), rgba(54, 61, 157, 0.803), rgba(138, 146, 212, 0.864), rgba(133, 196, 221, 0.88))' }}
          >
            <StepMenu currentStep={step} />
          </aside>
          <main className="md:w-2/3 w-full p-6">
            {step === 1 && (
              <PersonalInfo
                data={formData}
                updateField={updateField}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <PlanSelection
                data={formData}
                updateField={updateField}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <AddOns
                data={formData}
                toggleAddon={toggleAddon}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 4 && (
              <Summary
                data={formData}
                prevStep={prevStep}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
