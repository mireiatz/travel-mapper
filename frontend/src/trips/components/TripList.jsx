import React from 'react';
import TripItem from './TripItem.jsx';
import Spinner from "../../components/Spinner.jsx";
import Alert from "../../components/Alert.jsx";

function TripList({ trips, loading, error, onEdit, onDelete }) {
    if (loading) return <Spinner visible />;
    if (error) return <Alert message={error} />;

    if (!trips || !trips.length) {
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
