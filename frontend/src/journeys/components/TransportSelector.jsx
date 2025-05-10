import React from 'react';
import { TRANSPORT_TYPES } from '../../data/transportTypes.js';

function TransportSelector({ value, onChange }) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mb-4 w-full">
            {Object.entries(TRANSPORT_TYPES).map(([key, { icon: Icon }]) => (
                <button
                    key={key}
                    className={`p-2 rounded-lg shadow-md flex items-center justify-center w-12 h-12 transition-colors ${
                        value === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => onChange(key)}
                >
                    <Icon className="w-6 h-6" />
                </button>
            ))}
        </div>
    );
}

export default TransportSelector;