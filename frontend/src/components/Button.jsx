import React from 'react';

function Button({
    label,
    onClick,
    type = 'button',
    className = '',
    variant = 'primary',
    disabled = false,
    icon: Icon = null,
}) {
    const baseClasses = `font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 flex items-center justify-center space-x-2`;

    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
        danger: 'bg-red-500 hover:bg-red-700 text-white',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    };

    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
        >
            {Icon && <Icon className="w-5 h-5" />}
            <span>{label}</span>
        </button>
    );
}

export default Button;
