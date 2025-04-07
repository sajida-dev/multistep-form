// /* components/AddOns.jsx */
// import React from 'react';

// const options = [
//     { key: 'onlineService', label: 'Online Service', desc: 'Access to multiplayer games', price: 1 },
//     { key: 'largerStorage', label: 'Larger Storage', desc: 'Extra 1TB of cloud save', price: 2 },
//     { key: 'customProfile', label: 'Customizable Profile', desc: 'Custom theme on your profile', price: 3 },
// ];
// export default function AddOns({ selected, onToggle, onNext, onBack }) {
//     return (
//         <div>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Pick Add-Ons</h3>
//             <div className="space-y-4 mb-6">
//                 {options.map(opt => (
//                     <label key={opt.key} className="flex items-center border p-4 rounded-md">
//                         <input
//                             type="checkbox"
//                             checked={selected.includes(opt.key)}
//                             onChange={() => onToggle(opt.key)}
//                             className="mr-4"
//                         />
//                         <div className="flex-1">
//                             <p className="font-semibold">{opt.label}</p>
//                             <p className="text-sm text-gray-600">{opt.desc}</p>
//                         </div>
//                         <span className="text-blue-600 font-medium">+${opt.price}/mo</span>
//                     </label>
//                 ))}
//             </div>
//             <div className="flex justify-between">
//                 <button onClick={onBack} className="bg-gray-600 text-white py-2 px-4 rounded-md">Back</button>
//                 <button onClick={onNext} className="bg-blue-600 text-white py-2 px-4 rounded-md">Next</button>
//             </div>
//         </div>
//     );
// }




/* components/AddOns.jsx */
import React from 'react';

const addonsList = [
    { key: 'onlineService', label: 'Online Service', desc: 'Access to multiplayer games', price: 1 },
    { key: 'largerStorage', label: 'Larger Storage', desc: 'Extra 1TB of cloud save', price: 2 },
    { key: 'customProfile', label: 'Customizable Profile', desc: 'Custom theme on your profile', price: 3 },
];

export default function AddOns({ data, toggleAddon, nextStep, prevStep }) {
    return (
        <div className="space-y-4 py-6">
            <h2 className="text-2xl font-semibold text-blue-900">Pick Add-Ons</h2>
            <p className="text-gray-600">Add-ons help enhance your experience.</p>
            <div className="space-y-3 mt-4">
                {addonsList.map(add => {
                    const selected = data.addons.includes(add.key);
                    return (
                        <label
                            key={add.key}
                            className={`flex items-center border rounded-md p-4 cursor-pointer 
                ${selected ? 'bg-blue-50 border-blue-900' : 'border-gray-300'}`}
                        >
                            <input
                                type="checkbox"
                                checked={selected}
                                onChange={() => toggleAddon(add.key)}
                                className="mr-4"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">{add.label}</h4>
                                <p className="text-gray-600 text-sm">{add.desc}</p>
                            </div>
                            <span className="text-blue-600 font-medium">+${add.price}/mo</span>
                        </label>
                    );
                })}
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="text-gray-700">Go Back</button>
                <button onClick={nextStep} className="bg-blue-900 text-white py-2 px-6 rounded-md">Next Step</button>
            </div>
        </div>
    );
}
