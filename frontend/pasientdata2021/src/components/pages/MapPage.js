import { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import styled from 'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css'

//import MapBoxDirections from '@mapbox/mapbox-gl-directions'

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw';


function MapPage() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(10.749);
    const [lat, setLat] = useState(59.907);
    const [zoom, setZoom] = useState(9);

    
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

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #7BEFB2;
    `

    const TopContainer = styled.div`
        min-height: 20px;
    `

    const MapContainer = styled.div`
        min-height: 500px;
        border-radius: 0px 50px 50px 0px;
        margin: 5px 5px 5px 0px;
    `

    const BottomContainer = styled.div`
        height: 100%;
        background-color: white;
        border-radius: 0px 50px 0px 0px;
        margin-top: 5px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        padding: 10px;
    `

    const PersonContainer = styled.div`
        font-size: 25px;
    `

    return (
        <Wrapper>
        <TopContainer></TopContainer>
        <MapContainer ref={mapContainer} className="map-container" />
        <BottomContainer>
            <PersonContainer>
                Torstein
            </PersonContainer>
        </BottomContainer>
        </Wrapper>
    )
}

export default MapPage
