import Modal from "../../components/Modal.jsx";
import TripForm from "../components/TripForm.jsx";
import { useState, useEffect } from "react";

function ManageTripModal({ isOpen, onClose, onSave, editingTrip, loading, error }) {
    const [trip, setTrip] = useState({ name: '', start_date: null, end_date: null });
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (editingTrip) {
            setTrip(editingTrip);
        } else {
            setTrip({ name: '', start_date: null, end_date: null });
        }

        if (isOpen) {
            setValidationError('');
        }
    }, [isOpen, editingTrip]);


    const handleSave = async () => {
        setValidationError('');

        if (!trip.name.trim()) {
            setValidationError('Trip name is required');
            return;
        }

        await onSave({
            id: trip.id || null,
            name: trip.name,
            start_date: trip.start_date || null,
            end_date: trip.end_date || null
        });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title={editingTrip ? "Update Trip" : "Create Trip"}
            onClose={onClose}
            onFooterButtonClick={handleSave}
            footerButtonText={editingTrip ? "Update" : "Create"}
            loading={loading}
            error={validationError || error}
        >
            <TripForm
                trip={trip}
                onChange={setTrip}
            />
        </Modal>
    );
}

export default ManageTripModal;