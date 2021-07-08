
import styled from 'styled-components';
import MapComponent from './MapComponent';
import SwipeableBottom from '../boxes/SwipeableBottom';

import LandingPageLink from '../buttons/LandingPageLink';

import { useHistory } from 'react-router';

import { useState } from 'react';
import ArrowButton from '../buttons/ArrowButton';
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { makeStyles } from '@material-ui/core/styles';

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
const FloatButtonContainer = styled.div`
    position: fixed;
    top: inherit;
    margin-top: 20px;
    margin-left: 82%;
    color: #7BEFB2;
`

const useStyles = makeStyles((theme) => ({
    color: {
        color: "#7BEFB2",
        backgroundColor:"#7BEFB2",
    },
}));

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

    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false)

    return (
        <Wrapper className="MapPageWrapper">
        <TopContainer className="TopContainer"></TopContainer>
        <MapContainer className="map-container" />
        <FloatButtonContainer>
        <Fab className={classes.color} aria-label="add" size="large">
            <AddIcon style ={{ fontSize: 40, color: "black" }} onClick={() =>history.push("/createtrip")}/>
        </Fab>
        </FloatButtonContainer>
        <SwipeableBottom style={SwipeableBottomStyle} open={open} setOpen = {setOpen}>
              <SwipeableBottomTop onClick={()=>setOpen(!open)}>
                <ArrowButton direction="up"></ArrowButton>
              </SwipeableBottomTop>
              <SwipeableBottomContainer className="SwipeableBottomContainer">
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

