import React from 'react';
import JourneyItem from './JourneyItem';
import Spinner from "../../components/Spinner.jsx";
import Alert from "../../components/Alert.jsx";

function JourneyList({ journeys, loading, error, onEdit, onDelete }) {
    if (loading) return <Spinner visible />;
    if (error) return <Alert message={error} />;

    if (!journeys || !journeys.length) {
        return <p>No journeys found.</p>;
    }

    return (
        <ul>
            {journeys.map(journey => (
                <JourneyItem
                    key={journey.id}
                    journey={journey}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default JourneyList;
