import React from 'react';
import { formatDateRange } from '../../utils/date';
import {Link} from "react-router-dom";
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";

function TripItem({ trip, onEdit, onDelete }) {
    return (
        <li className="bg-white p-4 mb-2 rounded-lg shadow flex justify-between items-center">
            <Link to={`/trips/${trip.id}`}>
                <h2 className="text-xl font-bold">{trip.name}</h2>
                <p>{formatDateRange(trip.start_date, trip.end_date)}</p>
            </Link>
            <div className="flex space-x-2">
                <button onClick={() => onEdit(trip)} className="text-blue-500 hover:text-blue-700">
                    <FaPencil className="w-5 h-5" />
                </button>
                <button onClick={() => onDelete(trip.id)} className="text-red-500 hover:text-red-700">
                    <FaTrash className="w-5 h-5" />
                </button>
            </div>
        </li>
    );
}

export default TripItem;
