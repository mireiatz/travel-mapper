import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchTripById } from '../../api/trips';
import { formatDateRange } from '../../utils/date';

function TripDetailsPage() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadTrip = async () => {
            try {
                const data = await fetchTripById(tripId);
                setTrip(data);
            } catch (err) {
                setError('Failed to load trip details.');
            } finally {
                setLoading(false);
            }
        };

        loadTrip();
    }, [tripId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold text-blue-600">{trip.name}</h1>
                <Link to="/trips" className="text-blue-600">Back</Link>
            </div>
            <p className="text-gray-700 mb-4">
                {trip.start_date || trip.end_date ? formatDateRange(trip.start_date, trip.end_date) : 'No date specified'}
            </p>
            <hr className="mb-4" />
            <div>
                <h2 className="text-2xl font-bold mb-2">Journeys</h2>
                {trip.journeys.length > 0 ? (
                    <ul>
                        {trip.journeys.map(journey => (
                            <li key={journey.id} className="bg-white p-4 mb-2 rounded-lg shadow">
                                <h3 className="text-lg font-bold">{journey.location}</h3>
                                <p>{journey.date}</p>
                                <p>{journey.transport}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No journeys found.</p>
                )}
            </div>
        </div>
    );
}

export default TripDetailsPage;
