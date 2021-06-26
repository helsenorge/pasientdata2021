
import styled from 'styled-components';

import UserInputField from '../inputFields/UserInputField';

import MapComponent from './MapComponent';

import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner';

import {FaTimes, FaChevronRight} from 'react-icons/fa'

import FriendsBox from '../FriendsBox';

import UnderlineButton from '../buttons/UnderlineButton';

import LandingPageCategory from '../boxes/LandingPageCategory';

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: white;
    `


    const SubTitle = styled.a`
        color: rgba(0,0,0,.87);
    `

    const CenterText = styled.h2`
        text-align: center;
    `

   const MapContainer = styled(MapComponent)`
        height: 500px;
   `

   const CustomGreenBox = styled(GreenBoxRoundedCorner)`
   `

   const PersonBox = styled(FriendsBox)`
        justify-content: space-evenly;
        margin: 0px 0px 20px 0px;
   `

   const ArrowButton = styled(FriendsBox)`
        justify-content: space-between;
        margin: 0px 0px 20px 0px;
   `

function CreateTripPage() {
    return (
        <Wrapper>
        <MapContainer className="MapContainer" />
        <CustomGreenBox>
            <CenterText>Lag Tur</CenterText>
            <UserInputField placeholder="Navn"/>
            <UserInputField placeholder="Dato"/>
            <SubTitle>Inviter</SubTitle>
            <UserInputField placeholder="Inviter andre"/>
            
                <LandingPageCategory title="Inviterte">

                <PersonBox title="Torstein" imgPath="person.svg">
                    <FaTimes style={{color:'red'}} />
                </PersonBox>

                <PersonBox title="Awalle" imgPath="person.svg">
                    <FaTimes style={{color:'red'}} />
                </PersonBox>
                </LandingPageCategory>

                <LandingPageCategory title="Rute">

                </LandingPageCategory>

                <ArrowButton title="Definer rute">
                    <FaChevronRight />
                </ArrowButton>
                <UnderlineButton>Lag</UnderlineButton>
        </CustomGreenBox>
        </Wrapper>
    )
}

export default CreateTripPage;
