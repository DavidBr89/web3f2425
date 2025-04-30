import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useParkings } from "../contexts/ParkingsContext";
import { useEffect, useState } from "react";

const ParkingsMapPage = () => {
  const { parkings } = useParkings();
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setCurrentPosition(position);
    });
  }, []);

  return (
    <div className="grow flex flex-col">
      <MapContainer className="grow" zoom={15} center={[51.053, 3.719]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {currentPosition !== null && (
          <Marker
            position={[
              currentPosition.coords.latitude,
              currentPosition.coords.longitude,
            ]}
          />
        )}
        {parkings.map((p) => (
          <Marker key={p.id} position={[p.location.lat, p.location.lon]} />
        ))}
      </MapContainer>
    </div>
  );
};

export default ParkingsMapPage;
