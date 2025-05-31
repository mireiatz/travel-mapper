import React from 'react';
import {formatDateRange} from '../../utils/date';
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
import {TRANSPORT_TYPES} from "../../data/transportTypes.js";

function JourneyItem({ journey, onEdit, onDelete }) {
    const TransportIcon = TRANSPORT_TYPES[journey.transport_type]?.icon || TRANSPORT_TYPES.other.icon;

    return (
        <li className="bg-white p-4 mb-2 rounded-lg shadow flex justify-between items-center">
            <div>
                <div className="flex">
                    <TransportIcon className="w-6 h-6 mr-2 text-gray-500" />
                    <h3 className="text-lg font-bold">{journey.from_location.name} ➔ {journey.to_location.name}</h3>
                 </div>
                <p>{formatDateRange(journey.start_date, journey.end_date)}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={() => onEdit(journey)} className="text-blue-500 hover:text-blue-700">
                    <FaPencil className="w-5 h-5" />
                </button>
                <button onClick={() => onDelete(journey.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash className="w-5 h-5" />
                </button>
            </div>
        </li>
    );
}

export default JourneyItem;
