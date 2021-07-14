import MapPage from "./MapPage";

import MapComponent from "./MapComponent"

import CreateTripPage from "./CreateTripPage"

import styled from "styled-components"

import { useState } from 'react';

import MapTripInfoPage from "./MapTripInfoPage";

import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

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

    let { path } = useRouteMatch();
    const [routeData, setRouteData] = useState([]);
    const [routeJson, setRouteJson] = useState({})
    const history = useHistory();

    function back(){
        setRouteData([])
        setRouteJson([])
        history.goBack()
    }

    return (
        <Wrapper path={window.location.pathname}>
            <MapContainer className="MapContainer" routeData={routeData} setRouteData={setRouteData} setRouteJson={setRouteJson} />
            <Switch>
                <Route exact path={path}>
                    <MapPage />
                </Route>
                <Route path={path.concat("/newtrip")}>
                    <CreateTripPage routeData={routeData} setRouteData={setRouteData} routeJson={routeJson} setRouteJson={setRouteJson} clearAndBack={back}/>
                </Route>
                <Route path={path.concat("/tripinfo/:tripId")}>
                    <MapTripInfoPage />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default MapPageSwitch
