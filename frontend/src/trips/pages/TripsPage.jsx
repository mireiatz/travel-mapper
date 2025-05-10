import { useEffect, useState } from 'react';
import { useTrips } from '../hooks/useTrips';
import TripList from '../components/TripList';
import ManageTripModal from '../modals/ManageTripModal';
import Button from '../../components/Button';
import {FaPlus} from "react-icons/fa";
import {useModal} from "../../hooks/useModal.js";

function TripsPage() {

    const { trips, loadTrips, createTrip, updateTrip, deleteTrip, tripLoading, tripError } = useTrips();
    const [editingTrip, setEditingTrip] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        loadTrips();
    }, []);

    const handleOpenModal = (trip = null) => {
        setEditingTrip(trip);
        openModal();
    };

    const handleCloseModal = () => {
        setEditingTrip(null);
        closeModal();
    };

    const handleSaveTrip = async (tripData) => {
        try {
            if (tripData.id) {
                await updateTrip(tripData.id, tripData);
            } else {
                await createTrip(tripData);
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
                <Button label="Add" icon={FaPlus} onClick={() => handleOpenModal()} />
            </div>

            <TripList
                trips={trips}
                onEdit={handleOpenModal}
                onDelete={deleteTrip}
                error={tripError}
                loading={tripLoading}
            />

            <ManageTripModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTrip}
                editingTrip={editingTrip}
                error={tripError}
                loading={tripLoading}
            />
        </div>
    );
}

export default TripsPage;
