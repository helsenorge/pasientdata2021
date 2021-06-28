import styled from "styled-components"
import ArrowButton from "../buttons/ArrowButton"

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

function TripComponent({name, time}){

    return(
        <Tripwrapper>
        <Trip>
            {name}
            <ArrowButton direction="right"/>
        </Trip>
        <TripTime>
            {time}
        </TripTime>
    </Tripwrapper>

    )
   
}

export default TripComponent