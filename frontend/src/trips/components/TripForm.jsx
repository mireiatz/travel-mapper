import { useState, useEffect } from "react";
import Input from "../../components/Input";

function TripForm({ trip = {}, onChange }) {
    const [formData, setFormData] = useState({
        name: '',
        start_date: '',
        end_date: ''
    });

    // Populate form when editing
    useEffect(() => {
        if (trip) {
            setFormData({
                id: trip.id,
                name: trip.name || '',
                start_date: trip.start_date || '',
                end_date: trip.end_date || '',
            });
        }
    }, [trip]);

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value };
        setFormData(updatedData);
        onChange(updatedData);
    };

    return (
        <div className="space-y-4">
            <Input
                label="Trip Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
            />
            <Input
                label="Start Date"
                type="date"
                value={formData.start_date}
                onChange={(e) => handleChange('start_date', e.target.value)}
            />
            <Input
                label="End Date"
                type="date"
                value={formData.end_date}
                onChange={(e) => handleChange('end_date', e.target.value)}
            />
        </div>
    );
}

export default TripForm;