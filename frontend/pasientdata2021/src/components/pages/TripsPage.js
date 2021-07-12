import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";
import LandingPageCategory from "../boxes/LandingPageCategory";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";


const OwnGreenBox = styled(GreenBoxRoundedCorner)`
height: 100%;
`

const SubTitle = styled.a`
    color: rgba(0,0,0,.87);
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







function TripsPage(){

    const [triprequests, setTriprequests] = useState();
    const [trips, setTrips] = useState();
    const history = useHistory();

    function getAllTrips(){
        axios.get('Trip/UserTrips')
            .then(response => setTrips(response.data))
            console.log("Turer:",trips)
        }
    
        
        function getAllTriprequests(){
            axios.get('Trip/AllTripRequests')
            .then(response => setTriprequests(response.data))
            console.log("Turforespørsler:",triprequests)
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
            console.log("HVASKJER")
          });
          
      };
    
    function declineTripRequest(requestId){
    axios.post('/Trip/DeclineTripRequest/'+ requestId)
        .then( () => {
        getAllTriprequests()
        getAllTrips()
        console.log("HVASKJER")
        });
        
    };

    return(
        <>
        <WhiteHeaderWrapper className="Turer" title="Turer">
            
        </WhiteHeaderWrapper>
        <OwnGreenBox>
            <TripsContainer className= "TripsContainer">
                <LandingPageCategory title="Mine Turer"/>
                {trips?.map((item) =>
                    <TripComponent 
                    name={item.name} 
                    time={new Date(item.tripDate).toLocaleString()}
                    onClick={()=>history.push("/specifictrip/".concat(item.id))}/>
                )}
                
                           
            </TripsContainer>


            <OtherTripsContainer>
                <LandingPageCategory title="Invitasjoner"/>
                {triprequests?.map((item) =>
                    <TripComponent 
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