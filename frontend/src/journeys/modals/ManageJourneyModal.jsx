import React, {useEffect, useState} from 'react';
import Modal from '../../components/Modal.jsx';
import JourneyForm from '../components/JourneyForm.jsx';
import {GoogleMapsProvider} from "../../context/GoogleMapsContext.jsx";

function ManageJourneyModal({ isOpen, onClose, onSave, editingJourney, loading, error }) {
    const [journey, setJourney] = useState({
        from_location: '',
        to_location: '',
        transport_type: '',
        start_date: '',
        end_date: ''
    });
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (editingJourney) {
            setJourney({
                ...editingJourney,
                from_location: editingJourney.from_location || { name: '', lat: null, lng: null },
                to_location: editingJourney.to_location || { name: '', lat: null, lng: null },
            });
        } else {
            setJourney({
                from_location: { name: '', lat: null, lng: null },
                to_location: { name: '', lat: null, lng: null },
                transport_type: '',
                start_date: '',
                end_date: ''
            });
        }

        if (isOpen) {
            setValidationError('');
        }
    }, [isOpen, editingJourney]);


    const handleSave = async () => {
        setValidationError('');

        if (!journey.from_location.name || !journey.to_location.name) {
            setValidationError('Both "From" and "To" locations are required');
            return;
        }

        if (!journey.transport_type) {
            setValidationError('The transport type is required');
            return;
        }

        await onSave({
            id: journey.id || null,
            from_location: journey.from_location,
            to_location: journey.to_location,
            transport_type: journey.transport_type,
            start_date: journey.start_date || null,
            end_date: journey.end_date || null
        });
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            title={editingJourney ? 'Update Journey' : 'Create Journey'}
            onClose={onClose}
            onFooterButtonClick={handleSave}
            footerButtonText={editingJourney ? "Update" : "Create"}
            loading={loading}
            error={validationError || error}
            maxWidth="max-w-xl"
        >
            <JourneyForm
                journey={editingJourney}
                onChange={setJourney}
            />
        </Modal>
    );
}

export default ManageJourneyModal;
