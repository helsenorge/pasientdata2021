import styled from "styled-components";

import LoginButton from "../buttons/LoginButton";

import { useEffect, useState } from "react";

import { useHistory } from 'react-router-dom';

import axios from "axios";

const Wrapper = styled.div`
  background-color: #f1f1f1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 40px 0px 40px;
`

const TopImage = styled.img`
    margin-bottom: 80px;
    max-width: 300px;
`

const greenTheme = {
    backgroundColor: "#015945",
    marginTop: "25px",
    color: "white"
}



const WelcomePage = () => {
    const history = useHistory();
    
    const [requestResult, setRequestResult] = useState({})
    
    useEffect(() => {
        axios.get('/friend/test')
            .then(response => setRequestResult(response.data));
    }, []);


    console.log(requestResult)

    return (
        <Wrapper className="Wrapper">
            <TopImage src="nhn_logo.svg"></TopImage>
            <LoginButton onClick={() => history.push("/login")} type="button">Logg inn</LoginButton>
            <LoginButton onClick={() => history.push("/register")} theme={greenTheme}>Registrer</LoginButton>
        </Wrapper>
    )
}

export default WelcomePage;