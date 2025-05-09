import {useState} from "react";
import {createTrip} from "../../api/trips.js";
import Modal from "../../components/Modal.jsx";
import Input from "../../components/Input.jsx";

function TripModal({ isOpen, onClose, onCreate }) {
    const [tripName, setTripName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCreate = async () => {
        if (tripName.trim() === '') {
            setError('Trip name is required');
            return;
        }

        setLoading(true);
        try {
            const newTrip = await createTrip({
                name: tripName,
                start_date: startDate || null,
                end_date: endDate || null,
            });
            onCreate(newTrip);
            setTripName('');
            setStartDate('');
            setEndDate('');
            setError('');
            onClose();
        } catch (err) {
            setError('Failed to create trip.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal 
            isOpen={isOpen} 
            title="Add New Trip" 
            onClose={() => {
                setError('');
                onClose();
            }} 
            footerButtonText={loading ? 'Creating...' : 'Create'}
            onFooterButtonClick={handleCreate}
            errorMessage={error}
        >
            <Input
                label="Trip Name"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                required
            />
            <Input
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <Input
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </Modal>
    );
}

export default TripModal;