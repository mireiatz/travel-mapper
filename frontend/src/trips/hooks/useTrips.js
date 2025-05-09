import { useState, useEffect } from 'react';
import { fetchTrips, createTrip, updateTrip, deleteTrip } from '../../api/trips';
import { handleApiError } from '../../api/utils';

export function useTrips() {
    const [trips, setTrips] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadTrips = async () => {
            setLoading(true);
            try {
                const data = await fetchTrips();
                setTrips(data);
            } catch (err) {
                setError(handleApiError(err));
            } finally {
                setLoading(false);
            }
        };

        loadTrips();
    }, []);

    const addTrip = async (tripData) => {
        setLoading(true);
        try {
            const newTrip = await createTrip(tripData);
            setTrips((prevTrips) => [newTrip, ...prevTrips]);
            return newTrip;
        } catch (err) {
            setError(handleApiError(err));
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const editTrip = async (tripId, tripData) => {
        setLoading(true);
        try {
            const updatedTrip = await updateTrip(tripId, tripData);
            setTrips((prevTrips) =>
                prevTrips.map((trip) => (trip.id === tripId ? updatedTrip : trip))
            );
            return updatedTrip;
        } catch (err) {
            setError(handleApiError(err));
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const removeTrip = async (tripId) => {
        setLoading(true);
        try {
            await deleteTrip(tripId);
            setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
        } catch (err) {
            setError(handleApiError(err));
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => setError(null);

    return {
        trips,
        addTrip,
        editTrip,
        removeTrip,
        error,
        loading,
        clearError,
    };
}
