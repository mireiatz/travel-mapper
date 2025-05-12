import { createContext, useContext, useEffect, useState } from "react";

const GoogleMapsContext = createContext();

let googleMapsPromise = null;

export const GoogleMapsProvider = ({ apiKey, children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!googleMapsPromise) {
            googleMapsPromise = new Promise((resolve, reject) => {
                if (window.google && window.google.maps) {
                    resolve(window.google.maps);
                    setIsLoaded(true);
                    return;
                }

                const scriptId = "google-maps-script";

                if (!document.getElementById(scriptId)) {
                    const script = document.createElement("script");
                    script.id = scriptId;
                    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
                    script.async = true;
                    script.defer = true;

                    script.onload = () => {
                        setIsLoaded(true);
                        resolve(window.google.maps);
                    };

                    script.onerror = (error) => {
                        console.error("Failed to load Google Maps API", error);
                        reject(error);
                    };

                    document.head.appendChild(script);
                }
            });
        } else {
            googleMapsPromise.then(() => setIsLoaded(true));
        }
    }, [apiKey]);

    return (
        <GoogleMapsContext.Provider value={{ isLoaded }}>
            {children}
        </GoogleMapsContext.Provider>
    );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
