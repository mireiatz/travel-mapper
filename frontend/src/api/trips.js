import { requestHandler } from './utils.js';

export const fetchTrips = () => requestHandler('get', '/trips/');
export const fetchTripById = (tripId) => requestHandler('get', `/trips/${tripId}/`);
export const createTrip = (tripData) => requestHandler('post', '/trips/', tripData);
export const updateTrip = (tripId, tripData) => requestHandler('put', `/trips/${tripId}/`, tripData);
export const deleteTrip = (tripId) => requestHandler('delete', `/trips/${tripId}/`);
