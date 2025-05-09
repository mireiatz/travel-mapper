import { useState, useEffect } from "react";
import Input from "../../components/Input";

function TripForm({ trip = {}, onChange }) {
    const [tripName, setTripName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Populate the form if editing
    useEffect(() => {
        if (trip) {
            setTripName(trip.name || '');
            setStartDate(trip.start_date || '');
            setEndDate(trip.end_date || '');
        } else {
            setTripName('');
            setStartDate('');
            setEndDate('');
        }
    }, [trip]);

    // Pass up form state to the parent
    useEffect(() => {
        onChange({
            id: trip?.id,
            name: tripName,
            start_date: startDate || null,
            end_date: endDate || null,
        });
    }, [tripName, startDate, endDate]);

    return (
        <div className="space-y-4">
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
        </div>
    );
}

export default TripForm;
