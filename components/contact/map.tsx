"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src ?? markerIcon,
    iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
    shadowUrl: markerShadow.src ?? markerShadow,
});

export default function Map() {
    const position: [number, number] = [10.448570243227582, -84.23422624232703];

    return (
        <MapContainer
            center={position}
            zoom={12}
            className="h-full w-full rounded-2xl z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Apiario el dulce vuelo, San Carlos
                </Popup>
            </Marker>
        </MapContainer>
    );
}