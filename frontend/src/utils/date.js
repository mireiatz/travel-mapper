import { format } from 'date-fns';

export const formatDate = (dateString) => {
    return format(new Date(dateString), 'd MMMM yyyy');
};

export const formatDateRange = (startDate, endDate) => {
    if (startDate && endDate) {
        return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate) {
        return `${formatDate(startDate)}`;
    } else if (endDate) {
        return `${formatDate(endDate)}`;
    } else {
        return '-';
    }
};