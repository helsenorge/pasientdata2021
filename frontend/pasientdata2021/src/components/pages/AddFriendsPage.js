
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

  const [requestResult, setRequestResult] = useState({});
  const [userInput, setUserInput] = useState("");
  console.log(userInput)
  

  function sendData(friendName){
      console.log("SEND REQUEST WITH USERNAME: ".concat(friendName))
      
      axios.post('/Friend/AddFriend/',{friendName})
          .then(response => setRequestResult(response.data));
  }
  
    
    return (
      <>
      <WhiteHeaderWrapper title="Legg til venner" />
      <GreenBoxRoundedCorner>
        <UserInputField placeholder="Brukernavn" onChange={e=>setUserInput(e.target.value)}/>
        <LoginButton classname theme={LoginButtonTheme} onClick={()=>sendData(userInput)}>Legg til</LoginButton>
      </GreenBoxRoundedCorner>
      </>
    )
}

export default AddFriendsPage;