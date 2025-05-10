import React from 'react';
import { formatDate } from '../../utils/date';
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";

function JourneyItem({ journey, onEdit, onDelete }) {
    return (
        <li className="bg-white p-4 mb-2 rounded-lg shadow flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold">{journey.from_location} ➔ {journey.to_location}</h3>
                <p>{journey.date ? formatDate(journey.date) : 'No date specified'}</p>
                <p>{journey.transport || 'No transport specified'}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
                    <FaPencil className="w-5 h-5" />
                </button>
                <button onClick={onDelete} className="text-red-500 hover:text-red-700">
                    <FaTrash className="w-5 h-5" />
                </button>
            </div>
        </li>
    );
}

export default JourneyItem;
