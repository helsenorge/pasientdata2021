import styled from "styled-components";

import LoginButton from "../buttons/LoginButton";

const LoginPage = () => {

    const Wrapper = styled.div`
      background-color: #f1f1f1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

    return (
        <Wrapper className="Wrapper">
            <TopImage src="nhn_logo.svg"></TopImage>
            <LoginButton>Logg inn</LoginButton>
            <LoginButton theme={greenTheme}>Registrer</LoginButton>
        </Wrapper>
    )
}

export default LoginPage;