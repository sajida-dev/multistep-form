/* components/StepMenu.jsx */
import React from 'react';

const steps = [
    { label: 'YOUR INFO' },
    { label: 'SELECT YOUR PLAN' },
    { label: 'ADD-ONS' },
    { label: 'SUMMARY' }
];

export default function StepMenu({ currentStep }) {
    return (
        <nav aria-label="Progress" className="space-y-6 my-9 mx-5 flex md:flex-col justify-center">
            {steps.map((s, idx) => {
                const stepNum = idx + 1;
                const isActive = currentStep === stepNum;
                return (
                    <div key={idx} className="flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-semibold 
                ${isActive ? 'bg-white text-blue-900 border-white' : 'text-white border-white'}`}
                        >
                            {stepNum}
                        </div>
                        {/* Hide labels on small screens */}
                        <div className="hidden md:block">
                            <p className={`text-xs uppercase ${isActive ? 'text-white' : 'text-blue-200'}`}>Step {stepNum}</p>
                            <h4 className={`text-sm font-medium ${isActive ? 'text-white' : 'text-blue-100'}`}>{s.label}</h4>
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}

