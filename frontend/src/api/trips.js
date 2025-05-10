import { requestHandler } from './utils.js';

export const fetchTrips = () => requestHandler('get', '/trips/');
export const fetchTripById = (id) => requestHandler('get', `/trips/${id}/`);
export const createTrip = (data) => requestHandler('post', '/trips/', data);
export const updateTrip = (id, data) => requestHandler('put', `/trips/${id}/`, data);
export const deleteTrip = (id) => requestHandler('delete', `/trips/${id}/`);