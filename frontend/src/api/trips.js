import api from './axiosConfig';
import { handleApiError } from './utils.js';

// Generic request handler to simplify reqyes, response nad error handling
const requestHandler = async (method, url, data = null) => {
    try {
        const response = data
            ? await api[method](url, data)
            : await api[method](url);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};

export const fetchTrips = () => requestHandler('get', '/trips/');
export const fetchTripById = (tripId) => requestHandler('get', `/trips/${tripId}/`);
export const createTrip = (tripData) => requestHandler('post', '/trips/', tripData);
export const updateTrip = (tripId, tripData) => requestHandler('put', `/trips/${tripId}/`, tripData);
export const deleteTrip = (tripId) => requestHandler('delete', `/trips/${tripId}/`);
