import React from 'react';

function Alert({ message, variant = 'error' }) {
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
        </div>
    );
}

export default Alert;
