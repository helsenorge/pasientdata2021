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
    
    useEffect(() => {
        axios.get('Trip/'+tripId)
            .then(response => setTripInfo(response.data));
        
        axios.get('Trip/AllAcceptedUsers/'+tripId)
            .then(response => setTripfriends(response.data));
        
        axios.get('Trip/AllInvitedUsers/'+tripId)
            .then(response => setInvited(response.data));
    }, [tripId]);

    function DeleteTrip(){
        axios.delete('Trip/'+tripId)
            .then(history.push("/trips"));
    }

    return(
        <>
            <OwnWhiteHeaderWrapper className="WhiteHeaderWrapper" title={tripInfo?.trip?.name} />
                <TimeContainer>
                    <OwnLandingPageCategory title={ new Date(tripInfo?.trip?.tripDate).toLocaleString("no-NO")?.slice(0,-3) } />
                </TimeContainer>
                { tripInfo?.isCreator ? 
                    <OptionsContainer>
                        <EditTripButton title="Rediger"/>
                        <DeleteTripButton title="Slett" onClick={()=> DeleteTrip()}/>
                    </OptionsContainer>
                    :
                    ""
                }
        
                <OwnGreenBox>
                <LandingPageCategory title="Kommer"/>
                {tripFriends?.map((item, index) => <TripComponent className="TripComponent" name={item.username} key={"coming"+index}/>)}
                <LandingPageCategory title="Inviterte" />
                {tripInvited?.map((item, index) => <TripComponent className="TripComponent" name={item.username} key={"invited"+index}/>)}
                </OwnGreenBox>

        </>
    )
}

export default SpecificTripPage;