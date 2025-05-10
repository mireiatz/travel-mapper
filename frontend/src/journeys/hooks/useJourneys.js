import { useApiResource } from '../../hooks/useApiResource';
import {fetchJourneys, createJourney, updateJourney, deleteJourney} from '../../api/journeys';

export function useJourneys(tripId) {

    const resource = useApiResource({
        fetchAll: () => fetchJourneys(tripId),
        create: (data) => createJourney(tripId, data),
        update: (id, data) => updateJourney(tripId, id, data),
        delete: (id) => deleteJourney(tripId, id),
    });

    return {
        journeys: resource.items,
        loadJourneys: resource.loadItems,
        createJourney: resource.createItem,
        updateJourney: resource.updateItem,
        deleteJourney: resource.deleteItem,
        journeyLoading: resource.loading,
        journeyError: resource.error,
    };
}