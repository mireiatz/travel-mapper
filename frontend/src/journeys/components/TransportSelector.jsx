import React from 'react';
import { TRANSPORT_TYPES } from '../../data/transportTypes.js';

function TransportSelector({ value, onChange }) {
    return (
        <div className="flex flex-wrap gap-4 mb-4">
            {Object.entries(TRANSPORT_TYPES).map(([key, { label, icon: Icon }]) => (
                <button
                    key={key}
                    className={`p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 ${
                        value === key ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => onChange(key)}
                >
                    <Icon className="w-8 h-8" />
                    <span className="text-sm">{label}</span>
                </button>
            ))}
        </div>
    );
}

export default TransportSelector;