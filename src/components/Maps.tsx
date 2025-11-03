"use client";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Maps() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: -36.61132362651963,
        lng: -56.703764800140156,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 16,
        mapId: "MIWA_POSITION",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  });
  return (
    <div
      className="lg:h-full h-[25vh] lg:mt-0 mt-5 w-full rounded-lg"
      ref={mapRef}
    />
  );
}

export default Maps;
