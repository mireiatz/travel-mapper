import React from 'react';

function ValidationAlert({ message, variant = 'error', onClose }) {
    const variantStyles = {
        error: 'bg-red-100 text-red-700 border-red-400',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-400',
        success: 'bg-green-100 text-green-700 border-green-400',
        info: 'bg-blue-100 text-blue-700 border-blue-400',
    };

    if (!message) return null;

    return (
        <div className={`border-l-4 p-4 mb-4 rounded ${variantStyles[variant]} relative`}>
            <span>{message}</span>
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 px-3 py-1 text-xl text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>
            )}
        </div>
    );
}

export default ValidationAlert;
