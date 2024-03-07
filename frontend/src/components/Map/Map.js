import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ lat = 36.96578633181195, lng = -122.00103392460099, text = "I'm here!" }) => {
  const mapId = "google-map";

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

    initMap();
  }, [lat, lng, text]);

  return <div id={mapId} className="w-full h-full"></div>;
};

export default Map;
