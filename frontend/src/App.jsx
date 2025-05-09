import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import TripsPage from "./trips/pages/TripsPage.jsx";
import TripDetailsPage from "./trips/pages/TripDetailsPage.jsx";

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trips" element={<TripsPage />} />
                    <Route path="/trips/:tripId" element={<TripDetailsPage />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}

export default App
