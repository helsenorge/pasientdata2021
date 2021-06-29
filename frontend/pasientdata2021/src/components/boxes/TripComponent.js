import styled from "styled-components"
import ArrowButton from "../buttons/ArrowButton"
import {FaTimes, FaCheck} from "react-icons/fa";

const Tripwrapper = styled.div`
padding-top: 10px;
padding-left: 30px;
`

const Trip = styled.div`
display: flex;
font-family: 'Comfortaa';
font-size: 1.8em;
justify-content: space-between;
`
const TripTime = styled.a`
font-family: 'Comfortaa';
font-size: 0.7em;
color: rgba(0,0,0,.60);
`
const InvitedTrip = styled.div`
display: flex;
font-family: 'Comfortaa';
font-size: 1.8em;
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
max-width: 100px;
text-overflow: ellipsis;
`


function TripComponent({name, time, invited}){

    if(invited){
        return(
        <Tripwrapper>
        <InvitedTrip>
        {name}
            <FaCheck style = {{color:"green", marginLeft:"150px", marginRight:"10px"}}/>
            <FaTimes style={{color:"red"}} />
        </InvitedTrip>
        <TripTime>
            {time}
        </TripTime>
    </Tripwrapper>
        )
    }else{
        return(
            <Tripwrapper>
            <Trip>
                <TextBox className = "TextBox">
                {name}
                </TextBox>
                <ArrowButton direction="right"/>
            </Trip>
            <TripTime>
                {time}
            </TripTime>
        </Tripwrapper>
    
        )
    }

    
   
}

export default TripComponent