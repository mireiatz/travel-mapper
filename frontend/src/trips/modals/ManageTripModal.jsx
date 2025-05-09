import Modal from "../../components/Modal.jsx";
import TripForm from "../components/TripForm.jsx";
import { useState, useEffect } from "react";

function ManageTripModal({ isOpen, onClose, onSave, editingTrip }) {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSave = async () => {
        if (!formData.name || formData.name.trim() === '') {
            setError('Trip name is required');
            return;
        }

        setLoading(true);
        try {
            await onSave(formData);
            onClose();
        } catch (err) {
            setError('Failed to save trip.');
        } finally {
            setLoading(false);
        }
    };

    // Reset form data when modal is closed
    useEffect(() => {
        if (!isOpen) {
            setFormData({});
            setError('');
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            title={editingTrip ? "Update Trip" : "Create Trip"}
            onClose={onClose}
            onFooterButtonClick={handleSave}
            footerButtonText={loading ? "Saving..." : editingTrip ? "Update" : "Create"}
            loading={loading}
            errorMessage={error}
        >
            <TripForm
                trip={editingTrip}
                onChange={(data) => setFormData(data)}
            />
        </Modal>
    );
}

export default ManageTripModal;
