
import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import WhiteHeaderWrapper from '../boxes/WhiteHeaderWrapper';

import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner';

import {FaTimes, FaChevronRight} from 'react-icons/fa'

import FriendsBox from '../FriendsBox';

import UnderlineButton from '../buttons/UnderlineButton';

import LandingPageCategory from '../boxes/LandingPageCategory';

import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, useRouteMatch, useHistory, useParams } from 'react-router-dom';

import AutocompleteField from '../inputFields/AutocompleteField';

import axios from 'axios';


import LoginButton from "../buttons/LoginButton";

import ScrollList from '../boxes/ScrollList';

import DateTimeField from '../inputFields/DateTimeField';

import MapPage from './MapPage';


    const HeaderWrapper = styled(WhiteHeaderWrapper)`
        background-color: inherit;
    `

    const SubTitle = styled.a`
        color: rgba(0,0,0,.87);
    `

    const CenterText = styled.h2`
        text-align: center;
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
        height: 250px;
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
   const AddToTripButton = styled(LoginButton)`
        width:100px;
        height: auto ;
        margin-left: 30px;
   `
   const AddToTripContainer = styled.div`
        display: flex;
   `
    const BottomText = styled.div`
    text-align: center;
    font-size: 20px;
    color: #6C757D;
    
`

function InsertTripInfo({tripName, setTripName, selectedDate, handleDateChange, selectedUsers, setSelectedUsers, createTripFunction}) {
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const [requestUsers, setRequestUser] = useState([])
    const [selectedUser, setSelectedUser] = useState();
    const [errorMessage, setErrorMessage] = useState(false)
    
    

    function searchResult(key){
        if (key){
            axios.get('Friend/SearchFriends/'+key)
            .then(response => setRequestUser(response.data))
        }
    }

    function addFriendToTrip(){
      //Hent ut brukernavnet som ligger i inputfielden
      //Lag en ny personbox-component som inneholder navnet du henter ut
        try{
            if (!selectedUsers.includes(selectedUser)){
                setSelectedUsers(selectedUsers => [...selectedUsers, selectedUser]);
            }else{
                setErrorMessage(true)         
                let timerId = setTimeout(() => {
                setErrorMessage(false);
                timerId = null;
            }, 4000);
            }       
        }catch{
                setErrorMessage(true)         
                let timerId = setTimeout(() => {
                setErrorMessage(false);
                timerId = null;
            }, 4000);
        }
    }

    
    function removeFromTrip(item){
        setSelectedUsers(selectedUsers.filter(x => x !== item))
    }

    return(
        <CustomGreenBox>
           <HeaderWrapper title="Lag Tur" />
            <UserInputField placeholder="Navn" onChange={(e)=>setTripName(e.target.value)} value={tripName}/>
            <DateTimeField selectedDate={selectedDate} handleDateChange={handleDateChange} />
            <LandingPageCategory title="Inviterte">
                <AddToTripContainer>
                    <AutocompleteField
                        id="addFriendsField"
                        options={requestUsers}
                        getOptionLabel={(option) => option.username}
                        onChange={(event, value)=>setSelectedUser(value)}
                        getOptionSelected = {(option, value) => option.username === value.username}
                        style={{ width: 250 }}
                        onInputChange={e=>searchResult(e.target.value)}
                        inputLabel="Brukernavn"
                    />  
                    <AddToTripButton onClick={()=> addFriendToTrip()} >Legg til</AddToTripButton>
                    
                </AddToTripContainer>

                    {errorMessage ? 
                        <BottomText>
                        Brukeren finnes ikke eller du har allerede lagt dem til i turen.
                        </BottomText> : ""
                    }

                    {selectedUsers?.map((user, index) => 
                    <PersonBox title={user.username} imgPath="person.svg" id={"addedfriend"+index}>
                        <FaTimes onClick={() => removeFromTrip(user)} style={{color:'red'}} />
                    </PersonBox>)}


                </LandingPageCategory>

                <ArrowButton title="Definer rute" onClick={()=>history.push(path.concat("/enterroute"))}>
                    <FaChevronRight />
                </ArrowButton>
                <CustomUnderlineButton onClick={()=>createTripFunction()}>Lag</CustomUnderlineButton>
        </CustomGreenBox>
    )
}


function InsertTripRoute({routeData}) {
    const history = useHistory();

    return(
        <SmallCustomGreenBox>
            <CenterText>Legg til stopp</CenterText>
                <ScrollList>
                    {routeData.map((data, index) => 
                        <LandingPageCategory id={"Checkpoint"+index} title={index+1 + ". " +data.address.split(",")[0]} />
                    )}
                </ScrollList>
                <UnderlineButton onClick={()=>history.goBack()}>Ferdig</UnderlineButton>
        </SmallCustomGreenBox>
    )
}

function CreateTripPage({routeData, setRouteData, routeJson, setRouteJson}) {
    const [tripName, setTripName] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedUsers, setSelectedUsers] = useState([])

    const [createTripResponse, setCreateTripResponse] = useState();


    let { path, url } = useRouteMatch();
    const history = useHistory();

    function createTripFunction(){
        let friendsIds = selectedUsers.map(user=>user.id)
        let destinations = routeData.map((point, index) => {
            return {"destination":point.address, "number":index+1, "longitude":point.lng, "latitude":point.lat}
        })
        
        let createTripBody = {
            "friendsIds": friendsIds,
            "name": tripName,
            "date": selectedDate,
            "routeDescription": JSON.stringify(routeJson),
            "destinations": destinations
        }
        
        axios.post('Trip', createTripBody)
        .then(response => {
            setCreateTripResponse(response.data)
            history.push("/trips")
        })
    }
    
    return (
            <Switch>
                <Route exact path={path}>
                    <InsertTripInfo
                        tripName={tripName}
                        setTripName={setTripName}
                        selectedUsers={selectedUsers}
                        setSelectedUsers={setSelectedUsers}
                        selectedDate={selectedDate}
                        handleDateChange={handleDateChange}
                        createTripFunction={createTripFunction}
                    />
                </Route>
                <Route path={path.concat("/enterroute")}>
                    <InsertTripRoute routeData={routeData} />
                </Route>
            </Switch>
    )
}

export default CreateTripPage;
