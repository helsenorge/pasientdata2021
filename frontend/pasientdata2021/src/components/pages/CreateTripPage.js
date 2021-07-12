
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

import ArrowButton from "../buttons/ArrowButton"

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

   const NextButton = styled(FriendsBox)`
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
    
    const Subtitle = styled(LandingPageCategory)`
    margin-bottom:0px;
    `


function InsertTripInfo({tripName, setTripName, selectedDate, handleDateChange, selectedUsers, setSelectedUsers, createTripFunction, clearAndBack, created, setCreated}) {
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const [requestUsers, setRequestUser] = useState([])
    const [selectedUser, setSelectedUser] = useState();
    const [errorMessage, setErrorMessage] = useState(false)
    const [routeError, setRouteError] = useState()
    const [nameError, setNameError] = useState()
    
    
    
    
    
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
                console.log("CREATED", created)
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
           <ArrowButton direction="left" onClick={() => clearAndBack()}/>
            <UserInputField placeholder="Navn" onChange={(e)=>setTripName(e.target.value)} value={tripName}/>
            {nameError ? 
                <BottomText>
                   Turen må ha et navn.
               </BottomText>
               :
               ""}
            <DateTimeField selectedDate={selectedDate} handleDateChange={handleDateChange} />
            <Subtitle title="Inviter venn"/>                <AddToTripContainer>
                    <AutocompleteField
                        id="addFriendsField"
                        options={requestUsers}
                        getOptionLabel={(option) => option.username}
                        onChange={(event, value)=>setSelectedUser(value)}
                        getOptionSelected = {(option, value) => option.username === value.username}
                        style={{ width: 250}}
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
                <Subtitle title="Inviterte">

                    {selectedUsers?.map((user, index) => 
                    <PersonBox title={user.username} imgPath="/person.svg" id={"addedfriend"+index}>
                        <FaTimes onClick={() => removeFromTrip(user)} style={{color:'red'}} />
                    </PersonBox>)}


                </Subtitle>

                <NextButton title="Definer rute" onClick={()=>history.push(path.concat("/enterroute"))}>
                    <FaChevronRight />
                </NextButton>
                <CustomUnderlineButton onClick={()=>createTripFunction(setRouteError, setNameError)}>Lag</CustomUnderlineButton>
                {routeError ? 
                <BottomText>
                   Du må definere en rute.
               </BottomText>
                :
                 ""
                }
        </CustomGreenBox>
    )
}


function InsertTripRoute({routeData, created, setCreated}) {
    const history = useHistory();

    function createTrip(){
        if (routeData.length > 0){
        setCreated(true)
        console.log("CREATED", created)
        history.goBack()

        }else{
        history.goBack()
        console.log("Du må legge til punkter")

        }
        
        
    }
    
    return(
        <SmallCustomGreenBox>
            <CenterText>Legg til stopp</CenterText>
                <ScrollList>
                    {routeData.map((data, index) => 
                        <LandingPageCategory id={"Checkpoint"+index} title={index+1 + ". " +data.address.split(",")[0]} />
                        )}
                </ScrollList>
                <UnderlineButton onClick={() => createTrip()}>Ferdig</UnderlineButton>
        </SmallCustomGreenBox>
    )
}


function CreateTripPage({routeData, setRouteData, routeJson, setRouteJson, clearAndBack}) {
    const [tripName, setTripName] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedUsers, setSelectedUsers] = useState([])
    const [created, setCreated] = useState(null)
    
    const [createTripResponse, setCreateTripResponse] = useState();

    
    let { path, url } = useRouteMatch();
    const history = useHistory();
    
    function createTripFunction(setRouteError, setNameError){

        //Kjører bare denne koden om created er true, 
        //dvs navn og rute er definert

        if(created == true && tripName != ""){
        
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

            console.log("KJØRT")
            setCreated(false)
    } 
   
    if(tripName == ""){
            
        console.log("INGEN NAVN")
            setNameError(true)
            let timerId = setTimeout(() => {
                setNameError(false);
                timerId = null;
            }, 4000);

    } 
    
    if(created != true){
        
        console.log("DU MÅ DEFINERE RUTA  OG NAVN FØRST")
        setRouteError(true)
        let timerId = setTimeout(() => {
            setRouteError(false);
            timerId = null;
        }, 4000);
        
        //Sett en usestate som aktiverer en feilmelding til bruker
    }
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
                        clearAndBack={clearAndBack}
                        />
                </Route>
                <Route path={path.concat("/enterroute")}>
                    <InsertTripRoute
                    created = {created}
                    setCreated = {setCreated} 
                    routeData={routeData} 
                    />
                </Route>
            </Switch>
    )
}

export default CreateTripPage;
