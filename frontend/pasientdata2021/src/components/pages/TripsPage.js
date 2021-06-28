import styled from "styled-components";
import ArrowButton from "../buttons/ArrowButton";
import {FaTimes, FaCheck} from "react-icons/fa";

const TopWrapper = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  padding: 10px 30px 0px 30px;
`

const BottomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #7BEFB2;
  padding: 10px 30px 130px 10px;
  border-radius: 0px 50px 0px 0px;
  width: auto;
  
`
const HeaderTitle = styled.a`
  display:flex ;
  font-family: "Comfortaa";
  font-size: 30px;
  color: black;
  justify-content:"flex-start";
`
const SubTitle = styled.a`
    color: rgba(0,0,0,.87);
   `
const Title = styled.a`
margin-left: 20px;
`
const TripsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-family: "Comfortaa";
justify-content: flex-start;
font-weight: bold;
padding: 0px 50px 0px 0px;
`
const OtherTripsContainer = styled(TripsContainer)`
margin-top:30px;
`
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
const InvitedTrip = styled.div`
display: flex;
font-family: 'Comfortaa';
font-size: 1.8em;

`

const TripTime = styled.a`
    font-family: 'Comfortaa';
    
    font-size: 0.7em;
    color: rgba(0,0,0,.60);
`


function TripsPage(){
    return(
        <>
        <TopWrapper className="Turer">
            <HeaderTitle className="HeaderTitle">
                <ArrowButton direction="left"/>
                <Title>Turer</Title>
            </HeaderTitle>
        </TopWrapper>
        <BottomWrapper>
            <TripsContainer className= "TripsContainer">
                <SubTitle className = "SubTitle">
                Mine Turer
                </SubTitle>
                <Tripwrapper>
                    <Trip>
                        Lørdagstur
                        <ArrowButton direction="right"/>
                    </Trip>
                    <TripTime>
                        25.06.21 - 12:30
                    </TripTime>
                </Tripwrapper>
                
                <Tripwrapper>
                    <Trip>
                        Lørdagstur
                        <ArrowButton direction="right"/>
                    </Trip>
                    <TripTime>
                        25.06.21 - 12:30
                    </TripTime>
                </Tripwrapper>

                <Tripwrapper>
                    <Trip>
                        Lørdagstur
                        <ArrowButton direction="right"/>
                    </Trip>
                    <TripTime>
                        25.06.21 - 12:30
                    </TripTime>
                </Tripwrapper>
                
            </TripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Andre turer
                </SubTitle>
                <Tripwrapper>
                        <Trip>
                            Kveldstur
                            <ArrowButton direction="right"/>
                        </Trip>
                        <TripTime>
                            26.06.21 - 19:45
                        </TripTime>
                </Tripwrapper>

                <Tripwrapper>
                        <Trip>
                            Kveldstur
                            <ArrowButton direction="right"/>
                        </Trip>
                        <TripTime>
                            26.06.21 - 19:45
                        </TripTime>
                </Tripwrapper>

                <Tripwrapper>
                        <Trip>
                            Kveldstur
                            <ArrowButton direction="right"/>
                        </Trip>
                        <TripTime>
                            26.06.21 - 19:45
                        </TripTime>
                </Tripwrapper>

            </OtherTripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Invitasjoner
                </SubTitle>
                <Tripwrapper>
                        <InvitedTrip>
                            Kveldstur
                            <FaCheck style = {{color:"green", marginLeft:"150px", marginRight:"10px"}}/>
                            <FaTimes style={{color:"red"}} />
                        </InvitedTrip>
                        <TripTime>
                            26.06.21 - 19:45
                        </TripTime>
                </Tripwrapper>

                <Tripwrapper>
                        <InvitedTrip>
                            Kveldstur
                            <FaCheck style = {{color:"green", marginLeft:"150px", marginRight:"10px"}}/>
                            <FaTimes style={{color:"red"}} />
                        </InvitedTrip>
                        <TripTime>
                            26.06.21 - 19:45
                        </TripTime>
                </Tripwrapper>


            </OtherTripsContainer>
        </BottomWrapper>
        </>
    )
}

export default TripsPage;