
import styled from 'styled-components';
import MapComponent from './MapComponent';
import SwipeableBottom from '../boxes/SwipeableBottom';

import LandingPageLink from '../buttons/LandingPageLink';

import { useHistory } from 'react-router';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #7BEFB2;
    width: inherit;
    `

const TopContainer = styled.div`
`

const MapContainer = styled(MapComponent)`
    height: 100%;
`

const SwipeableBottomStyle = {
    width: "inherit"
};

const SwipeableBottomTop = styled.div`
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SwipeableBottomContainer = styled.div`
    padding: 5px 0px 0px 30px;
    font-size: 22px;
`

function MapPage() {

    const history = useHistory();

    return (
        <Wrapper className="MapPageWrapper">
        <TopContainer className="TopContainer"></TopContainer>
        <MapContainer className="map-container" />
        <SwipeableBottom style={SwipeableBottomStyle}>
              <SwipeableBottomTop>
                Sveip opp
              </SwipeableBottomTop>
              <SwipeableBottomContainer className="SwipeableBottomContainer">
                    <LandingPageLink title="Lag tur" imgPath="map.svg" onClick={()=> history.push("/createTrip")} />
                    <LandingPageLink title="Mine venner" imgPath="team.svg" onClick={() => history.push("/myfriends")}/>
                    <LandingPageLink title="Legg til venner" imgPath="goal.svg" onClick={() => history.push("/addfriend")}/>
                    <LandingPageLink title="Turer" imgPath="running.svg" onClick={() => history.push("/trips")} />
                    <LandingPageLink title="Innstillinger" imgPath="settings.svg" onClick={() => history.push("/settings")} />
                </SwipeableBottomContainer>
        </SwipeableBottom>
        </Wrapper>
    )
}

export default MapPage
