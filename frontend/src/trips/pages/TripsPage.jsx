import { useEffect, useState } from 'react';
import { useTrips } from '../hooks/useTrips';
import TripList from '../components/TripList';
import ManageTripModal from '../modals/ManageTripModal';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import Spinner from '../../components/Spinner';
import { PlusIcon } from '@heroicons/react/24/outline';

function TripsPage() {
    const { trips, loadTrips, addTrip, editTrip, removeTrip, error, loading } = useTrips();
    const [editingTrip, setEditingTrip] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        loadTrips();
    }, []);

    const handleOpenModal = (trip = null) => {
        setEditingTrip(trip);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setEditingTrip(null);
        setModalOpen(false);
    };

    const handleSaveTrip = async (tripData) => {
        try {
            if (tripData.id) {
                await editTrip(tripData.id, tripData);
            } else {
                await addTrip(tripData);
            }
            handleCloseModal();
        } catch (err) {
            console.error('Failed to save trip:', err);
            throw err;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Trips</h1>
                <Button label="Add" icon={PlusIcon} onClick={() => handleOpenModal()} />
            </div>

            <Spinner visible={loading} />
            <Alert message={error} />

            <TripList
                trips={trips}
                onEdit={handleOpenModal}
                onDelete={removeTrip}
            />

            <ManageTripModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTrip}
                editingTrip={editingTrip}
                error={error}
                loading={loading}
            />
        </div>
    );
}

export default TripsPage;
