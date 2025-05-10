import { useApiResource } from '../../hooks/useApiResource';
import {
    fetchTrips,
    fetchTripById,
    createTrip,
    updateTrip,
    deleteTrip,
} from '../../api/trips';

export function useTrips() {
    return useApiResource({
        fetchAll: fetchTrips,
        fetchById: fetchTripById,
        create: createTrip,
        update: updateTrip,
        delete: deleteTrip,
    });
}