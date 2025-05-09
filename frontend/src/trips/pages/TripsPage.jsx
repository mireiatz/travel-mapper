import React, { useState, useEffect } from 'react';
import TripList from '../components/TripList';
import TripModal from '../modals/TripModal';
import Button from '../../components/Button';
import { fetchTrips } from '../../api/trips';

function TripsPage() {
    const [trips, setTrips] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const loadTrips = async () => {
            try {
                const data = await fetchTrips();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            }
        };

        loadTrips();
    }, []);

    const handleCreateTrip = (newTrip) => {
        setTrips([newTrip, ...trips]);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Trips</h1>
                <Button label="+ Add" onClick={() => setModalOpen(true)} />
            </div>
            <TripList trips={trips} />
            <TripModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onCreate={handleCreateTrip}
            />
        </div>
    );
}

export default TripsPage;
