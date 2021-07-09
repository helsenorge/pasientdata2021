import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TripComponent from "../boxes/TripComponent";
import LandingPageCategory from "../boxes/LandingPageCategory";

import { useState } from "react";


const OwnGreenBox = styled(GreenBoxRoundedCorner)`
height: 100%;
`
const OwnWhiteHeaderWrapper = styled(WhiteHeaderWrapper)`
flex-wrap:wrap;
`
const OwnLandingPageCategory = styled(LandingPageCategory)`
justify-content: center;
font-weight: bold;
font-family:"Comfortaa";
`
const TimeContainer = styled.div`
display: flex;
justify-content: center;
`
const OptionsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`
const EditTripButton = styled(LandingPageCategory)`
    font-weight: bolder;
    font-family:"Comfortaa";
`
const DeleteTripButton = styled(LandingPageCategory)`
    font-weight: bolder;
    font-family:"Comfortaa";
    color: #B23B3B;
`

function SpecificTripPage(){
    const [creator, setCreator] = useState(true)

    return(
        <>
            <OwnWhiteHeaderWrapper className = "WhiteHeaderWrapper" title="Lørdagstur">
                
            </OwnWhiteHeaderWrapper>
                <TimeContainer>
                    <OwnLandingPageCategory title="26.01.21 - 14.00" />
                </TimeContainer>
                { creator ? 
                    <OptionsContainer>
                        <EditTripButton title="Rediger"/>
                        <DeleteTripButton title="Slett"/>
                    </OptionsContainer> :
                    ""
                }
            <OwnGreenBox>
                <LandingPageCategory title="Kommer"/>
                <TripComponent name="Awalle" img="" />


            </OwnGreenBox>
        </>
    )
}

export default SpecificTripPage;