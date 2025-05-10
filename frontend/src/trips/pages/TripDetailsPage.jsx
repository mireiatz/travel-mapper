import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
import JourneyList from '../../journeys/components/JourneyList.jsx';
import ManageJourneyModal from '../../journeys/modals/ManageJourneyModal.jsx';
import { useJourneys } from '../../journeys/hooks/useJourneys.js';
import { useModal } from '../../hooks/useModal.js';
import {Link, useLocation, useParams} from 'react-router-dom';
import { formatDateRange } from '../../utils/date.js';
import {FaPlus} from "react-icons/fa";

function TripDetailsPage() {

    const { tripId } = useParams();
    const location = useLocation();
    const trip = location.state?.trip;
    const { journeys, loadJourneys, createJourney, updateJourney, deleteJourney, journeyError, journeyLoading } = useJourneys(tripId);
    const [editingJourney, setEditingJourney] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        loadJourneys()
    }, []);

    const handleOpenModal = (journey = null) => {
        setEditingJourney(journey);
        openModal();
    };

    const handleCloseModal = () => {
        setEditingJourney(null);
        closeModal();
    };

    const handleSaveJourney = async (journeyData) => {
        try {
            if (journeyData.id) {
                await updateJourney(journeyData.id, journeyData);
            } else {
                await createJourney(journeyData);
            }
            handleCloseModal();
        } catch (err) {
            console.error('Failed to save journey:', err);
            throw err;
        }
    };

    if(!trip) {
        return (
            <div className="flex justify-between items-center mb-4">
                <p>No info found.</p>
                <Link to="/trips" className="text-blue-600">Back</Link>
            </div>

        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">

            {trip && (
                <>

                 <div className="flex justify-between items-center mb-4">
                     <div>
                         <h1 className="text-4xl font-bold text-blue-600">{trip.name}</h1>
                         <p className="text-gray-700">{formatDateRange(trip.start_date, trip.end_date)}</p>
                     </div>
                     <Link to="/trips" className="text-blue-600">Back</Link>
                 </div>

                <hr className="mb-4" />

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Journeys</h2>
                    <Button label="Add" icon={FaPlus} onClick={openModal} />
                </div>

                <JourneyList
                    journeys={journeys}
                    onEdit={handleOpenModal}
                    onDelete={deleteJourney}
                    error={journeyError}
                    loading={journeyLoading}
                />

                </>

            )}

            <ManageJourneyModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSave={handleSaveJourney}
                editingJourney={editingJourney}
                error={journeyError}
                loading={journeyLoading}
            />
        </div>
    );
}

export default TripDetailsPage;