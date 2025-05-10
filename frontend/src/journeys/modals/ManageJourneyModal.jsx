import React, { useState } from 'react';
import Modal from '../../components/Modal.jsx';
import JourneyForm from '../components/JourneyForm.jsx';

function ManageJourneyModal({ isOpen, onClose, onSave, editingJourney }) {
    const [journeyData, setJourneyData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSave = async () => {
        if (!journeyData.from_location || !journeyData.to_location) {
            setError('Both "From" and "To" locations are required');
            return;
        }

        setLoading(true);
        try {
            await onSave(journeyData);
            onClose();
        } catch (err) {
            setError('Failed to save journey.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            title={editingJourney ? 'Update Journey' : 'Create Journey'}
            onClose={() => {
                setError('');
                onClose();
            }}
            footerButtonText={editingJourney ? 'Update' : 'Create'}
            onFooterButtonClick={handleSave}
            errorMessage={error}
            loading={loading}
            maxWidth="max-w-xl"
        >
            <JourneyForm
                journey={editingJourney}
                onChange={setJourneyData}
            />
        </Modal>
    );
}

export default ManageJourneyModal;
