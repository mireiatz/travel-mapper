import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import TransportSelector from '../components/TransportSelector';
import LocationInput from "../../components/LocationInput.jsx";

function JourneyForm({ journey = {}, onChange }) {
    const [formData, setFormData] = useState({
        from_location: journey?.from_location || { name: '', lat: null, lng: null },
        to_location: journey?.to_location || { name: '', lat: null, lng: null },
        transport_type: '',
        start_date: '',
        end_date: '',
    });

    useEffect(() => {
        if (journey) {
            setFormData({
                from_location: journey?.from_location || { name: '', lat: null, lng: null },
                to_location: journey?.to_location || { name: '', lat: null, lng: null },
                transport_type: journey?.transport_type || '',
                start_date: journey?.start_date || '',
                end_date: journey?.end_date || '',
            });
        }
    }, [journey]);

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value };
        setFormData(updatedData);
        onChange(updatedData);
    };

    return (
        <div className="w-full space-y-4">
            <div className="flex justify-center">
                <TransportSelector
                    value={formData.transport_type}
                    onChange={(value) => handleChange('transport_type', value)}
                    className="w-full max-w-2xl"
                    required
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <LocationInput
                    label="From"
                    value={formData.from_location}
                    onChange={(value) => handleChange("from_location", value)}
                />
                <LocationInput
                    label="To"
                    value={formData.to_location}
                    onChange={(value) => handleChange("to_location", value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
    );
}

export default JourneyForm;
