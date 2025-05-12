import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import TripsPage from "./trips/pages/TripsPage.jsx";
import TripDetailsPage from "./trips/pages/TripDetailsPage.jsx";
import {GoogleMapsProvider} from "./context/GoogleMapsContext.jsx";

function App() {
    return (
        <Router>
            <GoogleMapsProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trips" element={<TripsPage />} />
                        <Route path="/trips/:tripId" element={<TripDetailsPage />} />
                    </Routes>
                </MainLayout>
            </GoogleMapsProvider>
        </Router>
    )
}

export default App
