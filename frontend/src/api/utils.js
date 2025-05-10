import api from './axiosConfig';

// Generic error handler
export const handleApiError = (error) => {
    if (error.response) {
       if (error.response.data.detail) {
            return error.response.data.detail;
        } else if (typeof error.response.data === 'object') {
            return Object.values(error.response.data).join(' ');
        } else {
            return 'Unexpected server error.';
        }
    } else if (error.request) {
        return 'No response from server.';
    } else {
        return 'Unexpected error.';
    }
};

// Generic request handler for API requests
export const requestHandler = async (method, url, data = null) => {
    try {
        const response = data
            ? await api[method](url, data)
            : await api[method](url);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
};