import styled from "styled-components";
import ColorTriangleWrapper from "./ColorTriangleWrapper";

import { useHistory } from "react-router";

import GoogleLogin from "react-google-login";

const BottomWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #7BEFB2;
    padding: 10px 70px 130px 70px;
`

function LoginPage() {

    const history = useHistory();

    function responsegoogle(e) {
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
                localStorage.setItem('user', JSON.stringify(response.data));

                if (response.data['username'] === ""){
                        history.push("/userinfo");
                }else{
                        history.push("/map");
                };
            })
            .catch(function (error) {
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
          </BottomWrapper>
        </ColorTriangleWrapper>
    )
}

export default LoginPage;
