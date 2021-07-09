import MapPage from "./MapPage";

import MapComponent from "./MapComponent"

import CreateTripPage from "./CreateTripPage"

import styled from "styled-components"

import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useRouteMatch, useHistory, useParams } from 'react-router-dom';

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: ${props => props.path==="/map" ? "flex-start" : "flex-end"};
        height: 100%;
        background-color: white;
    `

   const MapContainer = styled(MapComponent)`
        height: 100%;
    `

function MapPageSwitch() {

    let { path, url } = useRouteMatch();
    const [routeData, setRouteData] = useState([]);
    const [routeJson, setRouteJson] = useState({})

    return (
        <Wrapper path={window.location.pathname}>
            <MapContainer className="MapContainer" routeData={routeData} setRouteData={setRouteData} setRouteJson={setRouteJson} />
            <Switch>
                <Route exact path={path}>
                    <MapPage />
                </Route>
                <Route path={path.concat("/newtrip")}>
                    <CreateTripPage routeData={routeData} setRouteData={setRouteData} setRouteJson={setRouteJson} />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default MapPageSwitch
