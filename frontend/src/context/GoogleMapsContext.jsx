import { createContext, useContext, useEffect, useState } from "react";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ apiKey, children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (window.google && window.google.maps) {
            setIsLoaded(true);
            return;
        }

        const scriptId = "google-maps-script";

        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGoogleMaps`;
            script.async = true;
            script.defer = true;
            window.initGoogleMaps = () => {
                setIsLoaded(true);
                delete window.initGoogleMaps;
            };
            document.head.appendChild(script);
        }

        return () => {
            const script = document.getElementById(scriptId);
            if (script) script.remove();
        };
    }, [apiKey]);

    return (
        <GoogleMapsContext.Provider value={{ isLoaded }}>
            {children}
        </GoogleMapsContext.Provider>
    );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
