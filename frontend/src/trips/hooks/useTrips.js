import { useState, useCallback } from 'react';
import { fetchTrips, createTrip, updateTrip, deleteTrip } from '../../api/trips';

export function useTrips() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiCall = useCallback(async (apiCall) => {
        setLoading(true);
        setError(null);
        try {
            return await apiCall();
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const loadTrips = async () => {
        const data = await apiCall(fetchTrips);
        setTrips(data);
    };

    const addTrip = async (tripData) => {
        const newTrip = await apiCall(() => createTrip(tripData));
        setTrips((prev) => [newTrip, ...prev]);
        return newTrip;
    };

    const editTrip = async (tripId, tripData) => {
        const updatedTrip = await apiCall(() => updateTrip(tripId, tripData));
        setTrips((prev) => prev.map((trip) => (trip.id === tripId ? updatedTrip : trip)));
        return updatedTrip;
    };

    const removeTrip = async (tripId) => {
        await apiCall(() => deleteTrip(tripId));
        setTrips((prev) => prev.filter((trip) => trip.id !== tripId));
    };

    return {
        trips,
        loadTrips,
        addTrip,
        editTrip,
        removeTrip,
        loading,
        error,
    };
}
