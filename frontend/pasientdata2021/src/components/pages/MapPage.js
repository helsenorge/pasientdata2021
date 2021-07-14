
import styled from 'styled-components';
import SwipeableBottom from '../boxes/SwipeableBottom';

import LandingPageLink from '../buttons/LandingPageLink';

import { useHistory } from 'react-router';

import { useState } from 'react';
import ArrowButton from '../buttons/ArrowButton';
import FloatingButton from '../buttons/FloatingButton';


const SwipeableBottomStyle = {
    width: "inherit",
};

const SwipeableBottomTop = styled.div`
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SwipeableBottomContainer = styled.div`
    padding: 8px 0px 0px 30px;
    font-size: 22px;
`

const FloatingButtonCustom = styled(FloatingButton)`
    margin-top: 10px;
    padding-right: 20px;
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`

function MapPage() {
    const history = useHistory();
    const [open, setOpen] = useState(false)
    return (
        <>
        <FloatingButtonCustom className="FloatingButton" onClick={()=>history.push('/map/newtrip')} />
        <SwipeableBottom style={SwipeableBottomStyle} open={open} setOpen = {setOpen}>
              <SwipeableBottomTop onClick={()=>setOpen(!open)}>
                <ArrowButton direction="up"></ArrowButton>
              </SwipeableBottomTop>
              <SwipeableBottomContainer className="SwipeableBottomContainer">
                    <LandingPageLink title="Mine venner" imgPath="/team.svg" onClick={() => history.push("/myfriends")}/>
                    <LandingPageLink title="Legg til venner" imgPath="/goal.svg" onClick={() => history.push("/addfriend")}/>
                    <LandingPageLink title="Turer" imgPath="/running.svg" onClick={() => history.push("/trips")} />
                    <LandingPageLink title="Innstillinger" imgPath="/settings.svg" onClick={() => history.push("/settings")} />
                </SwipeableBottomContainer>
        </SwipeableBottom>
        </>
    )
}

export default MapPage

