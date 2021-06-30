import styled from "styled-components";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import MapComponent from "./MapComponent";
import LandingPageCategory from "../boxes/LandingPageCategory";
import FriendsBox from "../FriendsBox";

const NewMapComponent = styled(MapComponent)`
height: 350px;
`
const CenterText = styled.h2`
text-align: center;
margin-bottom: 5px;
`
const TimeStamp = styled(LandingPageCategory)`
text-align: center;
font-weight: bold;
`
const PersonBox = styled(FriendsBox)`
font-weight: bold;
`
const RouteBox = styled(FriendsBox)`

color: #6c757d;
margin-top: 0px;
margin-bottom: 0px;
padding-left: 10px;
`
const BottomText = styled.h2`
text-align: center;
margin-top: 60px;
color: #6c757d;
text-decoration: underline;
`

function TripInfo() {
    return(
        <>
        <NewMapComponent>

        </NewMapComponent>
        <GreenBoxRoundedCorner>
            <CenterText>
                Kveldstur
            </CenterText>
            <TimeStamp className ="TimeStamp" title="02.06.21 - 19:45"/>
            
            <LandingPageCategory title="Inviterte" />

            <PersonBox title="Torstein" imgPath="person.svg"/>
            <PersonBox title="Awalle" imgPath="person.svg"/>

            <LandingPageCategory title="Rute"/>

            <RouteBox className="" title="1.Nasjonalteateret" />
            <RouteBox className="" title="2.Cafe Skansen" />

            <BottomText>
                Ferdig
            </BottomText>

            
            

        </GreenBoxRoundedCorner>
        </>
    )
}

export default TripInfo