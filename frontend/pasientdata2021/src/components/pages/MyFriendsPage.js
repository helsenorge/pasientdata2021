import styled from "styled-components";
import FriendsBox from "../FriendsBox";
import AddButton from "../buttons/AddButton";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TextImgButton from "../buttons/TextImgButton";
import LandingPageCategory from "../boxes/LandingPageCategory";
import TripComponent from "../boxes/TripComponent";
import PopUpBox from "../boxes/PopUpBox";
import {FaTimes, FaCheck} from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";

import { useHistory } from "react-router"


const CustomTextImgButton = styled(TextImgButton)`
font-size:30px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
`


const GreenBoxWrapper = styled(GreenBoxRoundedCorner)`
  justify-content: top;
`
const CustomHeaderWrapper = styled(WhiteHeaderWrapper)`
  width: inherit;
  margin-left: -17px;
`

const FriendsBoxCustom = styled(FriendsBox)`
  margin-left: 10px;
  width: 363px;
  font-weight: 600;
`


const Icon = styled(FaCheck)`
font-size: 2em;
color: green;
margin-right: 7px;
`
const IconX = styled(FaTimes)`
font-size: 2em;
color: red;
`

function MyFriendsPage() {  
  const history = useHistory();
  const [ButtonPopup, setButtonPopUp] = useState(false);
  const [friends, setFriends] = useState([])
  const [friendRequest, setFriendRequest] = useState([])

  //Hent ut alle venneforspørsler i en liste(?)

  useEffect(() => {
    axios.post('Friend/GetAllFriendRequests')
        .then(response => setFriendRequest(response.data));
  }, []);

  //Render objekter etter hvor mange forespørsler som er i lista
  console.log(friendRequest)
  

  //Hent ut alle venner

  function GetAllFriends(){
    axios.get('Friend/GetAllFriends')
        .then(response => setFriends(response.data));
  }

  useEffect(() => {
    GetAllFriends()
}, []);


  


  // request for å fjrene venner

  function removeFriend(friendId){
    axios.post('/Friend/RemoveFriend/'+friendId)
      .then( () => {
        setButtonPopUp(false)
        GetAllFriendRequests()
        GetAllFriends()
      });
  }


  //Funksjoner for å legge til og fjerne forespørsler
  
  function GetAllFriendRequests(){
    axios.post('/Friend/GetAllFriendRequests')
        .then(response => setFriendRequest(response.data));
}

  useEffect(() => {
      GetAllFriendRequests()
  }, []);


  
  function removeRequest(requestId){
    axios.post('/friend/DeclineFriendRequest/'+requestId)
      .then( () => {
        setButtonPopUp(false)
        GetAllFriendRequests()
        GetAllFriends()
      });
      
  };
 
  function acceptRequest(requestId){
    axios.post('/friend/AcceptFriendRequest/'+requestId)
      .then( () => {
        setButtonPopUp(false)
        GetAllFriendRequests()
        GetAllFriends()
      });
      
  };
  

  function handleFriendRequest(requestId, address){
    axios.post(address + requestId)
      .then(setButtonPopUp(false));
  };



  return (
  <Wrapper className ="Wrapper">
    <CustomHeaderWrapper title="Mine Venner"> <AddButton onClick={() => history.push("/addfriend")} /> </CustomHeaderWrapper>
    <GreenBoxWrapper>
    {
      <ul>
        {friends.map((item) => <FriendsBoxCustom imgPath="person.svg" title = {item.name} >  
          <TextImgButton imgSrc ="3-vertical-dots.svg" onClick={() => setButtonPopUp(true)} />          
              <PopUpBox trigger = {ButtonPopup} setTrigger={setButtonPopUp}>
                <CustomTextImgButton imgSrc ="trash.svg" title = "Fjern Venn" onClick={()=> removeFriend(item.id)}></CustomTextImgButton>
              </PopUpBox>
            </FriendsBoxCustom>)}
        
      </ul>
    }
   
    
    
    <LandingPageCategory title="Venneforespørsler"/>


    {<ul>
      {friendRequest?.map(item => <TripComponent name={item?.userSender?.username} invited="True">
          <Icon onClick={()=>acceptRequest(item.id)}/>
          <IconX onClick={()=>removeRequest(item.id)}/>
      </TripComponent>
        
        )}
    </ul> } 

  </GreenBoxWrapper>
  </Wrapper>
)}
  

  
  

export default MyFriendsPage;