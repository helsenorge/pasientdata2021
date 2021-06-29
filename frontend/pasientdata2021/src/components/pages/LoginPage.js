import styled from "styled-components";
import ColorTriangleWrapper from "./ColorTriangleWrapper";
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";
import UnderlineButton from "../buttons/UnderlineButton";

import { useHistory } from "react-router";

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

const UserInputFieldBottom = styled(UserInputField)`
    margin-top: 15px;
`;

function LoginPage() {

    const history = useHistory();
    
    return (
        <ColorTriangleWrapper className="ColorTriangle">
          <BottomWrapper className="BottomWrapper">
            <UserInputField placeholder="Email" />
            <UserInputFieldBottom placeholder="Passord" type="password"/>
            <LoginButton onClick={() => history.push("/map")} theme={LoginButtonTheme}>Logg inn</LoginButton>
            <UnderlineButton onClick={() => history.goBack()} theme={UnderlineButtonTheme}>Avbryt</UnderlineButton>
          </BottomWrapper>
        </ColorTriangleWrapper>
    )
}

export default LoginPage;
