import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

function Spinner({ visible = false }) {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                <ArrowPathIcon className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
        </div>
    );
}

export default Spinner;
