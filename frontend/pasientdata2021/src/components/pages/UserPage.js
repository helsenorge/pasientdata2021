
import styled from 'styled-components'

import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner'


import LandingPageCategory from '../boxes/LandingPageCategory';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WhiteHeaderWrapper from '../boxes/WhiteHeaderWrapper';


const UserIcon = styled.img`
    height: 130px;
`
const UserFullName = styled.h2`
   text-align: center;
`

const UserName = styled.h4`
    text-align: center;
`

const CustomGreenBox = styled(GreenBoxRoundedCorner)`
    display: flex;
    flex-direction: column;
`

const UserPage = () => {
    const [userResult, setUserResult] = useState({});
    
    useEffect(() => {
        axios.get('User')
        .then(response => setUserResult (response.data));
    }, []);

    return (
        <>
        <WhiteHeaderWrapper title="Brukerinformasjon" />
          <CustomGreenBox>
            <LandingPageCategory title="BRUKER-INFO">
            <UserIcon src="person.svg" alt="Icon" height ={100} /> 
                <UserFullName>
                    {userResult.name} 
                </UserFullName>
                <UserName>
                    {userResult.username} 
                </UserName>
            </LandingPageCategory>
        </CustomGreenBox>
        </>
    )
}

        
export default UserPage;
            
            //</LoginButton>
            //<BottomText>Vi trenger litt ekstrainformasjon om deg</BottomText>
            //<LoginButton onClick={()=>sendData(userInput)} >
            //<UserInputField placeholder="Brukernavn" onChange={e=>setUserInput(e.target.value)}/>
            
            /*<BottomText>
            Noe gikk galt. Vennligst prøv igjen med et annet brukernavn.
            
            
           
            
            {userResult.name}
            {userResult.username}   
            
            </BottomText> : "" */ 