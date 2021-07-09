import { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch,useLocation, Route, useHistory, useParams } from 'react-router-dom';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import 'mapbox-gl/dist/mapbox-gl.css'
import ClickableMarker from '../buttons/ClickableMarker'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import axios from "axios";

mapboxgl.accessToken = 'pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw';


function MapComponent({className, routeData, setRouteData, setRouteJson}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(10.749);
    const [lat, setLat] = useState(59.907);
    const [zoom, setZoom] = useState(9);
    const Route = useRef(null);
    const [Points, setPoints] = useState([]);
    const routeId = useRef("");
    const [Markers, setMarkers] = useState([]);
    let path = window.location.pathname;
    const pathName = useLocation().pathname;

    useEffect(() => {

        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {

        if (!map.current) return;

        map.current.off("click",onclick);
        console.log("turning click off")
        if(routeId.current != ""){
            map.current.removeLayer(routeId.current);
            routeId.current = "";
            Route.current = null;
            setPoints([]);
        }
        Markers.forEach(marker=>{
            marker.remove()
        });

        if(path == "/map" || path == "/map/newtrip"){
            console.log("vi er i /map eller /map/newtrip")
            DrawAllPoints();
        }
        else if(path == "/map/newtrip/enterroute"){
            map.current.on("click",onclick)
            console.log("turning click on");
        }
      },[pathName]);


    function DrawAllPoints(){
        axios.get('/Trip/FriendsTrips')
        .then(response => { 
            response.data.forEach(value=>{
                var marker = new ClickableMarker().setLngLat([value["latitude"],value["longitude"]]).onClick(()=>{
                    getTrip(value["tripid"]);
                }).addTo(map.current)
                setMarkers(Markers => [...Markers, marker]);
            }) 
        });
    }

    function getTrip(tripid){
        console.log(tripid)
        axios.get("/Trip/"+tripid.toString()).then(response=>{
            console.log(response.data)
            //Husk å fjerne den som evt allerede er tegnet opp
            //hente route-description og tegne det slik som ble gjort i mapComponent
        })
    }

    function getAdress(longitude, latitude){
        var key = "pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw"
        axios.get('http://api.tiles.mapbox.com/v4/geocode/mapbox.places/'+longitude+","+latitude+".json?access_token="+key)
                 .then(response => {
                    let currentRouteData = {"lng":longitude, "lat":latitude, "address":response.data.features[0]["place_name"]}
                    setRouteData(routeData => [...routeData, currentRouteData]);
                 })
    }

    function onclick(e){
        var curentpoints = Points
        curentpoints.push({"lng":e["lngLat"]["lng"], "lat":e["lngLat"]["lat"]})
        getAdress(e["lngLat"]["lng"], e["lngLat"]["lat"])

        if(curentpoints.length == 1){
            setPoints(curentpoints)
            return
        }
        else{
            setPoints(curentpoints)
        }
        var string = ""
        for(var i=0;i<Points.length; i++){
            string = string + Points[i].lng+","+Points[i].lat+";"
        }
        string = string.slice(0,-1)

        axios.get('https://api.mapbox.com/directions/v5/mapbox/walking/'+string+'?access_token=pk.eyJ1IjoidGVvMzIwMSIsImEiOiJja3FhbGwzMjYwbmJuMm5sYmQ0NWJnaTlzIn0.CvCp6NNdxaBVmCheNWhjYw&geometries=geojson')
            .then(response => {
                Route.current = response.data.routes[0].geometry
                setRouteJson(response.data.routes[0].geometry)
                addRoute()
            });
    
    }

    
    function addRoute(){
        var randomstring = require("randomstring");
        if(routeId.current != "")
            map.current.removeLayer(routeId.current)
        routeId.current = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
        });
        map.current.addLayer({
            id: routeId.current,
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                type: 'Feature',
                properties: {},
                //geometry: data.routes[0].geometry,
                geometry: Route.current,
                },
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#025944',
                'line-width': 6,
            },
        })
    };

    return (
        <>
       
        <div ref={mapContainer} className={className} />
        </>
    )
}

export default MapComponent
