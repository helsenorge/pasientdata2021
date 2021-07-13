import { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import styled from 'styled-components'
import 'mapbox-gl/dist/mapbox-gl.css'

import ClickableMarker from '../buttons/ClickableMarker'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import axios from "axios";
mapboxgl.accessToken = 'pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw';

const marker = styled.div`
        background-color: "#00000";
        width: 200px;
        height: 200px;
        border-radius: 50%;
`

function FriendsMapComponent({className}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(10.749);
    const [lat, setLat] = useState(59.907);
    const [zoom, setZoom] = useState(9);
    const [friendsTrips, setFriendsTrips] = useState([])
    const [markers, setMarkers] = useState([])


    useEffect(() => {

        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        
        axios.get('/Trip/FriendsTrips')
            .then(response => { 
                response.data.forEach(value=>{
                    console.log(value)
                    console.log("longitude: "+value["longitude"]+"  latitude: "+value["latitude"])


                    var marker = new ClickableMarker().setLngLat([value["latitude"],value["longitude"]]).onClick(()=>{
                        getTrip(value["tripid"]);
                    }).addTo(map.current)
                }) 
            });

    }, []);

    function getTrip(tripid){
        console.log(tripid)
        axios.get("/Trip/"+tripid.toString()).then(response=>{
            console.log(response.data)
            //Husk å fjerne den som evt allerede er tegnet opp
            //hente route-description og tegne det slik som ble gjort i mapComponent
        })
    }

    function addRoute(trip){

    }


    return (
        <>
        <div ref={mapContainer} className={className} />
        </>
    )
}

export default FriendsMapComponent