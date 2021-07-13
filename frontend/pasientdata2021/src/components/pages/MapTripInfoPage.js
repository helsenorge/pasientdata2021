import styled from "styled-components";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import LandingPageCategory from "../boxes/LandingPageCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import UnderlineButton from "../buttons/UnderlineButton";
import FriendsBox from "../FriendsBox";

import ScrollList from "../boxes/ScrollList";

import { useParams } from "react-router";

const CustomGreenBox = styled(GreenBoxRoundedCorner)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 500px;
`

const HeaderTitle = styled.a`
  font-family: "Comfortaa";
  font-size: 25px;
  color: black;
  font-weight: bold;
  text-align: center;
`

const HeaderDate = styled(HeaderTitle)`
    font-size: 16px;
    color: #6c757d;
`

const RouteText = styled.div`
    margin-left: 20px;
    margin-bottom: 5px;
`

const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
`

const CustomFriendsBox = styled(FriendsBox)`
    margin: 0px 0px 10px 20px;
`

const Category = styled(LandingPageCategory)`
    margin: 0px;
`

function MapTripInfoPage() {
    const history = useHistory();
    const [tripInfo, setTripInfo] = useState([]);
    let { tripId } = useParams();
    
    useEffect(()=>{
        axios.get('Trip/'+tripId)
            .then(response=> setTripInfo(response.data));
    }, [])

    return (
        <CustomGreenBox>
            <HeaderBox>
                <HeaderTitle>{tripInfo?.trip?.name}</HeaderTitle>
                <HeaderDate>{ new Date(tripInfo?.trip?.tripDate).toLocaleString("no-NO")?.slice(0,-3) }</HeaderDate>
            </HeaderBox>
            <Category title="Inviterte" />
                <ScrollList>
                    {tripInfo?.invited?.map(item => <CustomFriendsBox title={item.name} imgPath="/person.svg" />)}
                </ScrollList>
            <Category title="Rute" />
                <ScrollList>
                    {tripInfo?.trip?.tripData?.destionations?.map((item, index) => <RouteText>{index+1}. {item?.stopDestionation.split(",")[0]}</RouteText>)}
                </ScrollList>
            <UnderlineButton onClick={()=>history.push("/map")}>Ferdig</UnderlineButton>
        </CustomGreenBox>
        
    )
}

export default MapTripInfoPage
