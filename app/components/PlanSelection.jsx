/* components/PlanSelection.jsx */
import React from 'react';
import { CircleDollarSign, CreditCard, Gem } from 'lucide-react';

const planIcons = {
    basic: <CircleDollarSign className="w-12 h-12 mb-2 text-blue-700" />,
    standard: <CreditCard className="w-12 h-12 mb-2 text-blue-700" />,
    premium: <Gem className="w-12 h-12 mb-2 text-blue-700" />,
};

const plans = [
    { key: 'basic', label: 'Arcade', monthly: 9, yearly: 110, img: '/i.png' },
    { key: 'standard', label: 'Advance', monthly: 12, yearly: 220, img: '/i.png' },
    { key: 'premium', label: 'Pro', monthly: 15, yearly: 350, img: '/i.png' },
];

export default function PlanSelection({ data, updateField, nextStep, prevStep }) {
    return (
        <div className="space-y-4 py-6">
            <h2 className="text-2xl font-semibold text-blue-900">Select Your Plan</h2>
            <p className="text-gray-600">You have the option of monthly or yearly billing.</p>
            <div className="flex lg:flex-row md:flex-row flex-col space-x-4 mt-4 space-y-3">
                {plans.map(plan => {
                    const price = data.planType === 'monthly' ? plan.monthly : plan.yearly;
                    const selected = data.planOption === plan.key;
                    return (
                        <div
                            key={plan.key}
                            onClick={() => updateField('planOption', plan.key)}
                            className={`flex-1 border rounded-md p-6 cursor-pointer hover:border-blue-900 transition-all duration-200 
                            ${selected ? 'bg-gray-50 border-blue-900' : 'border-gray-300'}`}
                        >
                            {planIcons[plan.key]}
                            <h4 className="font-semibold text-gray-800">{plan.label}</h4>
                            <p className="text-gray-600">${price}/{data.planType === 'monthly' ? 'mo' : 'yr'}</p>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center  rounded-md py-2 mt-4 bg-gray-100">
                <button
                    onClick={() => updateField('planType', 'monthly')}
                    className={`px-4 ${data.planType === 'monthly' ? 'text-white rounded p-2 mx-2 bg-blue-900' : 'text-gray-700'}`}
                >Monthly</button>
                <div className="flex-1 h-7 relative mx-44 bg-white rounded-full p-0.5">
                    <div
                        className={`w-1/2  h-full bg-blue-900 rounded-full transition-all duration-300 
              ${data.planType === 'yearly' ? 'translate-x-full' : 'translate-x-0'}`}
                    />
                </div>
                <button
                    onClick={() => updateField('planType', 'yearly')}
                    className={`px-4 ${data.planType === 'yearly' ? 'text-white rounded p-2 mx-2 bg-blue-900' : 'text-gray-700'}`}
                >Yearly</button>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="text-gray-700">Go Back</button>
                <button onClick={nextStep} className="bg-blue-900 text-white py-2 px-6 rounded-md">Next Step</button>
            </div>
        </div>
    );
}
