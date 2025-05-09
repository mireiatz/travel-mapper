import React from 'react';

function Input({ label, value, onChange, type = 'text', required = false }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
}

export default Input;
