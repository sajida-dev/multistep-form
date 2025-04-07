// /* components/Summary.jsx */
// import React from 'react';

// export default function Summary({ data, onBack, onConfirm }) {
//     const total =
//         (data.plan.option ? (data.plan.type === 'monthly' ? 10 : 100) : 0) +
//         data.addons.reduce((sum, key) => {
//             if (key === 'onlineService') return sum + 1;
//             if (key === 'largerStorage') return sum + 2;
//             if (key === 'customProfile') return sum + 3;
//             return sum;
//         }, 0);

//     return (
//         <div>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Finishing Up</h3>
//             <div className="bg-gray-50 p-4 rounded-md mb-6">
//                 <p><strong>Name:</strong> {data.name}</p>
//                 <p><strong>Email:</strong> {data.email}</p>
//                 <p><strong>Phone:</strong> {data.phone}</p>
//                 <p><strong>Plan:</strong> {data.plan.type} {data.plan.option}</p>
//                 <p><strong>Add-Ons:</strong> {data.addons.join(', ') || 'None'}</p>
//                 <p className="mt-2"><strong>Total:</strong> ${total}/mo</p>
//             </div>
//             <div className="flex justify-between">
//                 <button onClick={onBack} className="bg-gray-600 text-white py-2 px-4 rounded-md">Back</button>
//                 <button onClick={onConfirm} className="bg-green-600 text-white py-2 px-4 rounded-md">Confirm</button>
//             </div>
//         </div>
//     )
// }




/* components/Summary.jsx */
import React from 'react';
import { addonsList } from './data';

export default function Summary({ data, prevStep }) {
    const plan = data.planType === 'monthly'
        ? { label: data.planOption, price: data.planOption === 'arcade' ? 9 : data.planOption === 'advance' ? 12 : 15 }
        : { label: data.planOption, price: data.planOption === 'arcade' ? 110 : data.planOption === 'advance' ? 220 : 350 };

    const addonsTotal = data.addons.reduce((sum, key) => {
        if (key === 'onlineService') return sum + 1;
        if (key === 'largerStorage') return sum + 2;
        if (key === 'customProfile') return sum + 3;
        return sum;
    }, 0);

    const total = plan.price + addonsTotal;

    return (
        <div className="space-y-4 py-6">
            <h2 className="text-2xl font-semibold text-blue-900">Finishing Up</h2>
            <p className="text-gray-600">Double-check everything looks OK before confirming.</p>
            <div className="bg-gray-50 rounded-md p-4 mt-4">
                <div className="flex justify-between text-gray-700">
                    <div>
                        <p className="font-semibold ">{plan.label} ({data.planType.charAt(0).toUpperCase() + data.planType.slice(1)})</p>
                        <p className="text-blue-600 cursor-pointer underline text-sm" onClick={prevStep}>Change</p>
                    </div>
                    <p className="font-semibold">${plan.price}/{data.planType === 'monthly' ? 'mo' : 'yr'}</p>
                </div>
                <hr className="my-4 border-gray-300" />
                {data.addons.map(key => {
                    const add = addonsList.find(a => a.key === key);
                    return (
                        <div key={key} className="flex justify-between text-gray-600 text-sm mb-2">
                            <span>{add.label}</span>
                            <span>+${add.price}/mo</span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-between items-center mt-6">
                <p className="text-gray-600">Total (per month)</p>
                <p className="text-blue-900 font-bold text-xl">${total}/mo</p>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="text-gray-700">Go Back</button>
                <button onClick={() => alert('Confirmed!')} className="bg-green-600 text-white py-2 px-6 rounded-md">Confirm</button>
            </div>
        </div>
    );
}
