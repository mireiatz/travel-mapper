import React from 'react';
import Button from './Button';
import ValidationAlert from './ValidationAlert';

function Modal({
    isOpen,
    title,
    children,
    onClose,
    footerButtonText = 'OK',
    onFooterButtonClick,
    errorMessage
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-4">
                <header className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        ✕
                    </button>
                </header>
                <div className="p-4">
                    {errorMessage && <ValidationAlert message={errorMessage} onClose={onClose} />}
                    {children}
                </div>
                <footer className="flex justify-end p-4 border-t border-gray-200">
                    {onFooterButtonClick && (
                        <Button
                            label={footerButtonText}
                            onClick={onFooterButtonClick}
                            variant="primary"
                        />
                    )}
                </footer>
            </div>
        </div>
    );
}

export default Modal;
