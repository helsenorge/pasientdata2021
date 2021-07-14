import styled from "styled-components";
import AddButton from "../buttons/AddButton";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import LandingPageCategory from "../boxes/LandingPageCategory";
import TripComponent from "../boxes/TripComponent";

import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router"

import AccordionComponent from "../boxes/Accordion";
import Accordion from "react-bootstrap/esm/Accordion";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
`


const GreenBoxWrapper = styled(GreenBoxRoundedCorner)`
  justify-content: top;
`

const PlusButton = styled(AddButton)`
    margin-right: 15px;
`


function MyFriendsPage() {  
  const history = useHistory();
  const [friends, setFriends] = useState([])
  const [friendRequest, setFriendRequest] = useState([])


  useEffect(() => {
    axios.post('Friend/GetAllFriendRequests')
        .then(response => setFriendRequest(response.data));
  }, []);

  // Rendre objekter etter hvor mange forespørsler som er i lista
  

  // Hent ut alle venner
  function GetAllFriends(){
    axios.get('Friend/GetAllFriends')
        .then(response => setFriends(response.data));
  }

  useEffect(() => {
    GetAllFriends()
  }, []);


  


  // Request for å fjerne venner

  function removeFriend(friendId){
    axios.post('/Friend/RemoveFriend/'+friendId)
      .then( () => {
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
        GetAllFriendRequests()
        GetAllFriends()
      });
      
  };
 
  function acceptRequest(requestId){
    axios.post('/friend/AcceptFriendRequest/'+requestId)
      .then( () => {
        GetAllFriendRequests()
        GetAllFriends()
      });
      
  };
  

  return (
  <Wrapper className ="Wrapper">

    <WhiteHeaderWrapper title="Mine Venner" showChildren={true}>
       <PlusButton onClick={() => history.push("/addfriend")} />
    </WhiteHeaderWrapper>

    <GreenBoxWrapper>
      <Accordion>
        {friends?.map((item, index) =>
          <AccordionComponent
          key={"friend"+index}
          children = {item.name}
          eventKey ={index.toString()} 
          trashImg="trash.svg"
          profileImg="person.svg"
          arrowImg = "arrowdown.svg"
          title="Fjern Venn" 
          removeFunction={()=> removeFriend(item.id)} />
        )}
      </Accordion>
      


    <LandingPageCategory title="Venneforespørsler"/>

      {friendRequest?.map((item, index) => <TripComponent key={"friendrequest"+index} className="TripComponent" name={item?.userSender?.username} invited="true" accept={() => acceptRequest(item.id)} decline={() => removeRequest(item.id)} >
          
      </TripComponent>
      )}
      
  </GreenBoxWrapper>
  </Wrapper>
)}
  

  
  

export default MyFriendsPage;