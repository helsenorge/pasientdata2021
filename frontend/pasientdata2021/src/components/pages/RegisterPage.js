import styled from "styled-components"

import ColorTriangleWrapper from "./ColorTriangleWrapper"

import UserInputField from "../inputFields/UserInputField"

import RegisterButton from "../buttons/LoginButton"

import UnderlineButton from "../buttons/UnderlineButton"

const BottomWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #7BEFB2;
  padding: 10px 70px 130px 70px;
`

const LoginButtonTheme = {
    marginTop: "25px"
}

const UnderlineButtonTheme = {
    marginTop: "30px"
}

function RegisterPage() {
    return (
        <ColorTriangleWrapper className="ColorTriangle">
          <BottomWrapper className="BottomWrapper">
            <UserInputField placeholder="Navn" />
            <UserInputField placeholder="Epost" />
            <UserInputField placeholder="Passord" type="password" />
            <UserInputField placeholder="Gjenta passord" type="password" />
            <RegisterButton theme={LoginButtonTheme}>Registrer</RegisterButton>
            <UnderlineButton theme={UnderlineButtonTheme}>Avbryt</UnderlineButton>
          </BottomWrapper>
        </ColorTriangleWrapper>
    )
}

export default RegisterPage
