import { useState } from 'react';

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState(null);

    const openModal = (item = null) => {
        setItem(item);
        setIsOpen(true);
    };

    const closeModal = () => {
        setItem(null);
        setIsOpen(false);
    };

    return {
        isOpen,
        item,
        openModal,
        closeModal,
    };
}
