import styled from "styled-components"
import ArrowButton from "../buttons/ArrowButton"

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


function TripComponent({name, time, invited, children}){

        return(
        <Tripwrapper>

            <Trip>
                {name}
                <TripTime>
                    {time}
                </TripTime>
            </Trip>
            {
            invited ?
                    <div>
                        {children}
                    </div>
                
                :
                    <ArrowButton direction="right" />
            }

        </Tripwrapper>
        )

    
   
}

export default TripComponent