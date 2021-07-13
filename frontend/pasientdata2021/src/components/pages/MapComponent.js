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
    const routeId = useRef("");
    const ToBeClicked = useRef(false);
    const [Markers, setMarkers] = useState([]);
    let path = window.location.pathname;
    const pathName = useLocation().pathname;
    const history = useHistory();

    const handleClickRef = useRef(onClick)
    handleClickRef.current = onClick // update reference with every render

    useEffect(() => {
        if (map.current) return; // initialize map only once

        console.log("creating new map!")
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.on('style.load', function() {
            /*map.current.on('load', function () {    
                var layerid = map.current.getStyle().layers
                    .map(function(layer) { 
                        console.log("layer id er : "+layer.id);
                        return layer.id;
                    });
                LayerId.current = layerid;  
            });*/
        });
        map.current.on("load",function(){
            map.current.on("click", (event) => handleClickRef.current(event));
        })
    });


    useEffect(() => {
        if (!map.current) return;
        
        if(path === "/map/" || path === "/map"){
            console.log("turning click off")
            ToBeClicked.current = false;
            console.log("PATH IS /MAP")
            if(routeId.current){
                console.log("CLEARING MAP")
                map.current.removeLayer(routeId.current);
                routeId.current = "";
                Route.current = null;
                setRouteData([])
            }
            DrawAllPoints();
        }
        else if(path == "/map/newtrip/enterroute" || path == "/map/newtrip"){
            console.log("PATH IS enterroute or newtrip. Turning click on")
            ToBeClicked.current = true;
            Markers.forEach(marker=>{
                marker.remove()
            });

            if(routeId.current){
                console.log("CLEARING MAP")
                //map.current.removeLayer(routeId.current);
                //routeId.current = "";
                //Route.current = null;
            }
        }
        else if(path.substring("/map/tripinfo/")){
            if(!routeId.current){
                return
            }

            console.log(Route.current)
            var longitudes = []
            var latitudes = []
            Route.current["coordinates"].forEach(dest=>{
                longitudes.push(dest[0])
                latitudes.push(dest[1])
            });

            var longmax = Math.max(...longitudes)
            var longmin = Math.min(...longitudes)
            var latmax = Math.max(...latitudes)
            var latmin = Math.min(...latitudes)

            map.current.fitBounds([[longmin,latmin],[longmax,latmax]],{
                padding: {top: 10, bottom:510, left: 15, right: 5}
            });
        }
      },[pathName]);


    function DrawAllPoints(){
        axios.get('/Trip/FriendsTrips')
        .then(response => { 
            console.log(response.data)
            response.data.forEach(value=>{
                
                var marker = new ClickableMarker({"color":"#7BEFB2"}).setLngLat([value["longitude"],value["latitude"]]).onClick(()=>{
                    history.push("/map")
                    getTrip(value["tripid"], value["longitude"],value["latitude"]);
                }).addTo(map.current)
                setMarkers(Markers => [...Markers, marker]);
            }) 
        });
    }

    function getTrip(tripid, longitude, latitude){
        console.log(tripid)
        axios.get("/Trip/"+tripid.toString()).then(response=>{
            console.log(response.data)
            var geojson = JSON.parse(response.data.trip.tripData.description)
            Route.current = geojson
            addRoute()
            var destinations = response.data.trip.tripData.destionations
            var longitudes = []
            var latitudes = []
            destinations.forEach(dest=>{
                longitudes.push(dest["longitude"])
                latitudes.push(dest["latitude"])
            });

            var longmax = Math.max(...longitudes)
            var longmin = Math.min(...longitudes)
            var latmax = Math.max(...latitudes)
            var latmin = Math.min(...latitudes)

            map.current.fitBounds([[longmin,latmin],[longmax,latmax]],{
                padding: {top: 10, bottom:510, left: 15, right: 5}
            });
            history.push("/map/tripinfo/".concat(tripid))
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


    function onClick(e){
        
        if(!ToBeClicked.current){
            return;
        }

        getAdress(e["lngLat"]["lng"], e["lngLat"]["lat"])
        
        if(routeData.length == 0){
            console.log(routeData.length)
            return
        }

        var string = ""
        for(var i=0;i<routeData.length; i++){
            string = string + routeData[i].lng+","+ routeData[i].lat+";"
        }

        string = string + e["lngLat"]["lng"] + ","+e["lngLat"]["lat"];

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
