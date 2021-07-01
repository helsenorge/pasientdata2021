
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner"
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper"
import styled from "styled-components"
import UserInputField from "../inputFields/UserInputField"
import LoginButton from "../buttons/LoginButton"

import { useState } from "react"

import axios from "axios"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    `

const CustomGreenBox = styled(GreenBoxRoundedCorner)`
    padding: 20px 50px 20px 50px;
    justify-content: space-around;
    padding-bottom: 300px;
    `

const TopText = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`
const BottomText = styled.div`
    text-align: center;
    font-size: 20px;
    color: #6C757D;
`

function UserInfoPage() {
    const [requestResult, setRequestResult] = useState({});
    const [userInput, setUserInput] = useState("");
    
    function sendData(username){
        console.log("SEND REQUEST WITH USERNAME: ".concat(username))
        axios.post('/user/setusername',{username})
            .then(response => setRequestResult(response.data));
    }

    return (
        <Wrapper>
            <WhiteHeaderWrapper title="Brukerinformasjon" />
            <CustomGreenBox>
                <div>
                    <TopText>Velkommen!</TopText>
                    <BottomText>Vi trenger litt ekstrainformasjon om deg</BottomText>
                </div>
                <UserInputField placeholder="Brukernavn" onChange={e=>setUserInput(e.target.value)}/>
                <LoginButton onClick={()=>sendData(userInput)} >
                    Fortsett
                </LoginButton>
            </CustomGreenBox>
        </Wrapper>
    )
}

export default UserInfoPage

