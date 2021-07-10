import styled from "styled-components";
import ColorTriangleWrapper from "./ColorTriangleWrapper";
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";
import UnderlineButton from "../buttons/UnderlineButton";

import { useHistory } from "react-router";

import GoogleLogin from "react-google-login";

import axios from "axios";

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

    function responsegoogle(e) {
        var Provider = "ofdi";
        var axios = require('axios'); 
        axios({
            method: 'post',
            url: localStorage.getItem('baseurl').concat('/user/authenticate'),
            headers: { 
                'Content-Type': 'application/json'
            },
            data : JSON.stringify({
                "Provider": e["googleId"],
                "IdToken": e["tokenId"]
                })
            })
            .then(function (response) {
                axios.defaults.headers.common['Authorization'] = "Bearer ".concat(response.data['token']);
                localStorage.setItem('token', response.data['token']);
                localStorage.setItem('user', response.data);
                if (response.data['username'] === ""){
                        history.push("/userinfo");
                }else{
                        history.push("/map");
                };
            })
            .catch(function (error) {
            console.log(error);
        });
    }
 
    function responsefailedgoogle(e) {
        console.log(e);
    }

    
    return (
        <ColorTriangleWrapper className="ColorTriangle">
          <BottomWrapper className="BottomWrapper">
            <GoogleLogin
                clientId="571415920346-g7d1cr0ot7d6t5vubb5qbasr3egptkcq.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responsegoogle}
                onFailure={responsefailedgoogle}
                cookiePolicy={'single_host_origin'}
                />
            <UnderlineButton onClick={() => history.push('/welcome')} theme={UnderlineButtonTheme}>Avbryt</UnderlineButton>
          </BottomWrapper>
        </ColorTriangleWrapper>
    )
}

export default LoginPage;
