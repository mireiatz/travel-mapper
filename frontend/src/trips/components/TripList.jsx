import React from 'react';
import TripItem from "./TripItem.jsx";

function TripList({ trips }) {
    if (!trips.length) {
        return <p>No trips found.</p>;
    }

    return (
        <ul>
            {trips.map((trip) => (
                <TripItem key={trip.id} trip={trip} />
            ))}
        </ul>
    );
}

export default TripList;
