import { useApiResource } from '../../hooks/useApiResource';
import {
    fetchTrips,
    fetchTripById,
    createTrip,
    updateTrip,
    deleteTrip,
} from '../../api/trips';

export function useTrips() {

    const resource = useApiResource({
        fetchAll: fetchTrips,
        fetchById: fetchTripById,
        create: createTrip,
        update: updateTrip,
        delete: deleteTrip,
    });

    return {
        trips: resource.items,
        trip: resource.item,
        loadTrips: resource.loadItems,
        loadTrip: resource.loadItem,
        createTrip: resource.createItem,
        updateTrip: resource.updateItem,
        deleteTrip: resource.deleteItem,
        tripLoading: resource.loading,
        tripError: resource.error,
    };
}