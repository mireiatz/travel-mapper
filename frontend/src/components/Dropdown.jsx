import React from 'react';

function Dropdown({ label, options, value, onChange, required = false }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">{label}</label>
            <select
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="">Select {label}</option>
                {options.map(([optionValue, optionLabel]) => (
                    <option key={optionValue} value={optionValue}>
                        {optionLabel}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
