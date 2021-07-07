
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";

import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import AutocompleteField from "../inputFields/AutocompleteField";

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
  }

  //Legger til valgte brukerer som venn ved å bruke /Addfriend routen til backenden
  function sendFriendRequest(friendName){
    
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

        <AutocompleteField
          id="combo-box-demo"
          options={requestUsers}
          getOptionLabel={(option) => option.username}
          onChange={(event, value)=>setSelectedUser(value)}
          getOptionSelected = {(option, value) => option.username === value.username}
          style={{ width: 370 }}
          onInputChange={e=>searchResult(e.target.value)}
          inputLabel="Brukernavn"
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