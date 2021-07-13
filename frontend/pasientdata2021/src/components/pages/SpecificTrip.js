import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";
import LandingPageCategory from "../boxes/LandingPageCategory";

import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import {useParams} from "react-router-dom";
import TextImgButton from "../buttons/TextImgButton";


const OwnGreenBox = styled(GreenBoxRoundedCorner)`
    height: 100%;
`
const OwnWhiteHeaderWrapper = styled(WhiteHeaderWrapper)`
`
const OwnLandingPageCategory = styled(LandingPageCategory)`
    justify-content: center;
    font-weight: bold;
    font-family:"Comfortaa";
`
const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
`
const OptionsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
`

const DeleteTripButton = styled(TextImgButton)`
    font-weight: bolder;
    font-family:"Comfortaa";
    color: #B23B3B;
    background-color: white;
    font-size: 17px;
    margin: 0px;
`

const EditTripButton = styled(DeleteTripButton)`
    font-weight: bolder;
    font-family:"Comfortaa";
    color: grey;
`


function SpecificTripPage(){
    const [tripInfo, setTripInfo] = useState({})
    const [tripFriends, setTripfriends] = useState([])
    const [tripInvited, setInvited] = useState([])

    const history = useHistory();
    
    let { tripId } = useParams();
    
    function TripDetails(){
        axios.get('Trip/'+tripId)
            .then(response=> {
                setTripInfo(response.data)

            });
    }

    function TripFriends(){
        axios.get('Trip/AllAcceptedUsers/'+tripId)
            .then(response=> setTripfriends(response.data));
    }

    function TripInvited(){
        axios.get('Trip/AllInvitedUsers/'+tripId)
            .then(response=> setInvited(response.data));
    }

    useEffect(() => {
        TripDetails();
        TripFriends();
        TripInvited();
    }, []);

    function DeleteTrip(){
        axios.delete('Trip/'+tripId)
            .then(history.push("/trips"));
    }

    return(
        <>
            <OwnWhiteHeaderWrapper className = "WhiteHeaderWrapper" title={tripInfo?.trip?.name} />
                <TimeContainer>
                    <OwnLandingPageCategory title={ new Date(tripInfo?.trip?.tripDate).toLocaleString("no-NO")?.slice(0,-3) } />
                </TimeContainer>
                { (tripInfo?.creator?.username === JSON.parse(localStorage.getItem("user")).username) ? 
                    <OptionsContainer>
                        <EditTripButton title="Rediger"/>
                        <DeleteTripButton title="Slett" onClick={()=> DeleteTrip()}/>
                    </OptionsContainer>
                    :
                    ""
                }
        
                <OwnGreenBox>
                <LandingPageCategory title="Kommer"/>
                {tripFriends?.map(item => <TripComponent className="TripComponent" name={item.username} />)}
                <LandingPageCategory title="Inviterte" />
                {tripInvited?.map(item => <TripComponent className="TripComponent" name={item.username} />)}
                </OwnGreenBox>

        </>
    )
}

export default SpecificTripPage;