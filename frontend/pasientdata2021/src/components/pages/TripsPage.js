import styled from "styled-components";
import ArrowButton from "../buttons/ArrowButton";
import {FaTimes, FaCheck} from "react-icons/fa";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";


const OwnGreenBox = styled(GreenBoxRoundedCorner)`

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
font-family: "Comfortaa";
justify-content: flex-start;
font-weight: bold;

`
const OtherTripsContainer = styled(TripsContainer)`
margin-top:30px;
`







function TripsPage(){
    return(
        <>
        <WhiteHeaderWrapper className="Turer" title="Turer">
            
        </WhiteHeaderWrapper>
        <OwnGreenBox>
            <TripsContainer className= "TripsContainer">
                <SubTitle className = "SubTitle">
                Mine Turer
                </SubTitle>
                <TripComponent name="Dagstur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Ettermiddagstur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Hardtur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Ture" time="09.05.1998 - 11:00"/>                            
            </TripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Andre turer
                </SubTitle>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Turrrrrrrrrrrrrrrrrrrrr" time="09.05.1998 - 11:00"/>
                <TripComponent name="Annen Tur" time="09.05.1998 - 11:00"/>
            </OtherTripsContainer>

            <OtherTripsContainer>
                <SubTitle className = "SubTitle">
                    Invitasjoner
                </SubTitle>
                <TripComponent name = "Kvelsturennnnnnnnnnnnhelvettennnnn" time="På kvelden da.." invited="True"/>
               


            </OtherTripsContainer>
        </OwnGreenBox>
        </>
    )
}

export default TripsPage;