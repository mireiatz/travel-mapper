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
