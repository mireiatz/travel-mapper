import React from 'react';
import Header from '../components/Header';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                {children}
            </main>
        </>
    );
}

export default MainLayout;
