import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";
import { useState, useEffect } from "react";
import axios from "axios";


const OwnGreenBox = styled(GreenBoxRoundedCorner)`
height: auto;
`

const SubTitle = styled.a`
    color: rgba(0,0,0,.87);
   `
const TripsContainer = styled.div`
display: flex;
flex-direction: column;
font-family: "Comfortaa";
justify-content: flex-start;
font-weight: bold;

`
const OtherTripsContainer = styled(TripsContainer)`
margin-top:30px;
`







function TripsPage(){

    const [trips, setTrips] = useState();

    function getAllTrips(){
    axios.get('Trip/AllTripRequests')
    .then(response => setTrips(response.data))
    }

    useEffect(() => {
        getAllTrips()
      }, []);
    
      console.log("Turer:",trips)

    return(
        <>
        <WhiteHeaderWrapper className="Turer" title="Turer">
            
        </WhiteHeaderWrapper>
        <OwnGreenBox>
            <TripsContainer className= "TripsContainer">
                <SubTitle className = "SubTitle">
                Mine Turer
                </SubTitle>
                <TripComponent name="Dagstur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Ettermiddagstur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Hardtur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Ture" time="09.05.1998 - 11:00"/>                            
            </TripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Andre turer
                </SubTitle>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Turrrrrrrrrrrrrrrrrrrrr" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
            </OtherTripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Invitasjoner
                </SubTitle>
                <TripComponent name = "Kvelsturennnnnnnnn" time="På kvelden da.." invited="True"/>
               


            </OtherTripsContainer>
        </OwnGreenBox>
        </>
    )
}

export default TripsPage;