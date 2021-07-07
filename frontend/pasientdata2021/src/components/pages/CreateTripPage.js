
import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import MapComponent from './MapComponent';

import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner';

import {FaTimes, FaChevronRight} from 'react-icons/fa'

import FriendsBox from '../FriendsBox';

import UnderlineButton from '../buttons/UnderlineButton';

import LandingPageCategory from '../boxes/LandingPageCategory';

import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useRouteMatch, useHistory, useParams } from 'react-router-dom';

import AutocompleteField from '../inputFields/AutocompleteField';

import axios from 'axios';

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        background-color: white;
    `

    const SubTitle = styled.a`
        color: rgba(0,0,0,.87);
    `

    const CenterText = styled.h2`
        text-align: center;
    `

   const MapContainer = styled(MapComponent)`
        height: 100%;
    `

    const CustomGreenBox = styled(GreenBoxRoundedCorner)`
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 600px;
    `

    const SmallCustomGreenBox = styled(CustomGreenBox)`
        height: 200px;
    `

   const PersonBox = styled(FriendsBox)`
        justify-content: space-evenly;
        margin: 20px 0px 0px 0px;
   `

   const ArrowButton = styled(FriendsBox)`
        justify-content: space-between;
        margin: 30px 0px 20px 0px;
   `

   const CustomUnderlineButton = styled(UnderlineButton)`
        align-self: flex-end;
   `


function InsertTripInfo({setTripName, setTripTime}) {
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const [requestUsers, setRequestUser] = useState([])
    const [selectedUser, setSelectedUser] = useState();

    function searchResult(key){
        axios.get('user/search/'+key)
        .then(response => setRequestUser(response.data))
    }

    return(
        <CustomGreenBox>
            <CenterText>Lag Tur</CenterText>
            <UserInputField placeholder="Navn" onChange={(e)=>setTripName(e.target.value)} />
            <UserInputField placeholder="Dato"/>
            <LandingPageCategory title="Inviterte">
                <AutocompleteField
                    id="addFriendsField"
                    options={requestUsers}
                    getOptionLabel={(option) => option.username}
                    onChange={(event, value)=>setSelectedUser(value)}
                    getOptionSelected = {(option, value) => option.username === value.username}
                    style={{ width: 370 }}
                    onInputChange={e=>searchResult(e.target.value)}
                    inputLabel="Brukernavn"
                />
        
                    <PersonBox title="Torstein" imgPath="person.svg">
                        <FaTimes style={{color:'red'}} />
                    </PersonBox>

                    <PersonBox title="Awalle" imgPath="person.svg">
                        <FaTimes style={{color:'red'}} />
                    </PersonBox>

                </LandingPageCategory>

                <ArrowButton title="Definer rute" onClick={()=>history.push(path.concat("/enterroute"))}>
                    <FaChevronRight />
                </ArrowButton>
                <CustomUnderlineButton onClick={()=>history.push(path.concat("/enterroute"))}>Lag</CustomUnderlineButton>
        </CustomGreenBox>
    )
}




function InsertTripRoute() {
    const history = useHistory();
    let { path, url } = useRouteMatch();

    return(
        <SmallCustomGreenBox>
            <CenterText>Legg til stopp</CenterText>
                <LandingPageCategory title="1. Nasjonalteateret" />
                <UnderlineButton onClick={()=>history.goBack()}>Ferdig</UnderlineButton>
        </SmallCustomGreenBox>
    )
}


function CreateTripPage() {
    const [tripName, setTripName] = useState("");
    const [tripTime, setTripTime] = useState("");
    const [invitedFriends, setInvitedFriends] = useState("")

    let { path, url } = useRouteMatch();
    const history = useHistory();

    return (
        <Wrapper>
            <MapContainer className="MapContainer" />
            <Switch>
                <Route exact path={path}>
                    <InsertTripInfo setTripName={setTripName}/>
                </Route>
                <Route path={path.concat("/enterroute")}>
                    <InsertTripRoute/>
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default CreateTripPage;
