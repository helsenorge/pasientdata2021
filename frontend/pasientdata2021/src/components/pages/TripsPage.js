import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";
import LandingPageCategory from "../boxes/LandingPageCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const OwnGreenBox = styled(GreenBoxRoundedCorner)`
    height: inherit;
`

const TripsContainer = styled.div`
display: flex;
flex-direction: column;
font-family: "Comfortaa";
justify-content: flex-start;
font-weight: bold;

`
const OtherTripsContainer = styled(TripsContainer)`
margin-top:30px;
`

function TripsPage(props){
    const [triprequests, setTriprequests] = useState();
    const [trips, setTrips] = useState();
    const history = useHistory();

    function getAllTrips(){
        axios.get('Trip/UserTrips')
            .then(response => setTrips(response.data))
        }

  
        function getAllTriprequests(){
            axios.get('Trip/AllTripRequests')
            .then(response => setTriprequests(response.data))
        }
        
        useEffect(() => {
            getAllTrips()
            getAllTriprequests()
        }, []);
    
    

    function acceptTripRequest(requestId){
        axios.post('/Trip/AcceptTripRequest/'+ requestId)
          .then( () => {
            getAllTriprequests()
            getAllTrips()
          });
          
      };
    
    function declineTripRequest(requestId){
    axios.post('/Trip/DeclineTripRequest/'+ requestId)
        .then( () => {
        getAllTriprequests()
        getAllTrips()
        });
        
    };

    return(
        <>
        <WhiteHeaderWrapper className="Turer" title="Turer" arrowButtonPath={"/map"} /> 
        <OwnGreenBox>
            <TripsContainer className= "TripsContainer">
                <LandingPageCategory title="Mine Turer"/>
                {trips?.map((item, index) =>
                    <TripComponent
                    key={"mytrip"+index}
                    name={item.name} 
                    time={new Date(item.tripDate).toLocaleString()}
                    onClick={()=>history.push("/specifictrip/".concat(item.id))}/>
                )}
                
                           
            </TripsContainer>


            <OtherTripsContainer>
                <LandingPageCategory title="Invitasjoner"/>
                {triprequests?.map((item, index) =>
                    <TripComponent 
                    key={"invitedtrip"+index}
                    name={item.name} 
                    time={item.tripDate} 
                    creator={item.nameCreator} 
                    invited={true} 
                    accept={() => acceptTripRequest(item.requestId)}
                    decline={() => declineTripRequest(item.requestId)} 
                    />
                )}   
                              
            </OtherTripsContainer>

        </OwnGreenBox>
        </>
    )
}

export default TripsPage;