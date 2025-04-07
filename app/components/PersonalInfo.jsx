'use client'
import React, { useState } from 'react';

export default function PersonalInfo({ data, updateField, nextStep }) {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errs = {};
        if (!data.name) errs.name = 'Name is required';
        if (!data.email.includes('@')) errs.email = 'Valid email required';
        if (data.phone.length !== 11) errs.phone = 'Phone must be 11 digits';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleNext = () => {
        if (validate()) nextStep();
    };

    return (
        <div className="space-y-6 lg:mx-5 lg:py-5">
            <h2 className="text-2xl font-semibold text-blue-900">Personal Info</h2>
            <p className="text-gray-600">Please provide your name, email, and phone number.</p>
            <div className="space-y-4 mx-0.5 lg:mx-10">
                {['name', 'email', 'phone'].map((field, idx) => {
                    const type = field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text';
                    const placeholder = field === 'name'
                        ? 'e.g. Sultan Ahmad'
                        : field === 'email'
                            ? 'e.g. example@gmail.com'
                            : 'e.g. +92 300 7784807';
                    const label = field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Phone Number';
                    return (
                        <div key={idx} >
                            <label className="block text-gray-700">{label} <span className="text-red-500">*</span></label>
                            <input
                                type={type}
                                value={data[field]}
                                onChange={e => updateField(field, e.target.value)}
                                className={`w-full text-black border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder={placeholder}
                            />
                            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                        </div>
                    );
                })}
            </div>
            <button
                onClick={handleNext}
                className="mt-6 bg-blue-900 text-right text-white py-2 px-6 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >Next Step</button>
        </div>
    );
}
