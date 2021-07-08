
import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import WhiteHeaderWrapper from '../boxes/WhiteHeaderWrapper';

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


import LoginButton from "../buttons/LoginButton";

import ScrollList from '../boxes/ScrollList';

import DateTimeField from '../inputFields/DateTimeField';

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        background-color: white;
    `
    const HeaderWrapper = styled(WhiteHeaderWrapper)`
        background-color: inherit;
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

function InsertTripInfo({setTripName, setTripTime, selectedUsers, setSelectedUsers}) {
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const [requestUsers, setRequestUser] = useState([])
    const [selectedUser, setSelectedUser] = useState();
    const [errorMessage, setErrorMessage] = useState(false)
    

    function searchResult(key){
        axios.get('user/search/'+key)
        .then(response => setRequestUser(response.data))
        console.log(requestUsers)
    }

    function addFriendToTrip(){
      //Hent ut brukernavnet som ligger i inputfielden
      //Lag en ny personbox-component som inneholder navnet du henter ut
      console.log(selectedUser)
        try{
            if (!selectedUsers.includes(selectedUser.username)){
                setSelectedUsers(selectedUsers => [...selectedUsers, selectedUser.username]);
            }else{
                setErrorMessage(true)         
                let timerId = setTimeout(() => {
                setErrorMessage(false);
                timerId = null;
            }, 4000);
            }
            console.log(selectedUsers)         
        }catch{
                setErrorMessage(true)         
                let timerId = setTimeout(() => {
                setErrorMessage(false);
                timerId = null;
            }, 4000);
        }
    
       
    }

    function removeFromTrip(item){
        //setSelectedUsers(selectedUsers => selectedUsers.splice(index, 1));
        setSelectedUsers(selectedUsers.filter(x => x !== item))
        console.log("clicked remove")
    }

    



    return(
        <CustomGreenBox>
           <HeaderWrapper title="Lag Tur" />
            <UserInputField placeholder="Navn" onChange={(e)=>setTripName(e.target.value)} />
            <DateTimeField />
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

                    {selectedUsers?.map((item, index) => 
                    <PersonBox title={item} imgPath="person.svg">
                        <FaTimes onClick={() => removeFromTrip(item)} style={{color:'red'}} />
                    </PersonBox>)}


                </LandingPageCategory>

                <ArrowButton title="Definer rute" onClick={()=>history.push(path.concat("/enterroute"))}>
                    <FaChevronRight />
                </ArrowButton>
                <CustomUnderlineButton onClick={()=>history.push(path.concat("/enterroute"))}>Lag</CustomUnderlineButton>
        </CustomGreenBox>
    )
}


function InsertTripRoute({routeData}) {
    const history = useHistory();
    let { path, url } = useRouteMatch();

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


function CreateTripPage() {
    const [tripName, setTripName] = useState("");
    const [tripTime, setTripTime] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([])

    const [routeData, setRouteData] = useState([]);
    console.log(routeData)

    let { path, url } = useRouteMatch();
    const history = useHistory();

    return (
        <Wrapper>
            <MapContainer className="MapContainer" routeData={routeData} setRouteData={setRouteData} />
            <Switch>
                <Route exact path={path}>
                    <InsertTripInfo setTripName={setTripName} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
                </Route>
                <Route path={path.concat("/enterroute")}>
                    <InsertTripRoute routeData={routeData}/>
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default CreateTripPage;
