import { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import 'mapbox-gl/dist/mapbox-gl.css'

//import MapBoxDirections from '@mapbox/mapbox-gl-directions'

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw';


function MapComponent({className}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(10.749);
    const [lat, setLat] = useState(59.907);
    const [zoom, setZoom] = useState(9);

    let data = require('../route2.json');

    useEffect(() => {
        if (map.current) return; // initialize map only once
        
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        
        var marker = new mapboxgl.Marker({
            color: "#FFFFFF",
            draggable: true
        }).setLngLat([10.74, 59.91])
        .addTo(map.current);

        map.current.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
                profile: 'mapbox/walking'
            }),
            'top-left'
        );

    });
    
    function addRoute(){
        map.current.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                type: 'Feature',
                properties: {},
                geometry: data.routes[0].geometry,
                },
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#ff7e5f',
                'line-width': 8,
            },
        })
    };

    function removeRoute(){
        map.current.removeLayer('route');
    }


    return (
        <>
        <div ref={mapContainer} className={className} />
        </>
    )
}

export default MapComponent
