import styled from "styled-components"

import ColorTriangle from "./ColorTriangle"

import UserInputField from "../inputFields/UserInputField"

import LoginButton from "../buttons/LoginButton"

function RegisterPage() {

    const Wrapper = styled.div`
      background-color: #f1f1f1;
      height: 100%;
      display: flex;
      flex-direction: column;
    `
    
    const TopImage = styled.img`
        margin-top: 0px;
        margin-left: 15px;
        max-width: 230px;
    `

    const BottomWrapper = styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #7BEFB2;
      padding: 10px 70px 10px 70px;
    `

    const Offset = styled.div`
        display: flex;
        height: 50px;
        background-color: #ffffff;
    `

    return (
        <Wrapper className="Wrapper">
        <Offset className="WhiteOffset" />
        <ColorTriangle className="ColorTriangle">
            <TopImage src="nhn_logo.svg"></TopImage>
        </ColorTriangle>
        <BottomWrapper className="BottomWrapper">
            <UserInputField placeholder="Email" />
            <UserInputField placeholder="Passord" />
            <LoginButton></LoginButton>
        </BottomWrapper>
        </Wrapper>
    )
}

export default RegisterPage
