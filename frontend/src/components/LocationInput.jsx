import React, { useEffect, useRef } from "react";
import { useGoogleMaps } from "../context/GoogleMapsContext.jsx";

function LocationInput({ label, value = {}, onChange }) {
    const { isLoaded } = useGoogleMaps();
    const inputRef = useRef(null);

    useEffect(() => {
      if (isLoaded && inputRef.current) {
          const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
              types: ["geocode"],
          });

          autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();
              if (place.geometry) {
                  onChange({
                      name: place.formatted_address,
                      lat: place.geometry.location.lat(),
                      lng: place.geometry.location.lng(),
                  });
              }
          });

          // Clean up the listener when component unmounts
          return () => window.google.maps.event.clearInstanceListeners(autocomplete);
      }
  }, [isLoaded]);

    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2">
                {label}
            </label>
            <input
                ref={inputRef}
                value={value.name || ""}
                placeholder={label}
                onChange={(e) => onChange({
                    name: e.target.value,
                    lat: value?.lat ?? null,
                    lng: value?.lng ?? null
                })}
                className="w-full p-2 border rounded"
                disabled={!isLoaded}
            />
        </div>
    );
}

export default LocationInput;
