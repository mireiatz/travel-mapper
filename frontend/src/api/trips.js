import api from './axiosConfig';

export const fetchTrips = async () => {
    try {
        const response = await api.get('/trips/');
        return response.data;
    } catch (error) {
        console.error('Error fetching trips:', error);
        throw error;
    }
};

export const createTrip = async (tripData) => {
    try {
        const response = await api.post('/trips/', tripData);
        return response.data;
    } catch (error) {
        console.error('Error creating trip:', error);
        throw error;
    }
};
