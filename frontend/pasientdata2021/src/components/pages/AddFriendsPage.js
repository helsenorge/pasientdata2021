
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";

import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import { useState } from "react";
import axios from "axios";

const LoginButtonTheme = {
    marginTop: "40px"
}




function AddFriendsPage() {

  
  //Søker etter brukere
  const [requestUsers, setRequestUser] = useState({})
  const [requestResult, setRequestResult] = useState({});
  
    
  function searchResult(key){
    axios.get('user/search/'+key)
    .then(response => setRequestUser(response.data))
    console.log("FAEN")
    
  }
  
  console.log(requestUsers)
  //Legger til valgte brukerer som venn ved å bruke /Addfriend routen til backenden
  function sendFriendRequest(friendName){
    console.log("SEND REQUEST WITH USERNAME: "+ (friendName))
    
    axios.post('/Friend/AddFriend/'+ friendName)
        .then(response => setRequestResult(response.data))
        .catch(function (error) {
          // handle error
          console.log(error.response.data);
        })
}
  
    
    return (
      <>
      <WhiteHeaderWrapper title="Legg til venner" />
      <GreenBoxRoundedCorner>
        <UserInputField placeholder="Brukernavn" onChange={e=>searchResult(e.target.value)}/>

        <LoginButton classname theme={LoginButtonTheme} onClick={()=>sendFriendRequest(requestUsers[0]["id"])}>Legg til</LoginButton>
      </GreenBoxRoundedCorner>
      </>
    )
}

export default AddFriendsPage;