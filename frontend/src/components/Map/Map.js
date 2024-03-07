import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { FaLocationDot } from "react-icons/fa6";


const Map = ({ lat = 36.96578633181195, lng = -122.00103392460099, text = "I'm here!" }) => {
  const mapId = "google-map"; // Unique ID for the map div

  useEffect(() => {
    const initMap = () => {
      const location = { lat, lng };
      const map = new window.google.maps.Map(document.getElementById(mapId), {
        zoom: 14,
        center: location,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: text,
      });

      infowindow.open(map);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, [lat, lng, text]);

  return <div id={mapId} className="w-full h-full"></div>;
};

export default Map;
