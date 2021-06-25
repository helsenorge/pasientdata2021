
import styled from 'styled-components';
import MapComponent from './MapComponent';
import SwipeableBottom from '../SwipeableBottom';

import LandingPageLink from '../LandingPageLink';

function MapPage() {
   

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #7BEFB2;
        width: inherit;
        `

    const TopContainer = styled.div`
        `

    const BottomContainer = styled.div`
        height: 200px;
        background-color: white;
        border-radius: 0px 50px 0px 0px;
        margin-top: 5px;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        padding: 10px;
    `

    const MapContainer = styled(MapComponent)`
        height: 100%;
    `

    const SwipeableBottomStyle = {
        width: "inherit",
    };

    const SwipeableBottomTop = styled.div`
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const SwipeableBottomContainer = styled.div`
        padding: 5px 0px 0px 30px;
        font-size: 22px;
    `

    return (
        <Wrapper className="MapPageWrapper">
        <TopContainer className="TopContainer"></TopContainer>
        <MapContainer className="map-container" />
        <SwipeableBottom style={SwipeableBottomStyle}>
              <SwipeableBottomTop>
                Sveip opp
              </SwipeableBottomTop>
              <SwipeableBottomContainer className="SwipeableBottomContainer">
                    <LandingPageLink title="Mine venner" imgPath="team.svg" />
                    <LandingPageLink title="Legg til venner" imgPath="goal.svg" />
                    <LandingPageLink title="Turer" imgPath="running.svg" />
                    <LandingPageLink title="Innstillinger" imgPath="settings.svg" />
                </SwipeableBottomContainer>
        </SwipeableBottom>
        </Wrapper>
    )
}

export default MapPage
