import styled from "styled-components"
import ArrowButton from "../buttons/ArrowButton"
import {FaTimes, FaCheck} from "react-icons/fa";

const Tripwrapper = styled.div`
display: flex;
padding-top: 10px;
padding-left: 30px;
align-items: flex-start;
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
font-size: 2em;
color: green;
margin-right: 7px;
`
const IconX = styled(FaTimes)`
font-size: 2em;
color: red;
`

function TripComponent({name, time, invited, children, accept, decline, creator, onClick}){

        return(
        <Tripwrapper onClick={onClick} >

            <Trip>
                {name}
                <TripTime>
                    {time}
                </TripTime>
                {
                    invited ? 
                    <TripTime>
                       {creator}
                    </TripTime> :
                    ""
                }
            </Trip>
            {
            invited ?
                    <div>
                        {children}
                        <Icon onClick={accept}/>
                        <IconX onClick={decline}/>
                    </div>
                
                :
                    <ArrowButton direction="right" />
            }

        </Tripwrapper>
        )

    
   
}

export default TripComponent