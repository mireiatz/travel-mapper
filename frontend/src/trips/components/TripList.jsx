import React from 'react';
import TripItem from './TripItem.jsx';

function TripList({ trips, onEdit, onDelete }) {
    if (!trips.length) {
        return <p>No trips found.</p>;
    }

    return (
        <ul>
            {trips.map((trip) => (
                <TripItem
                    key={trip.id}
                    trip={trip}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TripList;
