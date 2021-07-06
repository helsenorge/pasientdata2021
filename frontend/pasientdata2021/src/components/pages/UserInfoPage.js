
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner"
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper"
import styled from "styled-components"
import UserInputField from "../inputFields/UserInputField"
import LoginButton from "../buttons/LoginButton"

import { useState } from "react"

import axios from "axios"

import { useHistory } from "react-router"

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
    const [showError, setShowError] = useState(false);
    const history = useHistory();

    
    function sendData(username){
        axios.post('/user/setusername',{username})
            .then(function(response){
                setRequestResult(response.data)
                history.push("/map");
            })
            .catch(function (error) {
                console.log(error);
                setShowError(true);
            })
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
                {showError ? 
                <BottomText>
                Noe gikk galt. Vennligst prøv igjen med et annet brukernavn.
                </BottomText> : "" 
                }
            </CustomGreenBox>
        </Wrapper>
    )
}

export default UserInfoPage

