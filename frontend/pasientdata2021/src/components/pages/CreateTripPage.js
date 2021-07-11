
import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner';

import {FaTimes, FaChevronRight} from 'react-icons/fa'

import FriendsBox from '../FriendsBox';

import UnderlineButton from '../buttons/UnderlineButton';

import LandingPageCategory from '../boxes/LandingPageCategory';

import { useState } from 'react';

import { BrowserRouter as Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import AutocompleteField from '../inputFields/AutocompleteField';

import axios from 'axios';

import ArrowButton from "../buttons/ArrowButton"

import LoginButton from "../buttons/LoginButton";

import ScrollList from '../boxes/ScrollList';

import DateTimeField from '../inputFields/DateTimeField';


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

    const TopBox = styled.div`
        display: flex;
        justify-content: center;
        position: relative;
    `

    const Header = styled.h1`
        position: absolute;
        font-family:"Comfortaa";
        font-size: 30px;
    `

    const CustomArrowButton = styled(ArrowButton)`
        margin-right: auto;
        margin-left: 10px;
    `


function InsertTripInfo({tripName, setTripName, selectedDate, handleDateChange, selectedUsers, setSelectedUsers, createTripFunction, clearAndBack, created, setCreated}) {
    const history = useHistory();
    let { path } = useRouteMatch();

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
            if (!selectedUsers.includes(selectedUser) && selectedUser != null){
                setSelectedUsers(selectedUsers => [...selectedUsers, selectedUser]);
            }else{
                setErrorMessage(true)         
                setTimeout(() => {
                    setErrorMessage(false);
            }, 4000);
        }       
    }catch{
        setErrorMessage(true)         
        setTimeout(() => {
            setErrorMessage(false);
        }, 4000);
        }
    }
    
    
    function removeFromTrip(item){
        try{
        setSelectedUsers(selectedUsers.filter(x => x !== item))
        }catch{
            
        }
       
    }
    
    
    return(
        <CustomGreenBox>
            <TopBox>
                <CustomArrowButton direction="left" onClick={() => clearAndBack()}/>
                <Header>Lag tur</Header>
            </TopBox>
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
                    <PersonBox title={user?.username} imgPath="/person.svg" key={"addedfriend"+index}>
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
            history.goBack()
        }else{
            history.goBack()
        }
    }
    
    return(
        <SmallCustomGreenBox>
            <CenterText>Legg til stopp</CenterText>
                <ScrollList>
                    {routeData.map((data, index) => 
                        <LandingPageCategory key={"Checkpoint"+index} title={index+1 + ". " +data.address.split(",")[0]} />
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
    
    
    let { path } = useRouteMatch();
    const history = useHistory();
    
    function createTripFunction(setRouteError, setNameError){

        //Kjører bare denne koden om created er true, 
        //dvs navn og rute er definert

        if(created === true && tripName !== ""){
        
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
                history.push("/map/tripinfo/".concat(response.data))
            })
            setCreated(false)
    } 
   
    if(tripName === ""){
            setNameError(true)
            setTimeout(() => {
                setNameError(false);
            }, 4000);

    } 
    
    if(created !== true){
        setRouteError(true)
        setTimeout(() => {
            setRouteError(false);
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
