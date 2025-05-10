import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import TransportSelector from '../components/TransportSelector';

function JourneyForm({ journey = {}, onChange }) {
    const [formData, setFormData] = useState({
        from_location: '',
        to_location: '',
        transport_type: '',
        start_date: '',
        end_date: '',
    });

    useEffect(() => {
        if (journey) {
            setFormData({
                from_location: journey.from_location || '',
                to_location: journey.to_location || '',
                transport_type: journey.transport_type || '',
                start_date: journey.start_date || '',
                end_date: journey.end_date || '',
            });
        }
    }, [journey]);

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value };
        setFormData(updatedData);
        onChange(updatedData);
    };

    return (
        <div className="w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                    label="From"
                    value={formData.from_location}
                    onChange={(e) => handleChange('from_location', e.target.value)}
                    required
                />
                <Input
                    label="To"
                    value={formData.to_location}
                    onChange={(e) => handleChange('to_location', e.target.value)}
                    required
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

            <div className="flex justify-center">
                <TransportSelector
                    value={formData.transport_type}
                    onChange={(value) => handleChange('transport_type', value)}
                    className="w-full max-w-2xl"
                />
            </div>
        </div>
    );
}

export default JourneyForm;
