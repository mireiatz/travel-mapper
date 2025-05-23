import React from 'react';
import Button from './Button';
import Alert from './Alert.jsx';
import Spinner from "./Spinner.jsx";
import {FaX} from "react-icons/fa6";

function Modal({
    isOpen,
    title,
    children,
    onClose,
    footerButtonText = 'OK',
    onFooterButtonClick,
    error,
    loading,
    maxWidth = 'max-w-md',
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className={`bg-white rounded-lg overflow-hidden shadow-lg w-full ${maxWidth} mx-4`}>
                <Spinner visible={loading} />
                <header className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <FaX className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                    </button>
                </header>
                <div className="p-4">
                    <Alert message={error} />
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
