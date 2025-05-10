import { requestHandler } from './utils';

export const fetchJourneys = (tripId) => requestHandler('get', `/trips/${tripId}/journeys/`);
export const createJourney = (tripId, data) => requestHandler('post', `/trips/${tripId}/journeys/`, data);
export const updateJourney = (tripId, journeyId, data) => requestHandler('put', `/trips/${tripId}/journeys/${journeyId}/`, data);
export const deleteJourney = (tripId, journeyId) => requestHandler('delete', `/trips/${tripId}/journeys/${journeyId}/`);
