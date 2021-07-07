
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";

import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import { useState } from "react";
import axios from "axios";
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import styled from "styled-components";

const LoginButtonTheme = {
    marginTop: "40px"
}


const BottomText = styled.div`
    text-align: center;
    font-size: 20px;
    color: #6C757D;
`


function AddFriendsPage() {

  
  //Søker etter brukere
  const [requestUsers, setRequestUser] = useState([])
  const [requestResult, setRequestResult] = useState({});
  const [acceptMessage, setAcceptMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  
  const [selectedUser, setSelectedUser] = useState();
    
  function searchResult(key){
    axios.get('user/search/'+key)
    .then(response => setRequestUser(response.data))
    console.log(requestUsers)
    
  }
  
  console.log(requestUsers)
  //Legger til valgte brukerer som venn ved å bruke /Addfriend routen til backenden
  function sendFriendRequest(friendName){
    console.log("selectedUser: "+ (friendName.username))

    //Må tømme set
    
    axios.post('/Friend/AddFriend/'+ friendName.id)
        .then(response => {          
            setAcceptMessage(true)
            setErrorMessage(false)
        })
        .catch(function (error) {
          // handle error
          console.log(error.response.data);
          setErrorMessage(true)
          setAcceptMessage(false)
        })
}


    
    return (
      <>
      <WhiteHeaderWrapper title="Legg til venner" />
      <GreenBoxRoundedCorner>
       
          <Autocomplete
          id="combo-box-demo"
          options={requestUsers}
          getOptionLabel={(option) => option.username}
          onChange={(event, value)=>setSelectedUser(value)}
          getOptionSelected = {(option, value) => option.username === value.username}
          style={{ width: 370 }}
          renderInput={(params) => <TextField {...params} onChange={e=>searchResult(e.target.value)} label="Brukernavn" variant="outlined" />}
        />

        {errorMessage ? 
          <BottomText>
          Kunne ikke sende venneforspørselen. Du har allerede lagt til brukeren eller skrevet feil brukernavn.
          </BottomText> : ""
          }
        {acceptMessage ?
        <BottomText>
          venneforspørselen ble sendt!
        </BottomText> : ""

        }


    

        <LoginButton classname theme={LoginButtonTheme} onClick={()=>sendFriendRequest(selectedUser)}>Legg til</LoginButton>
      </GreenBoxRoundedCorner>
      </>
    )
}

export default AddFriendsPage;