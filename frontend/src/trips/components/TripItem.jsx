import React from 'react';
import { formatDateRange } from '../../utils/date';

function TripItem({ trip }) {
    return (
        <li className="bg-white p-4 mb-2 rounded-lg shadow">
            <h2 className="text-xl font-bold">{trip.name}</h2>
            <p>{formatDateRange(trip.start_date, trip.end_date)}</p>
        </li>
    );
}

export default TripItem;
