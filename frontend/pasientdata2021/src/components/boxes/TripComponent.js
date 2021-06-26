import styled from "styled-components"
import ArrowButton from "../buttons/ArrowButton"
import {FaTimes, FaCheck} from "react-icons/fa";

const Tripwrapper = styled.div`
display: flex;
padding-top: 10px;
padding-left: 30px;
align-items: center;
justify-content: space-between;
`

const TripTime = styled.a`
font-family: 'Comfortaa';
font-size: 0.35em;
color: rgba(0,0,0,.60);
`
const Trip = styled.div`
display: flex;
flex-direction:column;
font-family: 'Comfortaa';
font-size: 1.8em;
white-space: nowrap;
overflow:hidden;
max-width: 250px;
`

const Icon = styled(FaCheck)`
font-size: 1.4em;
color: "green";
margin-right: 2px;

`
const IconX = styled(FaTimes)`
font-size: 1.4em;
color: "red";

`





function TripComponent({name, time, invited}){

        return(
        <Tripwrapper>

            <Trip>
            {name}
            <TripTime>{time}</TripTime>
            </Trip>
            {
            invited ?
                    <div><Icon style = {{color:"green"}}/>
                    <IconX style={{color:"red"}} /></div>
                
                :
                    <ArrowButton direction="right" />
            }

        </Tripwrapper>
        )

    
   
}

export default TripComponent