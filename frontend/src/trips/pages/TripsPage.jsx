import React from 'react';
import TripList from '../components/TripList';
import ManageTripModal from '../modals/ManageTripModal.jsx';
import Button from '../../components/Button';
import ValidationAlert from '../../components/ValidationAlert';
import Spinner from '../../components/Spinner';
import { useTrips } from '../hooks/useTrips.js';
import { useModal } from '../../hooks/useModal.js';
import { PlusIcon } from '@heroicons/react/24/outline';

function TripsPage() {
    const { trips, addTrip, editTrip, removeTrip, error, loading, clearError } = useTrips();
    const { isOpen, item: editingTrip, openModal, closeModal } = useModal();

    const handleSaveTrip = async (tripData) => {
        try {
            if (tripData.id) {
                await editTrip(tripData.id, tripData);
            } else {
                await addTrip(tripData);
            }
            closeModal();
        } catch (err) {
            console.error('Failed to save trip:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Trips</h1>
                <Button label="Add" icon={PlusIcon} onClick={openModal} />
            </div>

            <Spinner visible={loading} />
            <ValidationAlert message={error} onClose={clearError} />

            <TripList
                trips={trips}
                onEdit={openModal}
                onDelete={removeTrip}
            />

            <ManageTripModal
                isOpen={isOpen}
                onClose={closeModal}
                onSave={handleSaveTrip}
                editingTrip={editingTrip}
            />
        </div>
    );
}

export default TripsPage;
