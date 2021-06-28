import { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import {FaUser, FaTimes, FaChevronRight} from 'react-icons/fa'

import 'mapbox-gl/dist/mapbox-gl.css'

//import MapBoxDirections from '@mapbox/mapbox-gl-directions'

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw';



function CreateTripPage() {
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
        background-color: white;
    `

    const TopContainer = styled.div`
        min-height: 20px;
    `

    const MapContainer = styled.div`
        min-height: 100px;
        border-radius: 0px 50px 50px 0px;
        margin: 5px 5px 5px 0px;
    `

    const BottomContainer = styled.div`
        height: 100%;
        background-color: #7BEFB2;
        border-radius: 0px 50px 0px 0px;
        margin-top: 5px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: auto;
        `

    const Headercontainer = styled.div`
    
    display: flex;
    height: 50px;
    width: 100%;  
    font-family: 'Comfortaa';
    justify-content: center;
    margin-bottom: 20px;
    `

   const SubTitle = styled.a`
    color: rgba(0,0,0,.87);
   `

    const Invitercontainer  = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    `

    const InviterteContainer  = styled.div`
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    `

    const PersonContainer = styled.div`
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        justify-content: space-between;
`   
    const Rutercontainer = styled.div`
        margin-top: 10px;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: 100%;
        
        `
    const Rute = styled.div`
        margin-left: 5px;
        font-size: 18px;
        color: #4E4E4E;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-family: 'Comfortaa';
        margin-top: 10px;
        `
    const divStyle = {
        color: 'red'
    }

    const SubmitTitle = styled.div`
    display: flex;
    height: 50px;
    width: 100%;  
    font-family: 'Comfortaa';
    justify-content: center;
    margin-bottom: 20px;
    text-decoration: underline;

    `
   

    return (
        <Wrapper>
        <TopContainer className = "top-container"></TopContainer>
        <MapContainer ref={mapContainer} className="map-container" />
        <BottomContainer className = "bottom-container">

            

            <Headercontainer className="header-container">
                <h2>Lag Tur</h2>
            </Headercontainer>

            
            <UserInputField placeholder="Navn"/>
            <UserInputField placeholder="Dato"/>

            <Invitercontainer>
            <SubTitle>
                Inviter
            </SubTitle>
            <UserInputField placeholder="Inviter andre"/>
            </Invitercontainer>
            

            <InviterteContainer>
                <SubTitle>
                    Inviterte
                </SubTitle>

                <PersonContainer className = "person-container">
                    <FaUser ></FaUser>
                Torstein
                <FaTimes style={{color:'red'}} />
                </PersonContainer>

                <PersonContainer className = "person-container">
                <FaUser ></FaUser>
                Awalle
                <FaTimes style={{color:'red'}} />
                </PersonContainer>
            </InviterteContainer>

           <Rutercontainer>
               <SubTitle>
                   Rute
               </SubTitle>
               <Rute>
                    Definer Rute
                    <FaChevronRight />
               </Rute>          
           </Rutercontainer>

           <SubmitTitle>
           <h1>Lag</h1>
           </SubmitTitle>
            
        </BottomContainer>
        </Wrapper>
    )
}

export default CreateTripPage;
