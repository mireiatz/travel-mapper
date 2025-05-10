import {useCallback, useState} from 'react';

export function useApiResource(apiCalls) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Generalized API call handler
    const apiCall = useCallback(async (apiCallFn) => {
        setLoading(true);
        setError(null);
        try {
            return await apiCallFn();
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Load all items
    const loadItems = useCallback(async () => {
        const data = await apiCall(apiCalls.fetchAll);
        setItems(data);
    }, [apiCall, apiCalls.fetchAll]);

    // Load a single item
    const loadItem = useCallback(async (id) => {
        const data = await apiCall(() => apiCalls.fetchById(id));
        setItem(data);
        return data;
    }, [apiCall, apiCalls.fetchById]);

    // Add a new item
    const createItem = useCallback(async (itemData) => {
        const newItem = await apiCall(() => apiCalls.create(itemData));
        setItems((prev) => [newItem, ...prev]);
        return newItem;
    }, [apiCall, apiCalls.create]);

    // Update an existing item
    const updateItem = useCallback(async (id, itemData) => {
        const updatedItem = await apiCall(() => apiCalls.update(id, itemData));
        setItems((prev) =>
            prev.map((item) => (item.id === id ? updatedItem : item))
        );
        return updatedItem;
    }, [apiCall, apiCalls.update]);

    // Delete an item
    const deleteItem = useCallback(async (id) => {
        await apiCall(() => apiCalls.delete(id));
        setItems((prev) => prev.filter((item) => item.id !== id));
    }, [apiCall, apiCalls.delete]);

    return {
        items,
        item,
        loadItems,
        loadItem,
        createItem,
        updateItem,
        deleteItem,
        loading,
        error,
    };
}
