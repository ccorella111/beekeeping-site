"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
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

function TouchInteractionGuard() {
    const map = useMap();
    const lastTap = useRef(0);
    const [requiresActivation, setRequiresActivation] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        const touchMediaQuery = window.matchMedia("(pointer: coarse)");
        setRequiresActivation(touchMediaQuery.matches);

        const updatePointerType = (event: MediaQueryListEvent) => {
            setRequiresActivation(event.matches);
        };

        touchMediaQuery.addEventListener("change", updatePointerType);
        return () => touchMediaQuery.removeEventListener("change", updatePointerType);
    }, []);

    useEffect(() => {
        if (!requiresActivation || isActivated) {
            map.dragging.enable();
            map.touchZoom.enable();
            return;
        }

        map.dragging.disable();
        map.touchZoom.disable();
    }, [isActivated, map, requiresActivation]);

    if (!requiresActivation || isActivated) {
        return null;
    }

    const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
        if (event.pointerType !== "touch") {
            return;
        }

        event.preventDefault();

        const now = Date.now();
        if (now - lastTap.current < 350) {
            setIsActivated(true);
        }
        lastTap.current = now;
    };

    return (
        <button
            type="button"
            className="absolute inset-0 z-[1000] flex items-center justify-center rounded-2xl bg-comb/20 px-6 text-center text-sm font-semibold text-white backdrop-blur-[1px]"
            onPointerUp={handlePointerUp}
            aria-label="Toca dos veces para interactuar con el mapa"
        >
            Toca dos veces para interactuar con el mapa
        </button>
    );
}

export default function Map() {
    const position: [number, number] = [10.448570243227582, -84.23422624232703];

    return (
        <div className="relative h-full w-full">
            <MapContainer
                center={position}
                zoom={12}
                className="z-0 h-full w-full rounded-2xl md:h-full"
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

                <TouchInteractionGuard />
            </MapContainer>
        </div>
    );
}