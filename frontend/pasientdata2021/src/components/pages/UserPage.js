
import styled from 'styled-components'

import ButtonBox from '../boxes/ButtonBox'
import TopBox from '../boxes/TopBox'
import GreenBoxRoundedCorner from '../boxes/GreenBoxRoundedCorner'

import LandingPageLink from '../buttons/LandingPageLink'

import LandingPageCategory from '../boxes/LandingPageCategory';
import { useState, useEffect } from 'react';
import axios from 'axios';
import WhiteHeaderWrapper from '../boxes/WhiteHeaderWrapper';

const CustomPageLink = styled(LandingPageLink)`
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
          <GreenBoxRoundedCorner className="MainBox">
            <LandingPageCategory title="BRUKER-INFO">
            <div>
                <h2>
                    {userResult.name} 
                </h2>
                <h4>
                    {userResult.username} 
                </h4>
            </div>
            </LandingPageCategory>
        </GreenBoxRoundedCorner>
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